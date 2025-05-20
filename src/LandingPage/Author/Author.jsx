export default function Author() {
  return (
    <section className=" flex flex-col justify-center items-center py-10 space-y-15 px-4">
      
        <h1 className="headingarea text-center">
        Published Author <span className="text-[#F99420]">.</span>
      </h1>
      
      <img 
        src="./Authors.png" 
        alt="Published Author" 
        className="w-full max-w-6xl h-auto object-contain"
      />
      
      
    </section>
  );
}
