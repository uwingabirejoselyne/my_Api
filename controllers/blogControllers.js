const Blog = require('../models/blog');
// Create Post
 let blog_create = async (req,res)=>{
    const blog = new Blog({
        image:req.file.path,
        title: req.body.title,
        description: req .body.description
    })
    await blog.save();
    res.send(JSON.stringify(blog));
}
module.exports={
    blog_create
}