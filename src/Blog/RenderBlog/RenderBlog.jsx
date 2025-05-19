import React, { useEffect, useState } from 'react';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const token = localStorage.getItem('admin-token');

      try {
        const res = await fetch('http://localhost:3000/api/v1/admin/blogs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setBlogs(data.blogs);

          console.log(data.blogs)
        } else {
          console.error('Failed to fetch blogs:', data.message);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="card mb-4 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">{blog.title}</h4>
              <div
                className="card-text"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              <p className="text-muted mt-3">
                Created at: {new Date(blog.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
