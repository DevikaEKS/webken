import { useState } from "react";

export default function AdditionalDetail({ editorial_review, about_author,bookReviews,bookname }) {

  console.log(bookReviews)
  const [activeTab, setActiveTab] = useState("editorial");

  const tabs = [
    { id: "editorial", label: "Editorial Review" },
    { id: "author", label: "About Author" },
    { id: "product", label: "Product Detail" },
    { id: "review", label: "Review" },
  ];

  return (
    <div className="py-10">
      
      <div className="flex justify-center space-x-4 border-b pb-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-1 px-3 border-b-2 ${
              activeTab === tab.id
                ? "border-[#FFA200] text-[#FFA200] font-semibold"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6 text-black text-medium font-light">
        {activeTab === "editorial" && (
          <>
            <p className="flex flex-col">
              <span className="font-bold">Review:</span>
              <span>{editorial_review}</span>
            </p>
            <p className="flex flex-col">
              <span className="font-bold">About Author:</span>
              <span>{about_author}</span>
            </p>
          </>
        )}

        {activeTab === "author" && (
          <p className="flex flex-col">
            <span className="font-bold">About Author:</span>
            <span>{about_author}</span>
          </p>
        )}

        {activeTab === "product" && (
          <p className="text-gray-500 italic">Product Details will go here.</p>
        )}

        {activeTab === "review" && (
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="font-medium text-xl mb-5">Top reviews from the United States</h1>

        {bookReviews.length === 0 ? (
          <p className="text-gray-600">No reviews available.</p>
        ) : (
          bookReviews
            
            .map((review) => (
              <div
                key={review.id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm space-y-2"
              >
                <div className="flex flex-col  space-x-2">
                  <div className="flex flex-row items-center space-x-2">
                    <div className="w-10 h-9 bg-blue-950 rounded-full text-white text-center font-bold text-lg">{review.name.split("")[0]}</div>
                    <p className="font-semibold mt-2">{review.name}</p>
                  </div>
                  
                  <span>
                    {"⭐".repeat(review.stars)} Practical Advice
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Review in the {review.country} on{" "}
                  {new Date(review.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-green-700 font-bold text-lg">Verified Purchase</p>
                <p>Book Review: {bookname} by Kenneth K. Hansraj, MD</p>
                <p className="text-gray-800">{review.content}</p>
                <p className="text-xs text-gray-400">
                  Reviewed on {new Date(review.created_at).toLocaleDateString()}
                </p>
              </div>
            ))
        )}
      </div>
)}

      </div>
    </div>
  );
}
