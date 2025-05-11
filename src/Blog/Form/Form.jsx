export default function Form() {
  return (
    <div className="w-full max-w-[442px] mx-auto p-6 bg-white rounded-2xl  shadow-lg">
      <h2 className="text-center text-[20px] font-bold text-[#001040] mb-6">Leave a Reply</h2>

      <form className="space-y-5 font-medium">
        <div>
          <label className="block text-sm text-[15px] text-[#001040] mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#001040] shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm text-[15px] text-[#001040] mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#001040] shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm text-[15px] text-[#001040] mb-1">Website</label>
          <input
            type="url"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#001040] shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm text-[15px] text-[#001040] mb-1">Message</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#001040] shadow-sm resize-none"
          />
        </div>

        <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-[166px] h-[42px] bg-[#001040] text-white hover:bg-[#112260] transition-colors py-2 rounded-md font-semibold shadow-md"
            >
              <span className="text-[#FFA200]">Post a Comment</span>
            </button>
        </div>

      </form>
    </div>
  );
}
