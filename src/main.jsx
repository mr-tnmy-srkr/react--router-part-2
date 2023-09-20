import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import "./App.css";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import ErrorPage from "./components/ErrorPage.jsx/ErrorPage";
// import Header from "./components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts></Posts>,
      },{
        path: "/post/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App></App> */}
  </React.StrictMode>
);


// async ()=> {
//   //       const res =  await fetch(`https://dummyjson.com/products`)
//   //       console.log(res);
//   //       return res
//   //     }