import Form from "../Form/Form"

export default function Blog() {
    return (
        <section className="py-10 px-4 sm:px-8 md:px-16  flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-y-0">
            <div className="flex flex-col justify-center items-center sm:items-start space-y-10">
                <h1 className="font-semibold text-[24px] sm:text-[32px] text-[#001040] text-center sm:text-left">Spine Care Cost</h1>
                <img src="./blog-image.png" className="w-full max-w-[802px] h-auto" alt="Blog Image" />
                <p className="text-black font-medium max-w-[802px] text-[16px] sm:text-[18px] leading-8 text-center sm:text-left">
                    In 2017, American GDP were estimated at approximately 19.4 trillion dollars. With spine care costing 135 billion dollars per year in the USA, that means approximately one in $144 GDP dollars is spent on spine care. 2017 World GDP is estimated at $79.6 trillion dollars. Extrapolating the same (1/144) ratio, the world spine costs are $553 billion dollars (0.7% GDP). However, if the world spends at a rate of one half of the American Rate (1/288), then the costs are approximately $276 billion (0.35% GDP).
                </p>
            </div>
            <Form />
        </section>
    )
}
