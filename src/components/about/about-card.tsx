
interface card {
    degree: string;
    institute: string;
    year: string
}

export default function Card({ degree, institute, year }: card) {
    return (
        <div className={`bg-[#ebeae9] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out px-3`}>
            <h2 className="text-black text-base  md:text-lg font-semibold text-center pt-2">
                {degree}
            </h2>
            <h4 className={`text-[#071fa8] text-sm md:text-base font-semibold py-4 `}>{year}</h4>
            <h6 className="text-gray-600 font-medium text-xs md:text-sm pb-2">{institute}</h6>

        </div>
    )
}