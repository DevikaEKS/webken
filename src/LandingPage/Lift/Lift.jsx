export default function Lift() {
  return (
    <section className="py-10 px-4 flex flex-col  md:flex-row items-center justify-center w-full space-y-10 md:space-y-0 md:space-x-20">
      <img
        src="./Lift-book.png"
        alt="Book cover of LIFT by Dr. Ken Hansraj, featuring meditations to enhance back health and spine wellness."
        title="LIFT by Dr. Ken Hansraj offers guided meditations and techniques to support spinal strength, boost back health, and promote holistic healing from a renowned spine expert"
        className="w-[250px] md:w-[333px] h-auto rounded-lg object-contain"
      />

      <div className="font-helvetica font-bold flex flex-col  items-center sm:items-center md:items-center text-center md:text-left">
        <h1 className="text-[#001040] text-3xl md:text-[48px] ">LIFT</h1>
        <p className="text-[#FF3A2D] text-xl md:text-[40px]">Meditations to Boost</p>
        <p className="text-[#FF3A2D] text-xl md:text-[40px] mb-4">Back Health</p>
        <button className="bg-[#FFA200] font-bold rounded-full w-full max-w-[157px] h-[50px] md:h-[59px] text-white">
          Buy Now
        </button>
      </div>
    </section>
  );
}
