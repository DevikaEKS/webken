import Form from "../Form/Form"

export default function Blog() {
    return (
        <section className="py-10  sm:px-8 md:px-16  flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-y-0">
            <div className="flex flex-col justify-center items-center sm:items-start space-y-10 mx-5 shadow-lg p-3">
                <h1 className="font-semibold text-[24px] sm:text-[32px] text-[#001040] text-center sm:text-left">Spine Care Cost</h1>
                <img src="./blog-image.png" className="w-full max-w-[802px] h-auto" alt="Blog Image" />
                <p className="text-black font-medium max-w-[802px] text-[16px] sm:text-[18px] leading-8 text-center sm:text-left">
                   In 2017, the American GDP was estimated at approximately $19.4 trillion. With spine care costing $135 billion per year in the USA, that means approximately one in every $144 GDP dollars is spent on spine care. The 2017 world GDP was estimated at $79.6 trillion. Extrapolating the same (1/144) ratio, global spine care costs would be $553 billion (0.7% of GDP). However, if the world spends at a rate of one-half the American rate (1/288), then the costs are approximately $276 billion (0.35% of GDP).
                </p>
            </div>
            <Form />
        </section>
    )
}
