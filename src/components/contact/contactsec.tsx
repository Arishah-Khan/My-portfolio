import Link from "next/link";
import ProjectBtn from "../projects/projects-btn";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub , FaInstagram } from "react-icons/fa";


export default function ContactSec() {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto text-center">
            <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold pb-3 text-center pt-2 sm:pt-4`}>
          Contact Me
        </h2>
                <p className="text-gray-500 mb-8 px-4">
                    {`Have any questions or want to collaborate? I'm just a message away!`}
                </p>

                
        
                <p className="text-gray-600 mb-4">
                    📧 Email: <Link href="mailto:arishahsanaullah78@gmail.com" className="text-blue-500">arishahsanaullah78@gmail.com</Link>
                </p>
                
                <div className="flex justify-center w-1/2 mx-auto py-4 space-x-6">
                    {/* LinkedIn Icon */}
                    <div className="relative flex items-center justify-center w-8 h-7 sm:w-8 sm:h-8 text-white rounded-full bg-[#0077B5] transition-colors duration-300 group hover:bg-[#005582]">
                        <Link href="https://www.linkedin.com/in/arishah-khan-b606092b8/" aria-label="LinkedIn" className="flex items-center justify-center">
                            <FaLinkedinIn size={20} />
                        </Link>
                    </div>

                    {/* GitHub Icon */}
                    <div className="relative flex items-center justify-center w-8 h-7 sm:w-8 sm:h-8 bg-black text-white rounded-full hover:bg-[#181717] transition-colors duration-300 group">
                        <Link href="https://github.com/Arishah-Khan" aria-label="GitHub" className="flex items-center justify-center">
                            <FaGithub size={20} />
                        </Link>
                    </div>

                    {/* Instagram Icon */}
                    <div className="relative flex items-center justify-center w-8 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full hover:opacity-80 transition-opacity duration-300 group">
                        <Link href="https://www.instagram.com/arishah__khan/" aria-label="Instagram" className="flex items-center justify-center">
                            <FaInstagram size={20} />
                        </Link>
                    </div>
                    <div className="relative flex items-center justify-center w-8 h-7 sm:w-8 sm:h-8 bg-gradient-to-r  bg-[#1877F2] text-white hover:bg-[#515cc0] rounded-full hover:opacity-80 transition-opacity duration-300 group">
                        <Link href="https://www.facebook.com/profile.php?id=61568085214973" aria-label="facebook" className="flex items-center justify-center">
                            <FaFacebookF size={20} />
                        </Link>
                    </div>
                </div>
        
                <p className="text-gray-500 mb-8 px-4">
                   {` I'm always open to new opportunities. Let's create something amazing together!`}
                </p>
                
        
                <div className="flex justify-center">
                    <ProjectBtn
                        link="/contact"
                        label="Contact Me"
                    
                    />
                </div>
            </div>
        </section>
    );
}
