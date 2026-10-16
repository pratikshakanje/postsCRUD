
const cl = console.log;

let posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  }
]

const express = require("express");

const app = express();

app.use(express.json())

//get api to fetch all post
app.get("/api/posts", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      body: posts,
      message: "post fetched successfully"
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err.message
    })
  }
})


//get api to fetch to single post
app.get("/api/posts/:id", (req, res) => {
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
})

//create new post
app.post("/api/posts", (req, res) => {
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
})

//update
app.patch("/api/posts/:id", (req, res) =>{
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
})

//delete
app.delete("/api/posts/:id", (req, res)=>{
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
})


app.listen(3000, () => {
  cl("Post data fetched successfully")
})


