import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Form from "../Form/Form";

export default function BlogPreview() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestBlogs, setLatestBlogs] = useState([]);

  // Fetch selected blog
  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/admin/blog/${blogId}`);
      setBlog(response.data.blog);
    } catch (err) {
      console.error("Error fetching blog:", err);
    }
  };

  // Fetch all blogs and sort by latest
  const fetchLatestBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/admin/blogs");
      const sorted = response.data.blogs.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      const filtered = sorted.filter((b) => b.id !== parseInt(blogId)); // exclude current
      setLatestBlogs(filtered.slice(0, 2));
    } catch (err) {
      console.error("Error fetching latest blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchLatestBlogs();
  }, [blogId]);

  return (
    <section className="py-10 sm:px-8 md:px-16 flex flex-col sm:flex-row gap-10">
      {/* Left Side: Blog Content */}
      <div className="w-full sm:w-2/3 space-y-6">
        {blog ? (
          <>
            <h1 className="text-3xl font-bold text-[#001040]">{blog.title}</h1>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </>
        ) : (
          <p>Loading blog...</p>
        )}
      </div>

      {/* Right Side: Form + Latest Blogs */}
      <div className="sm:w-1/3 w-full space-y-6">
        
          <Form />
        

        <div className="space-y-4">
          <h2 className="keynotespeakerhead">Latest Blogs</h2>
          {latestBlogs.map((b) => (
            <Link to={`/blog/${b.id}`} key={b.id} style={{textDecoration:"none"}}>
              <div className="border rounded-md p-3 hover:shadow transition ">
                <h3 className="font-semibold" style={{color:"#001040"}}>{b.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {b.content.replace(/<[^>]+>/g, "").slice(0, 120)}...
                </p>
                <span className="text-blue-600 text-sm hover:underline">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
