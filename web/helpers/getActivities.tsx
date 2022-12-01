import useSWR from 'swr';
import axios from 'axios'

type Activities = {
    "status": string,
    "data": Activity[]
}

type Activity = {
    "createdAt" : string,
    "event": object,
    "webhookId": string,
    "id": string,
    "type": string
}

export function getActivities() {
    const url = "https://glanger.link/address-activity/list";
    const getActivities = (url: string) => axios.get(url,{
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=UTF-8"
        }
    }).then(res => res.data);

    const { data, error } = useSWR<Activities, Error>(url, getActivities)
    return {data, error}

}