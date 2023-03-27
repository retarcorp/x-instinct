import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CaseCard from '../../components/CaseCard/CaseCard';
import { testItem } from '../../testData';

export default (props) => {

    // @TODO connect to backend
    
    const caseList = useSelector(({ caseList }) => caseList)

    const zeroCases = (
        <Box textAlign={'center'}>
            <div>
                <Typography typeof='p' variant='body1' >There are no cases yet.</Typography>
            </div>
            <Button variant='contained'>
                <Link to={'/add'} style={{textDecoration: 'none', color: 'inherit'}}> Add one! </Link>
            </Button>
        </Box>
    );

    return <>
        <Box padding={'20px'} margin='0 auto' maxWidth={800}>
            <Typography variant='h2'>Cases List</Typography>

            <Box sx={{ backgroundColor: '#efefef' }} padding={'20px'}>
                {caseList.length ? null : zeroCases}
                {caseList.map(item => <CaseCard item={item} />)}
            </Box>
        </Box>
    </>
}