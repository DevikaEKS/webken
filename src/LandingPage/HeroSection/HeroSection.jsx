import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const Bookspage = () => {
    navigate("/book");
  };
  const Coursepage = () => {
    navigate("/My-spine-coach");
  };
  
  return (
    <section className="p-4 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 overflow-hidden">
     
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="./doctor.png" alt="Doctor" className="w-full max-w-md h-auto object-contain" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col mt-10 items-center md:items-start text-center md:text-left">
        <div className="font-helvetica leading-tight">
          <p className="text-[#001040] font-bold text-2xl sm:text-3xl md:text-4xl">International Best Selling Author.</p>
          <p className="text-[#001040] font-bold text-2xl sm:text-3xl md:text-4xl">Global Health Consultant.</p>
          <p className="text-[#001040] font-bold text-2xl sm:text-3xl md:text-4xl">US Spine Surgeon.</p>

          <p className="font-bold text-[#E00000] text-xl sm:text-2xl md:text-3xl mt-6">Watch Your Back</p>
          <p className="text-[#FDA101] text-lg sm:text-xl md:text-2xl mt-3 font-medium">Nine Proven Strategies to Reduce</p>
          <p className="text-[#FDA101] text-lg sm:text-xl md:text-2xl font-medium">Your Neck and Back Pain Without Surgery</p>
          
          <h1 className="text-[#001040] mt-6 text-xl sm:text-2xl md:text-3xl font-bold">Buy Dr. Hansraj's</h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-[#EE4A62] w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 rounded-lg"  onClick={Bookspage}>
            <img src="./book (1).png" alt="Book Icon" className="w-6 h-6" />
            <span className="text-white font-bold text-base sm:text-lg">Best Selling Books</span>
          </button>
          <button className="bg-[#FDA101] w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 rounded-lg" onClick={Coursepage}>
            <img src="./play.png" alt="Play Icon" className="w-6 h-6" />
            <span className="text-white font-bold text-base sm:text-lg">My Spine Coach</span>
          </button>
        </div>
      </div>
    </section>
  );
}
