import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getActivities } from '../../helpers/getActivities';

export function History() {
    const activities = getActivities();

    const [activityState, setActivityState] = useState(false);
    useEffect(() => {
        console.log(activities);
        if(activities != undefined) {
            setActivityState(true);
        }
    }, [activities])

    return (
        <>
            {!activityState && <div>onLoading</div>}
            {activityState && 
                <div>
                    <TableContainer overflowX='auto' overflowY='hidden' maxWidth='100%' >
                        <Table variant='simple' size='md'>
                            <TableCaption>search result</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Network</Th>
                                    <Th>Category</Th>
                                    <Th>
                                        FromAddress To
                                        ToAddress
                                    </Th>
                                    <Th>RawValue</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                            {activities?.map((ele) => (
                                <Tr key={ele.id}>
                                    <Td>{ele.event.network}</Td>
                                    <Td>{ele.event.activity == undefined}</Td>
                                    <Td>{ele.event.activity != undefined && ele.event.activity[0].category}</Td>
                                    <Td>
                                        from: {ele.event.activity != undefined && ele.event.activity[0].fromAddress}<br />
                                        to: {ele.event.activity != undefined && ele.event.activity[0].toAddress}
                                    </Td>
                                    <Td>{ele.event.activity != undefined && (ele.event.activity[0].rawContract.rawValue)}</Td>
                                </Tr>
                            ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            }
        </>
    )
}