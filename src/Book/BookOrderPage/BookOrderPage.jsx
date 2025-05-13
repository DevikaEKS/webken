import  { useEffect, useState } from 'react';
import axios from 'axios';
import AdditionalDetail from '../AdditionalDetail/AdditionalDetail';


function BookPurchase() {

    const getBookIdFromUrl = () => {
    
    const urlPath = window.location.pathname;
    const pathParts = urlPath.split('/');
    const bookId = pathParts[pathParts.length - 1]; 
    return bookId;
  };


  const id = getBookIdFromUrl();
   
  const [productCount, setProductCount] = useState(1);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [showFull, setShowFull] = useState(false);

  const description = book?.book_description || "No description available.";
  const words = description.trim().split(/\s+/);
  const wordCount = words.length;

  const shouldTruncate = wordCount > 500;
  const preview = words.slice(0, 400).join(" ");
  const remaining = words.slice(400).join(" ");


  useEffect(() => {
    setLoading(true);
    
    axios.get(`http://localhost:3000/api/v1/admin/getBookById/${id}`)
      .then((res) => {
        if (res.data && res.data.book) {
          const bookData = res.data.book;
          setBook(bookData);
          
          
          if (bookData.images && bookData.images.length > 0) {
          
            const imageArray = typeof bookData.images === 'string' 
              ? JSON.parse(bookData.images) 
              : bookData.images;
              
            setSelectedImage(imageArray[0]);
          }
          
         
          if (bookData.kindle) setSelectedFormat({ type: 'kindle', price: bookData.kindle });
          else if (bookData.hardcover) setSelectedFormat({ type: 'hardcover', price: bookData.hardcover });
          else if (bookData.audible) setSelectedFormat({ type: 'audible', price: bookData.audible });
          else if (bookData.audio_cd) setSelectedFormat({ type: 'audio_cd', price: bookData.audio_cd });
        } else {
          setError("Book not found");
        }
      })
      .catch((err) => {
        console.error('Failed to fetch book data:', err);
        setError("Failed to load book data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); 

  const increaseCount = () => {
    setProductCount(prev => prev + 1);
  };

  const decreaseCount = () => {
    setProductCount(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleThumbnailClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const handleFormatSelection = (type, price) => {
    setSelectedFormat({ type, price });
  };

  if (loading) {
    return <div className="p-6 text-center">Loading book details...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  if (!book) {
    return <div className="p-6 text-center">No book data available</div>;
  }

  const images = typeof book.images === 'string' 
    ? JSON.parse(book.images) 
    : book.images || [];
    
  const normalizeImagePath = (path) => {
    return path.replace(/\\/g, '/');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 my-5 bg-white text-[#001040]">
      <div className="flex flex-col md:flex-row gap-8">
       
        <div className="md:w-1/3">
          <div className="border border-[#BAB8B8] bg-[#F5F5F5] rounded-lg p-4 flex items-center justify-center">
            <img
              src={selectedImage ? `http://localhost:3000/${normalizeImagePath(selectedImage)}` : "https://via.placeholder.com/400x600"}
              alt={`${book.title} Cover`}
              className="rounded  max-h-[500px] object-contain"
            />
          </div>
          
          {images.length > 0 && (
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {images.map((img, index) => (
                <img 
                  key={index} 
                  src={`http://localhost:3000/${normalizeImagePath(img)}`}
                  className={`rounded w-20 h-20 object-cover cursor-pointer border-2 ${
                    selectedImage === img ? 'border-blue-500' : 'border-transparent'
                  }`}
                  alt={`${book.title} thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(img)}
                />
              ))}
            </div>
          )}
        </div>

       
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="my-4 text-md">by {book.author_detail || "Unknown Author"}</p>

        
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < book.stars ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2">{book.stars} out of 5</span>
          </div>

          
          <div className="flex flex-wrap items-center gap-2 mb-6 text-sm font-normal">
            <h5 className="text-md">Format:</h5>
            {book.kindle && (
              <button 
                className={`px-4 py-2 border rounded hover:bg-[#001040] hover:text-white ${selectedFormat?.type === 'kindle' ? 'bg-[#001040] text-white' : ''}`}
                onClick={() => handleFormatSelection('kindle', book.kindle)}
              >
                Kindle (${book.kindle})
              </button>
            )}
            {book.audible && (
              <button 
                className={`px-4 py-2 border rounded hover:bg-[#001040] hover:text-white ${selectedFormat?.type === 'audible' ? 'bg-[#001040] text-white' : ''}`}
                onClick={() => handleFormatSelection('audible', book.audible)}
              >
                Audible (${book.audible})
              </button>
            )}
            {book.hardcover && (
              <button 
                className={`px-4 py-2 border rounded hover:bg-[#001040] hover:text-white ${selectedFormat?.type === 'hardcover' ? 'bg-[#001040] text-white' : ''}`}
                onClick={() => handleFormatSelection('hardcover', book.hardcover)}
              >
                Hardcover (${book.hardcover})
              </button>
            )}
            {book.audio_cd && (
              <button 
                className={`px-4 py-2 border rounded hover:bg-[#001040] hover:text-white ${selectedFormat?.type === 'audio_cd' ? 'bg-[#001040] text-white' : ''}`}
                onClick={() => handleFormatSelection('audio_cd', book.audio_cd)}
              >
                Audio CD (${book.audio_cd})
              </button>
            )}
          </div>


          <div className="text-4xl font-bold mb-4">
            ${selectedFormat ? selectedFormat.price : (book.kindle || book.hardcover || book.audible || book.audio_cd || 0)}
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <button className="bg-[#ffa200]  text-white px-5 py-2 rounded-full font-semibold border border-gray-400">
              Buy Now
            </button>
            <div className="flex items-center px-5 py-2 rounded-full border border-gray-600 bg-gray-100 text-black">
              <button className="px-2" onClick={decreaseCount}>-</button>
              <input type="text" className="w-12 text-center bg-transparent" value={productCount} readOnly />
              <button className="px-2" onClick={increaseCount}>+</button>
            </div>
            <button className="border border-gray-600 bg-gray-100 px-5 py-2 rounded-full text-black">Read Sample</button>
            <button className="border border-gray-600 px-5 py-2 bg-gray-100 rounded-full text-black">Audio Sample</button>
          </div>

          
          <h2 className="font-semibold mb-2 text-black">Book Description</h2>
          <div>
      <p className="text-black mb-4 font-normal">
        {shouldTruncate ? (
          <>
            {showFull ? (
              <>
                {description}
              </>
            ) : (
              <>
                {preview}...
              </>
            )}
          </>
        ) : (
          description
        )}
      </p>

      {shouldTruncate && (
        <div
          className="mt-4 font-semibold cursor-pointer text-blue-600 hover:underline"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show Less" : "Read More"}
        </div>
      )}
    </div>
        </div>
      </div>
      <AdditionalDetail editorial_review={book.editorial_review} about_author={book.about_author}/>
    </div>
  );
}

export default BookPurchase;