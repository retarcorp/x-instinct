import React from 'react';
import Typography from '@mui/material/Typography';
import { Chip, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Slider, Stack, Switch, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import { activities, grades } from './data'

export default function RegisterCase(props) {

    return <div>

        <Box padding={'20px'}>
            <Typography variant='h2' textAlign={'start'}> Register Case </Typography>

            <FormControl fullWidth margin='normal'>
                <TextField
                    label='Date'
                    type={'date'}
                    defaultValue={new Date().toISOString().split('T')[0]}

                />
            </FormControl>

            <FormControl fullWidth margin='normal'>
                <TextField
                    label='Name'
                    type={'text'}
                    defaultValue='' />
            </FormControl>

            <FormControl fullWidth margin='normal'>
                <ToggleButtonGroup>
                    <ToggleButton>18-21</ToggleButton>
                    <ToggleButton>21-24</ToggleButton>
                    <ToggleButton>25-28</ToggleButton>
                    <ToggleButton>29-32</ToggleButton>
                    <ToggleButton>33-36</ToggleButton>
                    <ToggleButton>36-42</ToggleButton>
                    <ToggleButton>43-48</ToggleButton>
                    <ToggleButton>49+</ToggleButton>
                </ToggleButtonGroup>
            </FormControl>

            <FormControl fullWidth margin='normal'>

                <ToggleButtonGroup exclusive>
                    <ToggleButton value="top">⬆️ Top</ToggleButton>
                    <ToggleButton value="versatile">↕️ Versatile</ToggleButton>
                    <ToggleButton value="bottom">⬇️ Bottom</ToggleButton>
                </ToggleButtonGroup>

            </FormControl>

            <FormControl>
                <FormControlLabel 
                    label='Safe Sex' 
                    control={<Switch color='success'/>}
                    />

            </FormControl>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant='h4' textAlign={'start'}>Detail grades</Typography>

            {grades.map(grade => <FormControl fullWidth margin='normal' key={grade.id}>
                <Typography variant='caption' textAlign={'start'}>{grade.name}</Typography>
                <Grid container spacing={2} alignContent='center' alignItems={'center'}>
                    <Grid item>{grade.symbol}</Grid>
                    <Grid item xs>
                        <grade.component step={0.5} min={0} max={5} />
                    </Grid>
                    <Grid item>
                        2.5
                    </Grid>
                </Grid>
            </FormControl>)}

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant='h4' textAlign={'start'}>General Grade</Typography>

            <FormControl fullWidth margin='normal'>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Typography variant='caption'> -5 </Typography>
                    <Slider
                        defaultValue={0}
                        min={-5}
                        max={5}
                        step={0.5}
                        marks={[-5, 0, 5].map(value => ({value}))}
                        valueLabelDisplay="auto"

                    />
                    <Typography variant='caption'> 5 </Typography>

                </Stack>

            </FormControl>

            <Divider style={{ margin: '20px 0' }} />

            <FormControl fullWidth margin='normal'>
                <TextField
                    multiline
                    label="Comment"
                    variant='outlined'
                    rows={4}
                />

            </FormControl>

            <FormControl fullWidth margin='normal'>
                <FormLabel component="legend" style={{textAlign: 'start', marginBottom: '10px'}}>Activities</FormLabel>

                <Stack direction={'row'} spacing={1} rowGap={1} flexWrap={'wrap'}>

                    {activities.map(title => <Chip label={title} key={title} variant='outlined'/>)}

                </Stack>

            </FormControl>

        </Box>
    </div>
}