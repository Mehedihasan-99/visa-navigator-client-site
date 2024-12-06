import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import AddVisa from "../components/AddVisa/AddVisa";
import Login from "../components/Login/Login";


const route = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <h2>home</h2>
            },
            {
                path: "/all-visas",
                element: <h2>All Visas</h2>
            },
            {
                path: "/add-visa",
                element: <AddVisa />
            },
            {
                path: "/my-added-visas",
                element: <h2>My Added Visas</h2>
            },
            {
                path: "/my-applications",
                element: <h2>My Applications Visa</h2>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default route;