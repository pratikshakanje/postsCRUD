const cl = console.log;

const express = require("express")

const router = require("./routers/postRouters")

const app = express();

app.use(express.json()) 
//  app.use(cors({ 
//        origin:'*',
//        method:["GET","POST"]   
//  }))

app.use("/controllersapi/posts", router)

module.exports = app