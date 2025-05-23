import  { useEffect, useState } from 'react';
import axios from 'axios';
import AdditionalDetail from '../AdditionalDetail/AdditionalDetail';
import cart from "../../assets/cart.png"
import profile from "../../assets/person.png"
import { useParams,useNavigate } from 'react-router-dom';
function BookPurchase() {
    const { id } = useParams();
    const navigate = useNavigate();
  const [productCount, setProductCount] = useState(1);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [showFull, setShowFull] = useState(false);
  const [bookReviews,setBookReviews] = useState([])
  const [showModal, setShowModal] = useState(false);

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

  async function gettingBookReviews(){
    const response = await axios.get(`http://localhost:3000/api/v1/admin/reviews/${id}`);
    setBookReviews(response.data.reviews)
  }

  useEffect(() => {
    gettingBookReviews()
  },[])

 const increaseCount = () => {
  const maxQuantity = book?.quantity ?? 1;

  setProductCount((prev) => {
    if (prev < maxQuantity) {
      return prev + 1;
    } else {
      alert("Max Quantity reached");
      return prev;
    }
  });
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

const handleAddToCart = () => {
  // Validate that a format is selected
  if (!selectedFormat) {
    alert('Please select a format before adding to cart.');
    return;
  }

  const cartItem = {
    bookId: id, // Use id from useParams
    id: book._id, // Internal book ID from API (if needed for other purposes)
    title: book.title,
    image: selectedImage,
    quantity: productCount,
    format: selectedFormat.type,
    price: selectedFormat.price,
  };

  // Retrieve existing cart from localStorage or initialize an empty array
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the same book with the same bookId and format exists
  const existingItemIndex = existingCart.findIndex(
    (item) => item.bookId === cartItem.bookId && item.format === cartItem.format
  );

  if (existingItemIndex >= 0) {
    // Update quantity if the bookId and format match
    existingCart[existingItemIndex].quantity += cartItem.quantity;
  } else {
    // Add new item if no match is found
    existingCart.push(cartItem);
  }
  localStorage.setItem('cart', JSON.stringify(existingCart));
  setShowModal(true);
};

console.log(book)

  const images = typeof book.images === 'string' 
    ? JSON.parse(book.images) 
    : book.images || [];
    
  const normalizeImagePath = (path) => {
    return path.replace(/\\/g, '/');
  };

  console.log(selectedImage)

  return (
    <div className="max-w-7xl mx-auto p-6 my-5 bg-white text-[#001040]">
      <div className=' flex justify-end gap-3'>
        <button
        onClick={() =>{
          navigate("/checkout")
        }} 
        className='flex items-center justify-center'>
         
          <div class="shadow-box d-flex justify-content-center align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425z"/>
  </svg>
</div>
        </button>
        <button className='flex items-center justify-center' onClick={() =>{navigate("/register")}}>
         <div class="shadow-box d-flex justify-content-center align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
</div>
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">  
        <div className="md:w-1/3">
          <div className="border border-[#BAB8B8] bg-[#F5F5F5] rounded-lg p-4 flex items-center justify-center">
            <img
              src={selectedImage ? `http://localhost:3000/${normalizeImagePath(selectedImage)}` : "https://via.placeholder.com/400x600"}
              alt={`${book.title} Cover`}
              className="rounded  max-h-[500px] object-contain"/>
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
                Kindle (${parseFloat(book.kindle).toFixed(2)})
              </button>
            )}
            {book.audible && (
              <button 
                className={`px-4 py-2 border rounded hover:bg-[#001040] hover:text-white ${selectedFormat?.type === 'audible' ? 'bg-[#001040] text-white' : ''}`}
                onClick={() => handleFormatSelection('audible', book.audible)}
              >
                Audible (${parseFloat(book.audible).toFixed(2)})
              </button>
            )}
            {book.hardcover && (
              <button 
                className={`px-4 py-2 border rounded hover:bg-[#001040] hover:text-white ${selectedFormat?.type === 'hardcover' ? 'bg-[#001040] text-white' : ''}`}
                onClick={() => handleFormatSelection('hardcover', book.hardcover)}
              >
                Hardcover (${parseFloat(book.hardcover).toFixed(2)})
              </button>
            )}
            {book.audio_cd && (
              <button 
                className={`px-4 py-2 border rounded hover:bg-[#001040] hover:text-white ${selectedFormat?.type === 'audio_cd' ? 'bg-[#001040] text-white' : ''}`}
                onClick={() => handleFormatSelection('audio_cd', book.audio_cd)}
              >
                Audio CD (${parseFloat(book.audio_cd).toFixed(2)})
              </button>
            )}
          </div>


       <div className="text-4xl font-bold mb-4">
  ${parseFloat(
    selectedFormat?.price ??
    book.kindle ??
    book.hardcover ??
    book.audible ??
    book.audio_cd ??
    0
  ).toFixed(2)}
</div>


          <div className="flex flex-wrap items-center gap-2 mb-4">
            <button 
            
            className="bg-[#ffa200]  text-white px-5 py-2  font-semibold border border-gray-400">
              Buy Now
            </button>
            <button
            onClick={handleAddToCart}
            >
               <div class="shadow-box d-flex justify-content-center align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425z"/>
  </svg>
</div>
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
        {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
      <h2 className="text-xl font-bold mb-4">Added to Cart</h2>
      <p>{book.title} ({selectedFormat?.type}) has been added to your cart.</p>
      <div className="mt-6 flex justify-center gap-4">
        <button 
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bluebutton"
        >
          Close
        </button>
        <button 
          onClick={() => navigate("/checkout")}
          className="px-4 py-2 bluebutton"
        >
          Go to Cart
        </button>
      </div>
    </div>
  </div>
)}

      </div>
      <AdditionalDetail book={book} reviews={bookReviews}/>
    </div>
  );
}

