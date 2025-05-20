import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  async function getBlog() {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/admin/blogs");
      setBlogs(response.data.blogs);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  }

  useEffect(() => {
    getBlog();
  }, []);

  const getPreview = (html) => {
    const text = html.replace(/<[^>]+>/g, ""); // strip HTML
    return text.length > 200 ? text.slice(0, 200) + "..." : text;
  };

  return (
    <section className="py-10 sm:px-8 md:px-16 flex flex-col sm:flex-row justify-center items-start gap-10">
      <div className="w-full sm:w-2/3">
        <h1 className="font-semibold text-[24px] sm:text-[32px] text-[#001040] mb-6">All Blogs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40">
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              className="mt-4 text-inherit text-decoration-none" 
              key={blog.id}
            >
              <div className="bg-white border rounded-xl shadow-md p-4 flex flex-col justify-between h-[400px] w-[300px] overflow-hidden">
                <img
                  src="/blog.jpg"
                  alt="Default Blog"
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold mb-3 text-black">{blog.title}</h2>
                  <p className="text-gray-700 text-sm line-clamp-3">{getPreview(blog.content)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}