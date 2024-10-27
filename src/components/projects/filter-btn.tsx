import { category } from "../categry";
interface filter{
    label : category;
    isSelected : boolean;
    onClick : () => void;

}

export default function FilterBtn({ label, isSelected, onClick }: filter){
    return(
        <button
            onClick={onClick}
            className={`px-4 py-2 my-2 rounded ${isSelected ? "bg-[#071fa8] text-white" : "bg-gray-200"}`}
        >
            {label}
        </button>
    )
}