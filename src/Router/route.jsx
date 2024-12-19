import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import AddVisa from "../components/AddVisa/AddVisa";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllVisas from "../components/AllVisas/AllVisas";
import Home from "../components/Home/Home";
import PrivateRoute from "./PrivateRoute";
import VisaDetails from "../components/VisaDetails/VisaDetails";
import MyAddedVisas from "../components/MyAddedVisas/MyAddedVisas";
import MyApplicationsVisas from "../components/MyApplicationsVisas/MyApplicationsVisas";
import Error from "../components/Error/Error";
import UpdateVisa from "../components/UpdateVisa/UpdateVisa";


const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://visa-navigator-server-lac.vercel.app/all-visas")
            },
            {
                path: "/all-visas",
                element: <AllVisas />,
                loader: () => fetch("https://visa-navigator-server-lac.vercel.app/all-visas")
            },
            {
                path: "/visa/details/:id",
                element: <PrivateRoute>
                    <VisaDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://visa-navigator-server-lac.vercel.app/all-visas/${params.id}`)
            },
            {
                path: "/add-visa",
                element: <PrivateRoute>
                    <AddVisa />
                </PrivateRoute>
            },
            {
                path: "/my-added-visas/:email",
                element: <PrivateRoute>
                    <MyAddedVisas/>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://visa-navigator-server-lac.vercel.app/my-visas/${params.email}`)
            },
            {
                path: "/my-applications/:email",
                element: <PrivateRoute>
                    <MyApplicationsVisas></MyApplicationsVisas>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://visa-navigator-server-lac.vercel.app/my-applications/${params.email}`)
            },
            {
                path: "update-visa/:id",
                element: <UpdateVisa />,
                loader: ({ params }) => fetch(`https://visa-navigator-server-lac.vercel.app/all-visas/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default route;