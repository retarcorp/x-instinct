import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from '@mui/system';
import router from './router';



function App() {
  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <Box paddingBottom={4}>
        <RouterProvider router={router}></RouterProvider>
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction label="Cases List" icon={<ListAltIcon/>} href='#/'/>
          <BottomNavigationAction label="Create case" icon={<AddCircleOutlineIcon />}  href='#/add/' />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default App;
