const express = require("express")

const router = express.Router()

const postController = require("../controllers/postController.js")

//get api to fetch all post
router.get("/", postController.sendPost)


//get api to fetch to single post
router.get("/:id", postController.sendPostById)

//create new post
router.post("/", postController.createPost )

//update
router.patch("/:id", postController.updatePost )

//delete
router.delete("/:id", postController.deletePost)

module.exports = router