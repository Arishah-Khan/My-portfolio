import TypescriptCard from "./typescript-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
    {
        name: "Calculator",
        image: "/images/calculator.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/n8ka3-simple-calculator",
        codeLink: "https://github.com/Arishah-Khan/Project_00-Simple-Command-Line-Calculator-with-npx-",
      
    },
    {
        name: "Currency Converter",
        image: "/images/currency.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/currency-convertor", // npm link
        codeLink: "https://github.com/Arishah-Khan/Project-04-CLI-based-Currency-Convertor",
    },
    {
        name: "Word Counter",
        image: "/images/wordcounter.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/word_counter_project", // npm link
        codeLink: "https://github.com/Arishah-Khan/Project-05-CLI-based-Word-Counter",
    },
    
    {
        name: "Student Management System",
        image: "/images/student.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/std23_student_management_system", // npm link
        codeLink: "https://github.com/Arishah-Khan/CLI-Student-Management-System",
    
    },
    {
        name: "Adventure Game",
        image: "/images/game.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/adventure_game", // npm link
        codeLink: "https://github.com/Arishah-Khan/project07_adventure_game",
     
    },
    {
        name: "Quiz App",
        image: "/images/quiz.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/quiz_project", // npm link
        codeLink: "https://github.com/Arishah-Khan/project08_quiz",
    
    },
    {
        name: "Number Guessing Game",
        image: "/images/guessing.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/cli-number-guessing-game", // npm link
        codeLink: "https://github.com/Arishah-Khan/CLI-Number-Guessing-Game",
  
    },
    {
        name: "ATM Machine",
        image: "/images/atm.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/atm_machine", // npm link
        codeLink: "https://github.com/Arishah-Khan/Project_02-CLI-ATM-Machine",
      
    },
    {
        name: "Todo App",
        image: "/images/todo.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/todolists", // npm link
        codeLink: "https://github.com/Arishah-Khan/CLI-based-TODO-List",
       
    }
];

export default function TypescriptProjects() {
    return (
        <main className="">
            <section>
                <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-1 pt-4 pb-2 px-5`}>TypeScript Projects</h3>
                <p className={`pb-8 px-5 text-sm md:text-base`}>Here are some of the projects I have created using TypeScript.</p>

                {/* Cards for Projects */}
                <Carousel>
                    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <button className="bg-gray-200 rounded-full p-2">Previous</button>
                    </CarouselPrevious>

                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem key={index}>
                                <TypescriptCard
                                    name={project.name}
                                    image={project.image} 
                                    npmLink={project.npmLink} 
                                    codeLink={project.codeLink}
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
