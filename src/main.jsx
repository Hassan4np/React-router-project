import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './componenets/Home/Home.jsx';
import Users from './componenets/Home/Users/Users.jsx';
import UserDetails from './componenets/Home/UserDetais/UserDetails.jsx';
import Error from './componenets/Home/ErrorsPage/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/about",
        element:<h3>About us</h3>
      },
      {
        path:"/menu",
        element: <h3>Main menu</h3>
      },
      {
        path:"/Titural",
        element:<h3>My tutrial</h3>
      },
      {
        path:"/contact",
        element:<h3>My contuct Us</h3>
      },
      {
        path:"/users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users/>,
      },
      {
        path:"/user/:userid",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element:<UserDetails/>,
      },
    ]
//   },{
//     path:"/about",
//     element: <h1>Hassan is good boy</h1>
//   },{
// path:"/home",
// element:<h1>the main containt</h1>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
