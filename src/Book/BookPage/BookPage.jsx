import { BOOKS } from "../../utils/Links";
import { useNavigate} from "react-router-dom";



export default function BookPage() {
    const navigate = useNavigate();

    return (
        <section className="py-20 w-full">
            <div className="flex flex-wrap justify-center gap-6">
                {BOOKS.map((book, index) => (
                    <div
                        key={index}
                        className="flex flex-col  overflow-hidden bg-white"
                    >

                        <div className="flex justify-center items-center h-[450px] w-full sm:w-[350px] border border-[#BAB8B8] rounded-lg bg-[#F5F5F5] px-4 py-6">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="object-contain max-h-full"
                            />
                        </div>


                        <div className="px-4 py-3 flex flex-col items-center">
                            <p className="font-semibold text-lg text-black text-center">{book.title}</p>
                            <p className="text-[#FFA200] font-bold text-xl mt-2">{book.price}</p>
                            <div className="flex justify-center mt-2 text-[#F2C40B] text-lg gap-5">
                                {'★'.repeat(book.stars)}
                            </div>
                            <div className="text-center mt-2">
                                <button
                                    onClick={() => navigate(`/book/${book.title}`)}
                                    className="text-black underline text-lg font-medium "
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
