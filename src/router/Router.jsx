import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.jsx"
import Home from "../pages/home/Home";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Menu from "../pages/Menu.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/menu",
                element:<Menu/>
            }
        ]
    },
]);

export default router;