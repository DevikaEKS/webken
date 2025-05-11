export default function Course() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-10 font-helvetica font-bold gap-10">
      
      
      <div className="flex flex-col items-center space-y-4 md:w-1/2 w-full">
        <img src="./Course-lap.png" alt="Course Laptop" className="w-full  object-contain" />
        <button className="bg-[#FFA200] font-bold rounded-full w-full max-w-xs h-[59px] text-white">
          Purchase My Spine Coach
        </button>
      </div>

      
      <div className="flex flex-col space-y-5 md:w-1/2 w-full text-center md:text-left">
        <h1 className="font-bold text-[32px] md:text-[48px] text-[#001040]">Buy The Course.</h1>
        <h3 className="text-[#E00000] text-[28px] md:text-[40px] font-bold">My Spine Coach.</h3>
        <p className="font-medium text-[#000000] text-[16px] md:text-[18px] leading-7 md:leading-8">
          "Transform your spinal health with Dr. Ken Hansraj’s 'My Spine Coach' course! Backed by over 20 years of
          expertise in spine care, this program offers proven strategies to improve your physical, mental, and emotional
          well-being through the power of spine wellness. Join now to access cutting-edge insights and personalized
          guidance from the globally renowned spinal surgeon who has influenced lives worldwide."
        </p>
      </div>
      
    </section>
  );
}
