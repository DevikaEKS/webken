import { useState } from "react";

export default function AdditionalDetail({ editorial_review, about_author }) {
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
          <p className="text-gray-500 italic">Reviews will go here.</p>
        )}
      </div>
    </div>
  );
}
