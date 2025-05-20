import { createBlog,getBlog,getBlogs,updateBlog,deleteBlog } from "../services/blog.js";

export const handleCreatBlog = async(req,res) => {
     try {
    const { title, content } = req.body;
    const adminId = req.adminId;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const blog = await createBlog(adminId, title, content);
    res.status(200).json({
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
    
    const blogs = await getBlogs();
    res.status(201).json({
        message : "Got All Blogs",
        blogs : blogs
    });
  }catch(error){
    console.error('Create blog error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const getParticularBlog = async (req, res) => {
  
  const { blogId } = req.params;


  
  try {
    const blog = await getBlog(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ blog });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};




export const updateBlogController = async (req, res) => {
  const adminId = req.adminId;
  const { blogId } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const success = await updateBlog(adminId, blogId, { title, content });

    if (!success) {
      return res.status(404).json({ message: 'Blog not found or not authorized' });
    }

    res.status(200).json({ message: 'Blog updated successfully' });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const deleteBlogController = async(req,res) => {
  const { blogId } = req.params
  const adminId = req.adminId

  
  if (!blogId || !adminId) {
    return res.status(400).json({ message: 'blogId and adminId are required ' });
  }

  try{
    const result = await deleteBlog({ blogId,adminId })

    if(!result){
      return res.status(404).json({ message: 'Blog not deleted' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  }catch(error){
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}