import express  from "express"
import config from "config"
import router from "./router"

const app = express()
const port = config.get<number>('port')

app.use(express.json())
app.use("/api/", router)


app.listen(port, async () => {
    console.log(`starting in the port ${port} localhost:${port}`)
})