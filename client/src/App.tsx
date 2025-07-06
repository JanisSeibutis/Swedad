import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"

type Hello = {
  id: number
  name: string
  created_at: Date
}

function App() {
  const [data, setData] = useState<Hello[]>([])

  // useEffect(() => {
  //   if (data.length > 0) return

  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:3000/test")
  //     setData(response.data)
  //   }

  //   fetchData()
  // }, [])

  return (
    <>
      <h2>
        {data.map((data) => (
          <p key={data.id}>{data.name}</p>
        ))}
      </h2>
    </>
  )
}

export default App
