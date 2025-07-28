import { createBrowserRouter } from "react-router"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Ads } from "./pages/Ads"
import { User } from "./pages/User"
import { Ad } from "./components/Ad"
import { adsLoader } from "./loaders/adsLoader"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "ads",
        children: [
          {
            path: "",
            loader: adsLoader,
            element: <Ads />,
          },
          {
            path: ":id",
            element: <Ad />,
          },
        ],
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
])
