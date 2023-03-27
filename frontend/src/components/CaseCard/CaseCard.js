import { Avatar, Button, Card, CardContent, CardHeader, Chip, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { grades } from '../../data';

export default ({ item, ...otherProps }) => {

    const avatar =
        (<Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
            {item.name[0]}
        </Avatar>);

    const gradeScale = Math.round(item.selectedGrades.reduce((s, {value}) => value + s, 0) / (5 * item.selectedGrades.length) * 100)

    const actionBlock = (
        <Typography padding={1}> 🏆 {gradeScale}% ⭐️ {item.overallGrade} </Typography>
    );

    const position = (position) => ({
        'top': '⬆️ Top',
        'versatile': '↕️ Versatile',
        'bottom': '⬇️ Bottom'
    })[position]

    const safeCase = <Typography color={'green'} variant='caption'>✅ Safe sex</Typography>
    const unsafeCase = <Typography color='red' variant='caption'>🆘 Unsafe sex</Typography>

    const renderGrade = (icon, title, value) => <Tooltip title={title} enterDelay={0}><Typography variant='caption'>{icon} {value}</Typography></Tooltip>;

    const renderedGradeList = item.selectedGrades.map(({id, value}) => {
        const grade = grades.find((i) => i.id === id)
        return renderGrade(grade.symbol, grade.name, value)
    })

    return <Card sx={{marginBottom: 2}}>
        <CardHeader
            avatar={avatar}
            action={actionBlock}
            title={item.name + ` (${item.age})`}
            subheader={new Date(item.date).toLocaleDateString()}
            sx={{paddingBottom: 0 }}
        />
        <CardContent>

            <Stack direction={'row'} spacing={2} marginBottom={1}>
                {renderedGradeList}
            </Stack>

            <Stack direction={'row'} spacing={2}>
                {item.safe ? safeCase : unsafeCase}
                <Typography variant='caption' color={'primary'}>{position(item.position)}</Typography>
            </Stack>

            {item.selectedActivities.length ? <Stack direction={'row'} spacing={1} rowGap={1} flexWrap={'wrap'} margin='10px 0'>

                {item.selectedActivities.map(title => (
                    <Chip
                        label={title}
                        key={title}
                        size='small'
                        variant='outlined'
                    />))}

            </Stack> : null}


            {item.comment ? <Typography variant='body2'>{item.comment}</Typography> : null }

        </CardContent>
    </Card>
}