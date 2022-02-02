const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()

const PORT = config.get("port")

app.use(express.json({extended: true}))

app.use("/api/auth", require("./routes/auth"))

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"))
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
    } catch (e) {
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start()