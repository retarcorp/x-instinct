import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterCase from './views/RegisterCase/RegisterCase';

const router = createBrowserRouter([{
  path: "/",
  element: <div></div>
},{
  path: "/add",
  element: <RegisterCase />
}])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
