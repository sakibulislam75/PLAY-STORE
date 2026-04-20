import { createBrowserRouter } from "react-router";
import Installation from "../../Pages/Installation/Installation";
import Notfound from "../../Pages/Notfound/Notfound";
import RootLayout from "../../LayOut/RootLayout";
import Home from "../../Pages/Home/Home";
import Apps from "../../Pages/Apps/Apps";
import AppDetails from "../../Pages/AppDetails/AppDetails";
import Dashboard from "../../Pages/Home/Dashboard";



const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                // loader: () => fetch('/data.json')
            },
            {
                path: '/Apps',
                // loader: () => fetch('/data.json'),
                Component: Apps
            },
            {
                path: "/Apps/:id",//Apps নামটা যেকোনো হতে পারে, id টা অবশ্যই থাকতে হবে(সাধারণত page/content অনুযায়ী নাম দেওয়া হয়)
                /* loader: async ({ params }) => {
                     const res = await fetch('/data.json');
                     const data = await res.json();
                     return data.find(item => item.id === parseInt(params.id));
                     // params.id = "1"  // string
                 },*/
                Component: AppDetails
            }
            ,
            { path: '/Installation', 
                Component: Installation },
            {
                path: '/Dashboard',
                Component: Dashboard

            }
        ]
    },
    {
        path: '*',
        Component: Notfound
    }
])
export default Router;
