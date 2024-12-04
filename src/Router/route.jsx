import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const route = createBrowserRouter ([
    {
        path: '/',
        element: <Navbar/>
    }
])

export default route;