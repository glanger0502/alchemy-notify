import useSWR from 'swr';
import axios from 'axios'

type Activities = {
    "status": string,
    "data": AddressActivity[]
}

type AddressActivity = {
    "createdAt" : string,
    "event": Event,
    "webhookId": string,
    "id": string,
    "type": string
}

type Event = {
    "network": string,
    "activity": Activity[]
}

type Activity = {
    "category": string,
    "fromAddress": string,
    "toAddress": string,
    "erc721TokenId": string,
    "rawContract": {
        "rawValue": string,
        "address": string
    }
}

export function getActivities() {
    const url = "https://glanger.link/address-activity/list";
    const getActivities = (url: string) => axios.get(url).then(res => res.data);

    const { data, error } = useSWR<Activities, Error>(url, getActivities)

    return data?.data;
}