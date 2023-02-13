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

// Get all blog
 let blog_detail= async(req,res)=>{
    const blogs = await Blog.find();
    res.send(blogs);
 }
module.exports={
    blog_create,
    blog_detail
}