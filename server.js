let cl = console.log;
//app import 
const app = require("./app.js")
// port number define 
const port = 7000

//listen the app....
app.listen(port, () => {
  cl(`Post data fetched successfully:http://localhost:${port}/controllersapi/posts`)
})