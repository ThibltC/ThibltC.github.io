import React from 'react';
import { Timeline } from '@material-ui/lab';
import { Container, Typography } from '@material-ui/core';

import TimeLineRow from './AssetTimeLine/TimeLineRow';

const TimeLineComponent = ({ list }) => {
    return (
        <div>
            <Timeline>
                {list.map(e => {
                    return (<TimeLineRow date={e.date} info={e.label} job={e.job} />)
                })}
            </Timeline>
        </div>
    )
}

export default TimeLineComponent
