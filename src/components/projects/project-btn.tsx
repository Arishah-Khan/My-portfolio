"use client";

import { useRouter } from 'next/navigation';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface ButtonProps {
  label: string; 
  link: string;
  bgColor: string; 
  textColor: string; 
  hoverBgColor: string; 
  hoverTextColor: string; 
}

const ProjectButton = ({
  label,
  link,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
}: ButtonProps) => {
  const router = useRouter(); 

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button
      onClick={handleClick}
      className={`${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} border border-black px-3 py-2 rounded-lg transition duration-300 ${roboto.className} text-sm`}
    >
      {label}
    </button>
  );
};

export default ProjectButton;
