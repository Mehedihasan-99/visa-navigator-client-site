import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";


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
                element: <h2>Add Visa</h2>
            },
            {
                path: "/my-added-visas",
                element: <h2>My Added Visas</h2>
            },
            {
                path: "/my-applications",
                element: <h2>My Applications Visa</h2>
            }
        ]
    }
])

export default route;