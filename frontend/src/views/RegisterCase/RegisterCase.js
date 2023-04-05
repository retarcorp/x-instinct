import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Alert, Backdrop, Button, Chip, CircularProgress, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Slider, Snackbar, Stack, Switch, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import { activities, grades, ages } from '../../data'
import { useDispatch } from 'react-redux';
import { appendCase } from '../../store';
import router from '../../router';

export default function RegisterCase(props) {

    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [position, setPosition] = useState(null);
    const [safe, setSafe] = useState(false);
    const [selectedGrades, setSelectedGrades] = useState(grades.map(({ id }) => ({ id, value: 0 })));
    const [overallGrade, setOverallGrade] = useState(0);
    const [comment, setComment] = useState('');
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [registerInProcess, setRegisterInProcess] = useState(false);
    const [validationSnackOpened, setValidationSnackOpened] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');

    const dispatch = useDispatch();

    const updateDetailGrade = (id, value) => {
        const updatedGrades = [...selectedGrades]
        updatedGrades.find((item) => id === item.id).value = value;
        setSelectedGrades(updatedGrades)
    }

    const getGradeValue = (id) => selectedGrades.find(item => item.id === id).value;

    const toggleSelectedActivity = (title) => setSelectedActivities(
        selectedActivities.includes(title)
            ? selectedActivities.filter(item => item !== title)
            : selectedActivities.concat([title])
    )

    const registerCase = () => {
        
        const throwError = (message) => {
            setValidationMessage(message);
            setValidationSnackOpened(true);
        }

        if (!name) {
            return throwError('Name must be specified!')
        }
        if (!position) {
            return throwError('Position must be specified!')
        }
        if (!age) {
            return throwError('Age must be specified!')
        }

        const registrationData = {
            date, name, age, position, safe, selectedGrades, overallGrade, comment, selectedActivities
        }
        
        console.log(registrationData)

        setRegisterInProcess(true);
        dispatch(appendCase(registrationData))
        // @TODO connect to backend
        // Hello

        window.setTimeout(() => {
            setRegisterInProcess(false)
            window.setTimeout(() => router.navigate('/#/'), 300)
        }, 1500)
    }

    return <div>

        <Box padding={'20px'} maxWidth={'800px'} margin='0 auto'>
            <Typography variant='h2' textAlign={'start'}> Register Case! </Typography>

            <FormControl fullWidth margin='normal'>
                <TextField
                    label='Date'
                    type={'date'}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}

                />
            </FormControl>

            <FormControl fullWidth margin='normal'>
                <TextField
                    label='Name'
                    type={'text'}
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
            </FormControl>

            <FormControl fullWidth margin='normal'>
                <ToggleButtonGroup
                    exclusive
                    value={age}
                    onChange={({ target }, newVal) => setAge(newVal)}
                >
                    {ages.map(age => <ToggleButton value={age} key={age}>{age}</ToggleButton>)}

                </ToggleButtonGroup>
            </FormControl>

            <FormControl fullWidth margin='normal'>

                <ToggleButtonGroup
                    exclusive
                    value={position}
                    onChange={(e, newVal) => setPosition(newVal)}

                >
                    <ToggleButton value="top">⬆️ Top</ToggleButton>
                    <ToggleButton value="versatile">↕️ Versatile</ToggleButton>
                    <ToggleButton value="bottom">⬇️ Bottom</ToggleButton>
                </ToggleButtonGroup>

            </FormControl>

            <FormControl>
                <FormControlLabel
                    label='Safe Sex'
                    control={<Switch color='success' value={safe} onChange={({ target }) => setSafe(target.value)} />}
                />

            </FormControl>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant='h4' textAlign={'start'}>Detail grades</Typography>

            {grades.map(grade => <FormControl fullWidth margin='normal' key={grade.id}>
                <Typography variant='caption' textAlign={'start'}>{grade.name}</Typography>
                <Grid container spacing={2} alignContent='center' alignItems={'center'}>
                    <Grid item>{grade.symbol}</Grid>
                    <Grid item xs>
                        <grade.component step={0.5} min={0} max={5} value={getGradeValue(grade.id)} onChange={({ target }) => updateDetailGrade(grade.id, target.value)} />
                    </Grid>
                    <Grid item width={40} textAlign='right'>
                        {getGradeValue(grade.id)}
                    </Grid>
                </Grid>
            </FormControl>)}

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant='h4' textAlign={'start'}>General Grade</Typography>

            <FormControl fullWidth margin='normal'>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Typography variant='caption'> -5 </Typography>
                    <Slider
                        min={-5}
                        max={5}
                        step={0.5}
                        marks={[-5, 0, 5].map(value => ({ value }))}
                        valueLabelDisplay="auto"
                        value={overallGrade}
                        onChange={({ target }) => setOverallGrade(target.value)}

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
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                />

            </FormControl>

            <FormControl fullWidth margin='normal'>
                <FormLabel component="legend" style={{ textAlign: 'start', marginBottom: '10px' }}>Activities</FormLabel>

                <Stack direction={'row'} spacing={1} rowGap={1} flexWrap={'wrap'}>

                    {activities.map(title => (
                        <Chip
                            label={title}
                            key={title}
                            variant={selectedActivities.includes(title) ? 'filled' : 'outlined'}
                            color={selectedActivities.includes(title) ? 'success' : 'default'}
                            onClick={() => toggleSelectedActivity(title)}
                        />))}

                </Stack>

            </FormControl>

            <FormControl fullWidth margin='normal'>
                <Button variant='contained' onClick={() => registerCase()}>Register Case</Button>

                <Snackbar open={validationSnackOpened} autoHideDuration={4000} onClose={() => setValidationSnackOpened(false)}>
                    <Alert severity='warning' sx={{width: '100%'}}> {validationMessage} </Alert>
                </Snackbar>
            </FormControl>

            <Backdrop open={registerInProcess}>
                <CircularProgress color="warning" />
            </Backdrop>

        </Box>
    </div>
}