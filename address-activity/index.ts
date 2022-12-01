import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";

const dotenvConfigPath: string = process.env.DOTENV_CONFIG_PATH || "./.env";
dotenvConfig({ path: resolve(__dirname, dotenvConfigPath) });

const decode = (str: string):string => Buffer.from(str, 'base64').toString('binary');
const encode = (str: string):string => Buffer.from(str, 'binary').toString('base64');

const region = process.env.REGION || 'ap-east-1';
const subject = process.env.SUBJECT || 'glanger-activity-notify';
const topicArn = process.env.TOPICARN || '';
const domainName = process.env.DOMAINNAME || '';
const tableName = process.env.TABLE || '';
const recordName = process.env.RECORDNAME || '';
const recordId = process.env.RECORDID || '';
const bashPath = process.env.ADDRESS_ACTIVITY || '';

const setAddressActivityHandler = async (req:any) => {
    const requestBody =  (req.body != undefined)? decode(req.body) : "";
    if(!requestBody) {
        return {
            statusCode: 200,
            body: JSON.stringify({"status":"error","message":"requestBody is empty"})
        }
    }

    const client = new aws.sdk.DynamoDB.DocumentClient();
    await client.put({
        TableName: tableName,
        Item: JSON.parse(requestBody),
        ReturnValues: 'NONE'
    }).promise();

    const snsClient = new aws.sdk.SNS({
        apiVersion: "2010-03-31",
        region: region
    });
    let params = {
        Message: requestBody,
        Subject: subject,
        TopicArn: topicArn
    };

    await snsClient.publish(params, (err, data) => {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({"status":"ok","message":"address activity success"})
    }
}

const getAddressActivitiesHandler = async (req:any) => {
    const documentClient = new aws.sdk.DynamoDB.DocumentClient();
    const params = {
        TableName: tableName,
        "ScanIndexForward": true
    };
      
    const result = await documentClient.scan(params).promise();

    return {
                statusCode: 200,
                body: JSON.stringify({"status":"ok","data": result.Items})
            }

}

const addressActivityEndPoint = new awsx.apigateway.API("address-activity", {
    routes: [
        {
            path: "/",
            method: "POST",
            eventHandler: async (req) => {
                return (await setAddressActivityHandler(req));
            }
        },
        {
            path: "/list",
            method: "GET",
            eventHandler: async (req) => {
                return (await getAddressActivitiesHandler(req));
            }
        }
    ]
})

console.log(recordName, recordId);
const record = aws.route53.Record.get(recordName, recordId);

const mapping = new aws.apigateway.BasePathMapping("mapping", {
    restApi: addressActivityEndPoint.restAPI,
    basePath: bashPath, // We map our API into the "/page-views" base path
    stageName: addressActivityEndPoint.stage.stageName, // We map the stage we got for free with `.x.API` above
    domainName: domainName, // We map it into the domain we registered above
});


export let endpoint = pulumi.interpolate`https://${record.name}/address-activity`;