export default BookPurchase;








// import  { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdditionalDetail from '../AdditionalDetail/AdditionalDetail';
// import cart from "../../assets/cart.png"
// import profile from "../../assets/person.png"
// import { useParams,useNavigate } from 'react-router-dom';
// function BookPurchase() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//   const [productCount, setProductCount] = useState(1);
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedFormat, setSelectedFormat] = useState(null);
//   const [showFull, setShowFull] = useState(false);
//   const [bookReviews,setBookReviews] = useState([])
//   const description = book?.book_description || "No description available.";
//   const words = description.trim().split(/\s+/);
//   const wordCount = words.length;
//   const shouldTruncate = wordCount > 500;
//   const preview = words.slice(0, 400).join(" ");
//   const remaining = words.slice(400).join(" ");


//   useEffect(() => {
//     setLoading(true);
//     axios.get(`http://localhost:3000/api/v1/admin/getBookById/${id}`)
//       .then((res) => {
//         if (res.data && res.data.book) {
//           const bookData = res.data.book;
//           setBook(bookData);    
//           if (bookData.images && bookData.images.length > 0) {
          
//             const imageArray = typeof bookData.images === 'string' 
//               ? JSON.parse(bookData.images) 
//               : bookData.images;
              
//             setSelectedImage(imageArray[0]);
//           }
//           if (bookData.kindle) setSelectedFormat({ type: 'kindle', price: bookData.kindle });
//           else if (bookData.hardcover) setSelectedFormat({ type: 'hardcover', price: bookData.hardcover });
//           else if (bookData.audible) setSelectedFormat({ type: 'audible', price: bookData.audible });
//           else if (bookData.audio_cd) setSelectedFormat({ type: 'audio_cd', price: bookData.audio_cd });
//         } else {
//           setError("Book not found");
//         }
//       })
//       .catch((err) => {
//         console.error('Failed to fetch book data:', err);
//         setError("Failed to load book data");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [id]); 

//   async function gettingBookReviews(){
//     const response = await axios.get(`http://localhost:3000/api/v1/admin/reviews/${id}`);
//     setBookReviews(response.data.reviews)
//   }

//   useEffect(() => {
//     gettingBookReviews()
//   },[])

//   const increaseCount = () => {
//     setProductCount(prev => prev + 1);
//   };

//   const decreaseCount = () => {
//     setProductCount(prev => (prev > 1 ? prev - 1 : 1));
//   };

//   const handleThumbnailClick = (imagePath) => {
//     setSelectedImage(imagePath);
//   };

//   const handleFormatSelection = (type, price) => {
//     setSelectedFormat({ type, price });
//   };

//   if (loading) {
//     return <div className="p-6 text-center">Loading book details...</div>;
//   }

//   if (error) {
//     return <div className="p-6 text-center text-red-500">{error}</div>;
//   }

//   if (!book) {
//     return <div className="p-6 text-center">No book data available</div>;
//   }

// const handleAddToCart = () => {
//   // Validate that a format is selected
//   if (!selectedFormat) {
//     alert('Please select a format before adding to cart.');
//     return;
//   }

//   const cartItem = {
//     bookId: id, // Use id from useParams
//     id: book._id, // Internal book ID from API (if needed for other purposes)
//     title: book.title,
//     image: selectedImage,
//     quantity: productCount,
//     format: selectedFormat.type,
//     price: selectedFormat.price,
//   };

//   // Retrieve existing cart from localStorage or initialize an empty array
//   const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Check if the same book with the same bookId and format exists
//   const existingItemIndex = existingCart.findIndex(
//     (item) => item.bookId === cartItem.bookId && item.format === cartItem.format
//   );

//   if (existingItemIndex >= 0) {
//     // Update quantity if the bookId and format match
//     existingCart[existingItemIndex].quantity += cartItem.quantity;
//   } else {
//     // Add new item if no match is found
//     existingCart.push(cartItem);
//   }
//   localStorage.setItem('cart', JSON.stringify(existingCart));
//   alert(`${cartItem.title} (${cartItem.format}) added to cart!`);
// };

// console.log(book)

//   const images = typeof book.images === 'string' 
//     ? JSON.parse(book.images) 
//     : book.images || [];
    
