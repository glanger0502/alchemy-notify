import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getActivities } from '../../helpers/getActivities';
import { Activities, AddressActivity, NewActivity } from '../../types';

export function History() {
    const activities = getActivities();

    let initNewActivities: NewActivity[] = [
        {
            "id": "",
            "createdAt": "",
            "type": "",
            "network": "",
            "category": "",
            "erc721TokenId": "",
            "erc1155Metadata": "",
            "value": "",
            "fromAddress": "",
            "toAddress": "",
            "asset": ""
        }
    ];
    const [newActivities, setNewActivities] = useState(initNewActivities);
    const [activityState, setActivityState] = useState(false);
    
    useEffect(() => {
        // console.log(activities);
        if(activities != undefined) {
            // deal with the activity
            let newActivity: NewActivity[]= [];
            activities?.forEach((val) => {
                const activity = val.event.activity;
                // console.log(activity);
                if(activity != undefined) {
                    activity.forEach(act => {
                        let actInfo = {
                            "id": val.id,
                            "createdAt": val.createdAt,
                            "type": val.type,
                            "network": val.event.network,
                            "category": act.category,
                            "erc721TokenId": act.erc721TokenId,
                            "erc1155Metadata": act.erc1155Metadata,
                            "value": act.value,
                            "fromAddress": act.fromAddress,
                            "toAddress": act.toAddress,
                            "asset": act.asset
                        }
                        newActivity.push(actInfo);
                    })
                }
            })
            setNewActivities(newActivity);
            // newActivityState.shift();
            setActivityState(true);
        }
        console.log(newActivities);
    }, [activities])

    return (
        <>
            {!activityState && <div>onLoading...</div>}
            {activityState && 
                    <TableContainer overflowX='auto' overflowY='hidden' maxWidth='100%' >
                        <Table variant='simple' size='md'>
                            <TableCaption>search result</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Network</Th>
                                    <Th>Category</Th>
                                    <Th>
                                        FromAddress<br />
                                        To <br />
                                        ToAddress
                                    </Th>
                                    <Th>RawValue|ERC721ID</Th>
                                    {/* <Th>ERC721</Th> */}
                                </Tr>
                            </Thead>
                            <Tbody>
                            {newActivities?.map((ele,key) => (
                                <Tr key={key}>
                                    <Td>{ele.network}</Td>
                                    <Td>{ele.asset?ele.asset:(ele.erc721TokenId?'ERC721':'ERC1155')}</Td>
                                    <Td>
                                        from: {ele.fromAddress}<br />
                                        to: {ele.toAddress}
                                    </Td>
                                    <Td>{ele.value}{ele.erc721TokenId}</Td>
                                    {/* <Td>{ele.erc721TokenId}{ele.erc721TokenId}</Td> */}
                                </Tr>
                            ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
            }
        </>
    )
}