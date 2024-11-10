"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaGithub, FaFacebookF, FaBars, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { BsProjectorFill } from "react-icons/bs";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";



export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className={` w-full flex justify-between items-center bg-[#ebeae9] pr-3 py-1 md:px-6 shadow-md hover:shadow-lg transition-shadow duration-300 `}>

            <div>
                <Image src="/images/logo1.png" alt="logo" width="70" height="70" />
            </div>

            <nav className="hidden md:flex">
                <ul className="flex space-x-6">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <Link
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className={`relative text-black transition-colors duration-300 px-4 py-2 rounded-md hover:bg-[#e0e0e0] hover:text-[#01004c] hover:shadow-lg 
    ${(pathname === "/" && item === "Home") || pathname === `/${item.toLowerCase()}` ? "border-b-2 border-[#071fa8] text-[#071fa8] font-semibold rounded-none" : ""}`}
                            >
                                {item}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#01004c] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                            </Link>


                        </li>
                    ))}
                </ul>
            </nav>

            <div className="relative md:hidden">
                <Sheet>

                    <SheetTrigger asChild>
                        <button className="text-[#071fa8]">
                            <FaBars size={24} />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-[#ebeae9] p-6 shadow-lg">
                        <SheetHeader>

                            <SheetTitle className="text-lg font-semibold text-[#01004c]"> <div className="flex justify-center items-center pt-6 pb-2">
                                <Image src="/images/logo1.png" alt="logo" width="80" height="80" />
                            </div></SheetTitle>
                            <SheetDescription className="text-[#071fa8]">
                                <h2 className={`text-lg font-bold text-center`}>
                                    Arishah
                                </h2>
                                <p className={`text-sm text-gray-500 text-center`}>
                                    Full Stack Developer
                                </p>
                            </SheetDescription>
                        </SheetHeader>
                        <ul className="flex flex-col justify-center items-center space-y-4 py-4">
                            {[
                                { name: "Home", icon: <FaHome /> },
                                { name: "About", icon: <FaInfoCircle /> },
                                { name: "Projects", icon: <BsProjectorFill /> },
                                { name: "Contact", icon: <FaEnvelope /> }
                            ].map((item) => (
                                <li key={item.name} className="flex items-center space-x-1 px-4">
                                    <span className="text-lg text-[#01004c]">{item.icon}</span>
                                    <Link
                                        href={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
                                        className="relative text-black transition-colors duration-300 px-4 py-2 rounded-md hover:bg-[#e0e0e0] hover:text-[#01004c] hover:shadow-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center w-1/2 mx-auto py-4 space-x-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#0077B5] transition-colors duration-300 group">
                                <Link href="https://www.linkedin.com/in/arishah-khan-b606092b8/" aria-label="LinkedIn" className="flex items-center justify-center">
                                    <FaLinkedinIn size={20} />
                                </Link>
                            </div>

                            <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#181717] transition-colors duration-300 group">
                                <Link href="https://github.com/Arishah-Khan" aria-label="GitHub" className="flex items-center justify-center">
                                    <FaGithub size={20} />
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="hidden md:flex space-x-4">
                <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#0077B5] transition-colors duration-300 group">
                    <Link href="https://www.linkedin.com/in/arishah-khan-b606092b8/" aria-label="LinkedIn" className="flex items-center justify-center">
                        <FaLinkedinIn size={20} />
                    </Link>
                </div>

                <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#181717] transition-colors duration-300 group">
                    <Link href="https://github.com/Arishah-Khan" aria-label="GitHub" className="flex items-center justify-center">
                        <FaGithub size={20} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
