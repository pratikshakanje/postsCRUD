let cl = console.log;

const app = require("./app.js")

const port = 3000


app.listen(port, () => {
  cl("Post data fetched successfully")
})