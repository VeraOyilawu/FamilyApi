const express = require("express")
const familyDB = require("./config/familyDB")
const router = require("./routes/familyRouter")
const PORT = 1717

const app = express()
app.use(express.json())
app.use(router)
app.use("/upload", express.static("upload"))


app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})
