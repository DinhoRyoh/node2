const express = require('express')

const app = express()

const port = 8000


app.listen(port, (err) => {
  if (err) {
    console.error(err ? err.stack : err)
    process.exit(255)
  }else {
    console.log("listening on *:80");
  }
})
