const express = require("express")
const cors = require("cors")
const multer = require("multer")
const fs = require("fs");
const parseCsv = multer().single("csv")
const app = express()

const storage= multer.memoryStorage()
const upload = multer({ storage })
app.use(cors())
app.use(express.json())

app.post("/", upload.single('csvfile'), async (req, res) => {
  const buffer  = req.file.buffer
  const csvContent = buffer.toString('utf-8')
  console.log(csvContent)
  res.send("csv berhasil diunggah")
})

app.listen(9000)