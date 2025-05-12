export default function LatestBook() {
  return (
    <section className="py-10 px-4 flex flex-col-reverse lg:flex-row items-center lg:space-x-12 ">
      
      
      <div className="flex flex-col md:ml-10 max-w-3xl">
        <h1 className="font-bold text-3xl mb-10 md:text-4xl lg:text-[48px] text-[#001040]">
          The Latest Book<span className="text-[#F99420]">.</span>
        </h1>

        <div className="flex flex-col font-bold text-xl md:text-3xl lg:text-[40px] text-[#E00000] leading-10 mb-10 space-y-1">
          <p>Watch Your Back: Proven</p>
          <p>Strategies to Reduce Your Neck and</p>
          <p>Nine Back Pain Without Surgery</p>
        </div>

        <div className="mt-5 flex font-medium flex-col space-y-6 text-[16px] md:text-[18px] text-[#000000] leading-7 tracking-wide">
          <p>
            A self-care guide for better back health—and overall well-being—with nine essential strategies to support your neck and spine.
          </p>
          <p>
            Back problems are the leading cause of disability worldwide—and many of us will endure severe or chronic back pain at some time in our lives. But what can we do? Are surgery and painkillers the only answers? “Not at all,” says spine and neck expert Dr. Ken Hansraj. “There are dozens of exercises, habits, and techniques you can practice—anytime, anyplace—that will significantly improve, if not completely heal, your back pain.” Now, this leading researcher presents a comprehensive guide to help you overcome physical, mental, and emotional factors that contribute to back problems.
          </p>
          <p>
            In <strong>Watch Your Back</strong>, Dr. Hansraj offers a straightforward program for taking the health of your spine and neck into your own hands. Here he offers nine adoptable strategies that provide simple, specific directions on what to do to strengthen your back and make your spine supple. With guidance on nutrition, posture fixes, mindfulness practices for positivity, stretches, and more, Dr. Hansraj’s program has provided healing and pain relief for hundreds of patients.
          </p>
        </div>
      </div>

     
      <div className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[504px] mb-8 lg:mb-0 p-1">
        <img
          src="./book-watch-your-back.png"
          alt="Watch Your Back Book Cover"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