//   const normalizeImagePath = (path) => {
//     return path.replace(/\\/g, '/');
//   };

//   console.log(selectedImage)

  
//    return (
//   <div className="container my-5 bg-white text-dark">
//     <div className="d-flex justify-content-end gap-3 mb-3">
//       <button
//         onClick={() => navigate("/checkout")}
//         className="btn btn-outline-primary d-flex align-items-center"
//       >
//         <img src={cart} alt="cart" className="me-2" width="24" />
//         <span>Cart</span>
//       </button>
//       <button className="btn btn-outline-secondary d-flex align-items-center" onClick={()=>navigate("/register")}>
//         <img src={profile} alt="profile" className="me-2" width="24" />
//         <span>Profile</span>
//       </button>
//     </div>

//     <div className="row g-4">
//       <div className="col-md-4">
//         <div className="border rounded bg-light p-3 d-flex align-items-center justify-content-center">
//           <img
//             src={selectedImage ? `http://localhost:3000/${normalizeImagePath(selectedImage)}` : "https://via.placeholder.com/400x600"}
//             alt={`${book.title} Cover`}
//             className="img-fluid rounded"
//             style={{ maxHeight: '500px', objectFit: 'contain' }}
//           />
//         </div>

//         {images.length > 0 && (
//           <div className="mt-3 d-flex overflow-auto">
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:3000/${normalizeImagePath(img)}`}
//                 className={`rounded me-2 border ${
//                   selectedImage === img ? 'border-primary' : 'border-light'
//                 }`}
//                 alt={`Thumbnail ${index + 1}`}
//                 style={{ width: '60px', height: '60px', cursor: 'pointer', objectFit: 'cover' }}
//                 onClick={() => handleThumbnailClick(img)}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="col-md-8">
//         <h1 className="h3 mb-2 ">{book.title}</h1>
//         <p className="text-muted">by {book.author_detail || "Unknown Author"}</p>

//         <div className="d-flex align-items-center mb-3">
//           {[...Array(5)].map((_, i) => (
//             <i
//               key={i}
//               className={`bi bi-star-fill me-1 ${i < book.stars ? 'text-warning' : 'text-secondary'}`}
//             ></i>
//           ))}
//           <span className="ms-2">{book.stars} out of 5</span>
//         </div>

//         <div className="mb-3">
//           <strong>Format:</strong>
//           <div className="mt-2 d-flex flex-wrap gap-2">
//             {book.kindle && (
//               <button
//                 className={`btn btn-outline-dark ${selectedFormat?.type === 'kindle' ? 'active' : ''}`}
//                 onClick={() => handleFormatSelection('kindle', book.kindle)}
//               >
//                 Kindle (${parseFloat(book.kindle).toFixed(2)})
//               </button>
//             )}
//             {book.audible && (
//               <button
//                 className={`btn btn-outline-dark ${selectedFormat?.type === 'audible' ? 'active' : ''}`}
//                 onClick={() => handleFormatSelection('audible', book.audible)}
//               >
//                 Audible (${parseFloat(book.audible).toFixed(2)})
//               </button>
//             )}
//             {book.hardcover && (
//               <button
//                 className={`btn btn-outline-dark ${selectedFormat?.type === 'hardcover' ? 'active' : ''}`}
//                 onClick={() => handleFormatSelection('hardcover', book.hardcover)}
//               >
//                 Hardcover (${parseFloat(book.hardcover).toFixed(2)})
//               </button>
//             )}
//             {book.audio_cd && (
//               <button
//                 className={`btn btn-outline-dark ${selectedFormat?.type === 'audio_cd' ? 'active' : ''}`}
//                 onClick={() => handleFormatSelection('audio_cd', book.audio_cd)}
//               >
//                 Audio CD (${parseFloat(book.audio_cd).toFixed(2)})
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Quantity controls */}
//         <div className="d-flex align-items-center mb-4">
//           <button className="btn btn-outline-secondary me-2" onClick={decreaseCount}>-</button>
//           <span>{productCount}</span>
//           <button className="btn btn-outline-secondary ms-2" onClick={increaseCount}>+</button>
//         </div>

//         <button className="btn btn-primary" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>

//     {/* Book Description */}
//     <div className="mt-5">
//       <h5>Description:</h5>
//       <p>
//         {shouldTruncate && !showFull ? (
//           <>
//             {preview}...
//             <button
//               className="btn btn-link p-0 ms-2"
//               onClick={() => setShowFull(true)}
//             >
//               Read more
//             </button>
//           </>
//         ) : (
//           <>
//             {preview} {remaining}
//             {shouldTruncate && (
//               <button
//                 className="btn btn-link p-0 ms-2"
//                 onClick={() => setShowFull(false)}
//               >
//                 Show less
//               </button>
//             )}
//           </>
//         )}
//       </p>
//     </div>

//     {/* AdditionalDetail and Reviews */}
//     <div className="mt-4">
//       <AdditionalDetail book={book} reviews={bookReviews} />
//     </div>
//   </div>
// );           
      
// }

// export default BookPurchase;