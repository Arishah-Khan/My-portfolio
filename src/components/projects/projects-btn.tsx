"use client"

import { useRouter } from "next/navigation";

interface ButtonProps {
    label: string;
    link: string;
}

export default function ProjectBtn({ label, link }: ButtonProps) {
    const router = useRouter();

    const handleNevigations = () => {
        router.push(link);
    };

    return (
        <section>
            <button
                onClick={handleNevigations}
                className="relative flex items-center px-4 md:px-6 py-1 md:py-3 bg-[#071fa8] text-white font-semibold rounded-lg overflow-hidden group transition-all duration-300"
            >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">{label}</span>
                <span className="relative z-10 ml-2 font-bold transform transition-transform duration-300 translate-x-0 group-hover:translate-x-2 group-hover:text-black">
                    →
                </span>
                <span className="absolute inset-0 w-0 h-full  bg-[#fafafa] border-2 border-[#071fa8] transition-all duration-300 rounded-lg group-hover:w-full"></span>
                <style jsx>{`
                    button {
                        position: relative;
                        overflow: hidden;
                        z-index: 1;
                    }
                    button span:first-of-type {
                        position: relative;
                        z-index: 10;
                    }
                    button span:last-of-type {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        top: 0;
                        transition: width 0.3s ease;
                        z-index: 0;
                    }
                    button:hover span:last-of-type {
                        width: 100%;
                    }
                `}</style>
            </button>
        </section>
    );
}
