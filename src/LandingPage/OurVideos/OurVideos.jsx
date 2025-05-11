import { VIDEOS } from "../../utils/Links";

export default function OurVideos() {
  return (
    <section className="py-10 px-4 flex flex-col items-center space-y-10">
      <h1 className="text-3xl md:text-4xl lg:text-[48px] text-[#001040] text-center">
        Our Videos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl justify-items-center">
        {VIDEOS.map((video) => (
          <div
            key={video.id}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <iframe
              src={video.video}
              className=" w-[382px] max-w-[382px] h-[215px] sm:h-[251px] rounded-lg shadow-lg"
              allowFullScreen
            />
            <p className="text-[#001040] font-medium text-base sm:text-lg">{video.description}</p>
          </div>
        ))}
      </div>

      <p className="underline text-[#001040] font-medium cursor-pointer">View All</p>
    </section>
  );
}
