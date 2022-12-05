export type Activities = {
    "status": string,
    "data": AddressActivity[]
}

export type AddressActivity = {
    "createdAt" : string,
    "event": ActivityEvent,
    "webhookId": string,
    "id": string,
    "type": string
}

export type ActivityEvent = {
    "network": string,
    "activity": Activity[],
}

export type Activity = {
    "category": string,
    "fromAddress": string,
    "toAddress": string,
    "erc721TokenId": string,
    "erc1155Metadata": string,
    "rawContract": {
        "rawValue": number,
        "address": string
    },
    "value": string | null,
    "asset": string | null
}

export type NewActivity = {
    "id": string,
    "createdAt": string,
    "type": string,
    "network": string,
    "category": string,
    "erc721TokenId": string | null,
    "erc1155Metadata": string | null,
    "asset": string | null,
    "fromAddress": string,
    "toAddress": string,
    "value": string | null
}