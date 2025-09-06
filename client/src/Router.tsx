import { createBrowserRouter } from "react-router"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Ads } from "./pages/Ads"
import { User } from "./pages/User"
import { Ad } from "./pages/Ad"
import { adsLoader } from "./loaders/adsLoader"
import { adLoader } from "./loaders/adLoader"
import { CreateAd } from "./pages/CreateAd/CreateAd"
import { AllCategories } from "./pages/AllCategories"

export const router = createBrowserRouter(
  [
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
          path: "annonser",
          children: [
            {
              path: "skapa-annons",
              element: <CreateAd />,
            },
            {
              path: ":region/:category?/:subcategory?",
              loader: adsLoader,
              element: <Ads />,
            },
          ],
        },
        {
          path: "annons",
          children: [
            {
              path: ":id",
              loader: adLoader,
              element: <Ad />,
            },
          ],
        },
        {
          path: "/kategorier",
          element: <AllCategories />,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.PROD ? "/Swedad" : "/",
  }
)
