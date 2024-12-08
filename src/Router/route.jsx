import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import AddVisa from "../components/AddVisa/AddVisa";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllVisas from "../components/AllVisas/AllVisas";
import Home from "../components/Home/Home";
import PrivateRoute from "./PrivateRoute";
import VisaDetails from "../components/VisaDetails/VisaDetails";


const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/visas")
            },
            {
                path: "/all-visas",
                element: <AllVisas />,
                loader: () => fetch("http://localhost:5000/all-visas")
            },
            {
                path: "/visa/details/:id",
                element: <PrivateRoute>
                    <VisaDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/all-visas/${params.id}`)
            },
            {
                path: "/add-visa",
                element: <PrivateRoute>
                    <AddVisa />
                </PrivateRoute>
            },
            {
                path: "/my-added-visas",
                element: <PrivateRoute>
                    <h2>My Added Visas</h2>
                </PrivateRoute>
            },
            {
                path: "/my-applications",
                element: <PrivateRoute>
                    <h2>My Applications Visa</h2>
                </PrivateRoute>
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default route;