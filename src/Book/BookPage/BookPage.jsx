import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function BookPage() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/admin/getBooks");
        if (res.status !== 200) throw new Error("Failed to fetch books");
        const data = await res.data;
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    console.log(books)

    fetchBooks();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading books...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <section className="py-20 w-full px-4">
      <div className="flex flex-wrap gap-20 mx-1 md:mx-10">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col rounded-lg w-full sm:w-[250px] md:w-[220px] lg:w-[230px]  overflow-hidden"
          >
            <div
              className="flex h-[300px] w-full border-1 border-[#BAB8B8] bg-[#F5F5F5]   rounded-lg cursor-pointer"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              <img
                src={`http://localhost:3000/${book.images?.[0]?.replace(/\\/g, "/")}`}
                alt={book.title}
                className="object-contain max-h-full w-full shadow-md p-10"
              />
            </div>

            <div className="flex flex-col flex-1 justify-between px-4 py-3 w-full">
              <p className="font-semibold text-lg text-black min-h-[56px] leading-snug line-clamp-3">
                {book.title}
              </p>

              <p className="text-lg text-[#FFA200] line-clamp-1">
                ${book.kindle}
              </p>

              <div className="flex mt-2 text-[#F2C40B] text-lg gap-1">
                {"★".repeat(book.stars)}
              </div>
              

              <div className="mt-3">
                <button
                  onClick={() => navigate(`/book/${book.id}`)}
                  className="text-black underline text-lg font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
