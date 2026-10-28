const posts = require("../data/post.js") ; 


//get all data
const sendPost = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      body: posts,
      message: "post fetched successfully"
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error...!",
      error: err.message
    })
  }
}

//get single post
const sendPostById = (req, res) => {
  try {
    const id = Number(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      })
    }

    res.status(200).json({
      success: true,
      body: post,
      message: "Post fetched successfully "
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message
    })
  }
}

//create
const createPost = (req, res) => {
  try {
    let newPost = {
      id: Date.now().toString(),
      userId: req.body.userId,
      title: req.body.title,
      body: req.body.body,
    }

    posts.push(newPost)

    res.status(201).json({
      success: true,
      body: newPost,
      message: "Post created successfully"
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: " Something went wrong",
      error: err.message
    })
  }
}


//update
const updatePost = (req, res) =>{
  try{
    let post = posts.find(post => post.id == req.params.id);

    if(!post){
      return res.status(404).json({
        success: false,
        message: "Post not found"
      })
    }

    post.userId = req.body.userId;
    post.title = req.body.title;
    post.body = req.body.body;

    res.status(200).json({
      success: true,
      body: post,
      message: "Post updated successfully",
    })
  }catch(err){
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message
    })
  }
}

//delete
const deletePost = (req, res)=>{
  try{
    let getInd = posts.findIndex(post => post.id == req.params.id);

    if(getInd === -1){
      return res.status(404).json({
        success: false,
        message: "Post not found"
      })
    }
    let deletedPost = posts.splice(getInd, 1);

    res.status(200).json({
      success: true,
      body: deletedPost[0],
      message: "Post deleted successfully",
    })
  }catch(err){
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message
    })
  }
}


module.exports = {
    sendPost,
    sendPostById,
    createPost,
    updatePost,
    deletePost,
}