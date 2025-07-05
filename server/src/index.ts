import express, { Request, Response } from "express"

const app = express()

const PORT = 3000

app.get("/", (_, res: Response) => {
  res.send("Hello World")
})

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost: ${PORT}`)
)
