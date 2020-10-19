import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import { Container, Typography, Paper } from '@material-ui/core';


const TimeLineRow = ({ date, info, job }) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">{date}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                        {info}
                    </Typography>
                    <Typography>{job}</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}

export default TimeLineRow
