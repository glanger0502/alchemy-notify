import { useState } from 'react';
import { getActivities } from '../../helpers/getActivities';


export function History() {

    const activities = getActivities();
    console.log(activities);

    const [activityState, setActivityState] = useState(false);

    return (
        <>
            {activityState && <div>onLoading</div>}
            {!activityState && <div>3333</div>}
        </>
    )
}