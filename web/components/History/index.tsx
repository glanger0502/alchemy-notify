import { useState, useEffect } from 'react';
import { getActivities } from '../../helpers/getActivities';


export function History() {

    const activities = getActivities();
    console.log(activities);

    const [activityState, setActivityState] = useState(false);
    useEffect(() => {
        if(activities != undefined) {
            setActivityState(true);
        }
    }, [activities])

    return (
        <>
            {!activityState && <div>onLoading</div>}
            {activityState && 
                <div>
                    <ul>
                        {activities?.map((ele) => (
                            <li key={ele.id}>
                                <div>
                                    <label>webhookId: {ele.webhookId}</label>
                                    <label>Id: {ele.id}</label>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </>
    )
}