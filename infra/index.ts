import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { config as dotenvConfig } from "dotenv";
import {resolve} from "path";

const dotenvConfigPath: string = process.env.DOTENV_CONFIG_PATH || "./.env";
dotenvConfig({ path: resolve(__dirname, dotenvConfigPath) });

const domainName = process.env.DOMAINNAME || '';
const route53DomainZoneId = process.env.ROUTE53DOMAINZONEID || '';
const certARN = process.env.CERTARN || '';

const domain = new aws.apigateway.DomainName("domain", {
    certificateArn: certARN,
    domainName: domainName
})

const record = new aws.route53.Record("record", {
    type: "A",
    zoneId: route53DomainZoneId,
    name: domainName,
    aliases: [{
        name: domain.cloudfrontDomainName,
        zoneId: domain.cloudfrontZoneId,
        evaluateTargetHealth: true
    }]
})

export let recordId = record.id;
export let recordName = record.name;