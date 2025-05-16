export default function BuyingBook() {
  return (
    <section className="py-8 md:py-12 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
       
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <img 
            src="./spine-book.png"
            alt="Book cover of Secrets of the Cervical Spine by Dr. Kenneth Hansraj, promoting spinal health."
            title="Secrets of the Cervical Spine by Dr. Kenneth Hansraj reveals keys to spinal wellness and a vibrant life, focusing on cervical spine care for improved health and vitality."
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[471px] h-auto"
          />
          <button >
            Buy Now
          </button>
        </div>
        <div className="flex flex-col max-w-3xl">
          <h1 className="font-bold mb-4 md:mb-6 lg:mb-10 text-2xl md:text-3xl lg:text-5xl text-[#001040]">
            Buy the Book<span className="text-[#F99420]">.</span>
          </h1>

          <div className="flex flex-col font-bold text-xl md:text-2xl lg:text-4xl text-[#E00000] leading-tight mb-6 lg:mb-10">
            <p>Keys to An Amazing Life: Secrets of</p>
            <p>The Cervical Spine</p>
          </div>

          <div className="flex flex-col font-medium space-y-4 md:space-y-6 lg:space-y-10 text-sm md:text-base lg:text-lg text-black leading-relaxed tracking-wide">
            <p>
             In 2017, American GDP was estimated at 19.4 trillion dollars. With spine care costing Americans 135 billion dollars per year in the USA, that means one in $144 GDP (0.7%) dollars is spent on spine care. Today, with this important book, internationally-renowned American spinal expert <strong>Dr. Kenneth Hansraj</strong>  unlocks the secrets of your spine, and how learning to treat it with respect.
            </p>
            <p>
             This book will vastly improve your physical, emotional and even mental life. It’s packed with brilliant illustrations, photographs and techniques for achieving optimal spinal and overall vibrant health! The most painful problem in America isn’t the economy, trade, crime or foreign wars. It’s our BACKS! Hansraj unlocks the influence of common everyday options that are good for spinal health and general health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}