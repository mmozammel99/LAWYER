import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/add-service',
                element: <PrivetRouter><AddService></AddService></PrivetRouter>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/my-reviews',
                element: <PrivetRouter><MyReviews></MyReviews></PrivetRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])


export default router;