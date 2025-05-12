import { EXPERTS } from "../../utils/Links";

export default function Expert() {
  return (
    <section className="py-10 px-4 font-helvetica font-bold space-y-10">
      <h1 className="text-3xl md:text-4xl lg:text-[48px] text-[#001040] text-center">
        Trusted Expert <span className="text-[#F99420]">.</span>
      </h1>

      <div className="flex justify-center align-center flex-col md:flex-row gap-6">
        {EXPERTS.map((expert) => (
          <div
            key={expert.id}
            className="rounded-full border bg-[#FAFAFA] border-[#EBEAEA] w-[150px] h-[90px] sm:w-[160px] sm:h-[100px] md:w-[183px] md:h-[109px] flex items-center justify-center"
          >
            <img
              src={expert.img}
              alt={`Expert ${expert.id}`}
              className="max-h-[60px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
