import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import { router } from "./Router"
import { RouterProvider } from "react-router"

function App() {
  //   const [data, setData] = useState<Hello[]>([])

  //   useEffect(() => {
  //     if (data.length > 0) return

  //     const fetchData = async () => {
  //       const response = await axios.get("http://localhost:3000/ads")
  //       setData(response.data)
  //     }

  //     fetchData()
  //   }, [])

  return (
    <>
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    </>
  )
}

export default App
