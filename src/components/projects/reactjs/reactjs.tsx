
import NextjsCard from "./reactjs_card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
     {
    name: "AI Website",
    images: [
      "/images/artificial1.png",
      "/images/artificial2.png",
      "/images/artificial3.png",
    ],
    demoLink: "https://assignment1-react-fawn.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/react-assignment1",
    bgColor: "bg-[#03152b]", 
    hoverBgColor: "hover:bg-[#75a9b7]", 
    textColor: "text-white", 
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#03152b]",
    headingColour: "text-[#03152b] border-[#03152b]",
    cardbg: "bg-[#75a9b7]",
  },
   {
    name: "ShopEasy Website",
    images: [
      "/images/shopify1.png",
      "/images/shopify2.png",
      "/images/shopify3.png",
    ],
    demoLink: "https://react-api-six-kappa.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/react-assignment2",
    bgColor: "bg-[#3c41d0]", 
    hoverBgColor: "hover:bg-[#e4e18f]",
    textColor: "text-white", 
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#3c41d0]",
    headingColour: "text-[#3c41d0] border-[#3c41d0]",
    cardbg: "bg-[#e4e18f]",
  },
   {
    name: "Portfolio Template Website",
    images: [
      "/images/portfolioTem1.png",
      "/images/portfolioTem2.png",
      "/images/portfolioTem3.png",
    ],
    demoLink: "https://figma-design-website.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/react-assignment-figma",
    bgColor: "bg-[#326984]", 
    hoverBgColor: "hover:bg-[#b8d6e4]",
    textColor: "text-white",
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#326984]",
    headingColour: "text-[#326984] border-[#326984]",
    cardbg: "bg-[#b8d6e4]",
  },
   {
    name: "Weather Website",
    images: [
      "/images/weatherapi1.png",
      "/images/weatherapi2.png",
      "/images/weatherapi3.png",
    ],
    demoLink: "https://weather-app-pi-blond-24.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/weather-app",
    bgColor: "bg-[#274550]", 
    hoverBgColor: "hover:bg-[#b2b8c5]", 
    textColor: "text-white", 
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#274550]",
    headingColour: "text-[#274550] border-[#274550]",
    cardbg: "bg-[#b2b8c5]",
  },
  {
    name: "Todo Website",
    images: ["/images/todoReact1.png", "/images/todoReact2.png", "/images/todoReact3.png"],
    demoLink: "https://react-todo-coral-eight.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/react-todo",
    bgColor: "bg-[#f22929]",
    hoverBgColor: "hover:bg-[#fcbfbf] hover:border-2 hover:border-[#f22929] ", 
    textColor: "text-white", 
    hoverTextColor: "hover:text-black",
    headingColour: "text-[#f22929] border-[#f22929]",
    cardbg: "bg-[#fcbfbf]",
  },
  {
    name: "Attendance Website",
    images: [
      "/images/attend1.png",
      "/images/attend2.png",
      "/images/attend3.png",
    ],
    demoLink: "https://attendance-web-smoky.vercel.app/",
    codeLink: "https://github.com/Arishah-Khan/attendance",
    bgColor: "bg-[#09863d]", 
    hoverBgColor: "hover:bg-[#c0fbd9]", 
    textColor: "text-white", 
    hoverTextColor: "hover:text-black hover:border-2 hover:border-[#09863d]",
    headingColour: "text-[#09863d] border-[#09863d]",
    cardbg: "bg-[#c0fbd9]",
  },
 
];

export default function ReactJsProjects() {
  return (
    <main className=" py-10">
      <section>
        <h3
          className={`text-base sm:text-lg md:text-xl font-bold mb-1 mt-2 py-2 px-5`}
        >
          ReactJs Projects
        </h3>
        <p className={`pb-8 px-5 text-sm md:text-base`}>
          Here are some of the projects I have created using ReactJs and Tailwind
          CSS.
        </p>
        {/* Cards for Reactjs Projects */}
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
