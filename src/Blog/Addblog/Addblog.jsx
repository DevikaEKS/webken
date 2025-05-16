import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Addblog() {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);

    console.log(content)
  };

  function imageHandler(){
     const input = document.createElement('input');
     input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];

      if(file){
        const formData = new FormData();
        formData.append('image', file);
      }
    }
  }

  return (
    <div className="container my-5 ">
      <h2 className="mb-3">Add Blog Post</h2>
      <form className='shadow-md p-3'>
  <div className="row align-items-center mb-3">
    {/* Label on left (2 columns on large screens, full width on small) */}
    <div className="col-12 col-lg-2 mb-2 mb-lg-0">
      <label className="form-label mb-0">Blog Title</label>
    </div>

    {/* Input on right (10 columns on large, full width on small) */}
    <div className="col-12 col-lg-10">
      <input type="text" className="form-control" />
    </div>  
  </div>
  <div className="col-12 col-lg-2 mb-2 mb-lg-0">
      <label className="form-label mb-0">Blog Content</label>
    </div>
<div className="col-12 col-lg-12">
      <ReactQuill 
        value={content} 
        onChange={handleChange}
        modules={Addblog.modules}
        formats={Addblog.formats}
        placeholder="Write your blog post here..."
      /></div>
      <button className='btn btn-primary my-2'>Submit</button>

    </form>
        </div>
  );
}

// Quill configuration for toolbar + image support
Addblog.modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean']
  ],
};

Addblog.formats = [
  'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'link', 'image'
];

export default Addblog;
