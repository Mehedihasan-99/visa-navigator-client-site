import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import AddVisa from "../components/AddVisa/AddVisa";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllVisas from "../components/AllVisas/AllVisas";
import Home from "../components/Home/Home";


const route = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch("http://localhost:5000/all-visas")
            },
            {
                path: "/all-visas",
                element: <AllVisas/>,
                loader: () => fetch("http://localhost:5000/all-visas")
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
    },
    {
        path: '/register',
        element: <Register/>
    }
])

export default route;