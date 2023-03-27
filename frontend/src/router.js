import { createHashRouter } from "react-router-dom";
import RegisterCase from './views/RegisterCase/RegisterCase';
import CaseList from './views/CaseList/CaseList';

const router = createHashRouter([{
    path: "/",
    element: <CaseList />
}, {
    path: "/add",
    element: <RegisterCase />
}])

export default router;