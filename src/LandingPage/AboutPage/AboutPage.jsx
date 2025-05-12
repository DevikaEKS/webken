import { useNavigate } from "react-router-dom";

function Aboutpage() {
const navigate=useNavigate();
  const aboutpagepart = () => {
    navigate("/about");
  };
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-20"> 
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-start">
        
       
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[54px] font-bold text-[#001040] mb-6">
            About Me<span className="text-[#F99420]">.</span>
          </h2>
          <p className="text-black font-medium leading-relaxed">
            For more than 20 years, Dr. Ken Hansraj has dedicated his life to eradicating spinal problems. With an in-depth knowledge of and a vast experience in spine care, he has discovered and simplified the core factors and strategies that can be applied to improve the quality of spinal health. His work helps people to understand spine wellness, spinal conditions, and to augment people’s physical, mental and emotional well-being through the spine.
          </p>
          <p className="text-black font-medium leading-relaxed mt-10">
            Dr. Ken’s work has influenced people in every country to feel better and to do more. His studies on spine care costs, text neck and backpack forces have influenced global positions, and global trends.
          </p>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center items-start md:mt-10">
          <div className="relative bg-[#001040] text-white rounded-xl p-6 sm:p-8 w-full max-w-sm shadow-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#fda101] mb-4">
              Dr. Hansraj
            </h1>

            <ul className="list-disc list-inside text-white text-sm sm:text-base space-y-2">
              <li>International Best selling author.</li>
              <li>Global health consultant.</li>
              <li>US Spine Surgeon</li>
            </ul>

            <div className="mt-6">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                <img src="./arrow.png" alt="Arrow" className="w-4 h-4"  onClick={aboutpagepart}/>
              </button>
            </div>

        
            <div className="absolute -bottom-10 -right-3 md:-bottom-20 md:-right-4">
              <div className="w-[150px] h-[150px] md:w-[206px] md:h-[206px] rounded-full bg-gradient-to-tr from-orange-400 to-yellow-300 shadow-lg flex items-center justify-center border-4 border-white">
                <img src="./spine.png" alt="Spine" className="w-[80px] h-[140px] md:w-[106px] md:h-[182px] object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Aboutpage;
