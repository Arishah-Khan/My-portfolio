

import NextjsCard from "./nextjs-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
     {
    name: "FoodTuck Website",
    images: [
      "/images/food1.png",
      "/images/food2.png",
      "/images/food3.png",
    ],
    demoLink: "https://nextjs-hackathon-mu.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/nextjs-hackathon",
    bgColor: "bg-[#e6891a]", // Button ka background color
    hoverBgColor: "hover:bg-[#F4D0A3]", // Button hover color
    textColor: "text-white", // Button text color
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#e6891a]",
    headingColour: "text-[#bf6d0f] border-[#e6891a]",
    cardbg: "bg-[#F4D0A3]",
  },
   {
    name: "Techtrans Blog Website",
    images: [
      "/images/bog1.png",
      "/images/blog2.png",
      "/images/blog3.png",
    ],
    demoLink: "https://techtrans-blog.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/blogwebsite",
    bgColor: "bg-[#94d533]", 
    hoverBgColor: "hover:bg-[#d4eead]",
    textColor: "text-white", 
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#679523]",
    headingColour: "text-[#679523] border-[#679523]",
    cardbg: "bg-[#d4eead]",
  },
   {
    name: "Ecommerce Website",
    images: [
      "/images/ecommerce1.png",
      "/images/ecommerce2.png",
      "/images/ecommerce3.png",
    ],
    demoLink: "https://practice-hackathon-5hrw.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/practice-hackathon",
    bgColor: "bg-[#B80000]", 
    hoverBgColor: "hover:bg-[#ffadad]",
    textColor: "text-white",
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#B80000]",
    headingColour: "text-[#B80000] border-[#B80000]",
    cardbg: "bg-[#ffadad]",
  },
  {
    name: "Ice Cream Website",
    images: ["/images/ice1.png", "/images/ice2.png", "/images/ice3.png"],
    demoLink: "https://nextjs-single-page-website.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/Nextjs-Single-Page-website",
    bgColor: "bg-[#d6206b]",
    hoverBgColor: "hover:bg-[#f5d0e0] hover:border-2 hover:border-[#d6206b] ", 
    textColor: "text-white", 
    hoverTextColor: "hover:text-black",
    headingColour: "text-[#d6206b] border-[#d6206b]",
    cardbg: "bg-[#fdc8df]",
  },
  {
    name: "Grocery Website",
    images: [
      "/images/grocery1.png",
      "/images/grocery2.png",
      "/images/grocery3.png",
    ],
    demoLink: "https://multipage-website-nextjs.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/multipage-website-nextjs",
    bgColor: "bg-[#1e5e3f]", 
    hoverBgColor: "hover:bg-[#dddad0]", 
    textColor: "text-white", 
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#1e5e3f]",
    headingColour: "text-[#1e5e3f] border-[#1e5e3f]",
    cardbg: "bg-[#c5ead8]",
  },
 
  {
    name: "Agency Website",
    images: [
      "/images/agency1.png",
      "/images/agency2.png",
      "/images/agency3.png",
    ],
    demoLink: "https://nextjs-css-kohl.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/nextjs-css",
    bgColor: "bg-[#5b1a91]", 
    hoverBgColor: "hover:bg-[#dcc1f8]", 
    textColor: "text-white", 
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#7a54d6]",
    headingColour: "text-[#5b1a91] border-[#5b1a91]",
    cardbg: "bg-[#dcc1f8]",
  },
];

export default function NextJsProjects() {
  return (
    <main className=" py-10">
      <section>
        <h3
          className={`text-base sm:text-lg md:text-xl font-bold mb-1 mt-2 py-2 px-5`}
        >
          NextJs Projects
        </h3>
        <p className={`pb-8 px-5 text-sm md:text-base`}>
          Here are some of the projects I have created using NextJs and Tailwind
          CSS.
        </p>
        {/* Cards for Nextjs Projects */}
        <Carousel>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button className="bg-gray-200 rounded-full p-2">Previous</button>
          </CarouselPrevious>

          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <NextjsCard
                  name={project.name}
                  images={project.images}
                  demoLink={project.demoLink}
                  codeLink={project.codeLink}
                  bgColor={project.bgColor}
                  hoverBgColor={project.hoverBgColor}
                  textColor={project.textColor}
                  hoverTextColor={project.hoverTextColor}
                  headingColour={project.headingColour}
                  cardbg={project.cardbg}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button className="bg-gray-200 rounded-full p-2">Next</button>
          </CarouselNext>
        </Carousel>
      </section>
    </main>
  );
}
