// import { BOOKS } from "../../utils/Links";

// export default function BookPage(){
//     return(
//         <section className="py-20  w-full">
//             <div className="flex flex-wrap justify-center gap-6">
//                 {BOOKS.map((book) => (
//                     <div className="flex flex-col justify-center w-[313px] h-[381px]">
//                         <div>
//                             <img src={book.image} className="w-full object-contain" />
//                         </div>
//                         <p>{book.title}</p>
//                         <p>{book.price}</p>
//                         <p>{book.stars}</p>
//                         <a>View All</a>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }


import { BOOKS } from "../../utils/Links";

export default function BookPage() {
    return (
        <section className="py-20 w-full">
            <div className="flex flex-wrap justify-center gap-6">
                {BOOKS.map((book, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center w-full sm:w-[313px] h-[381px]  p-4"
                    >
                        <img src={book.image} alt={book.title} className="w-full h-68 object-contain" />
                        <p className="mt-2 font-semibold text-center">{book.title}</p>
                        <p className="text-gray-700">{book.price}</p>
                        <p className="text-yellow-500">{book.stars}</p>
                        <a href="#" className="text-blue-600 underline mt-2">View All</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
