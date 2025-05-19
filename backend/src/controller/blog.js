import { createBlog,getBlogs } from "../services/blog.js";

export const handleCreatBlog = async(req,res) => {
     try {
    const { title, content } = req.body;
    const adminId = req.adminId;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const blog = await createBlog(adminId, title, content);
    res.status(201).json({
        message : "Created Successfully",
        blog : blog
    });
  } catch (error) {
    console.error('Create blog error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const  handleAllBlogs = async(req,res) => {
  try{
    const adminId = req.adminId;
    const blogs = await getBlogs(adminId);
    res.status(201).json({
        message : "Created Successfully",
        blogs : blogs
    });
  }catch(error){
    console.error('Create blog error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}