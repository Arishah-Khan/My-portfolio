import ProjectCard from "./HtmlCss/HtmlCssProjectsCard";
import JavascriptCard from "./javascript/javascript-card";
import NextjsCard from "./nextjs/nextjs-card";
import ProjectBtn from "./projects-btn";



export default function ProjectSection() {
    return (
        <section className="bg-[#ebeae9] py-12 px-4" >
            <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-8`}>
                Projects
            </h2>
            <p className="text-center text-gray-700  text-sm md:text-base lg:text-lg max-w-2xl mx-auto pb-8">
                Explore a selection of my projects that showcase my skills in web development and design. Each project highlights different technologies, creativity, and problem-solving abilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center  gap-6 ">
                <div className="flex justify-center items-center">
                    <ProjectCard
                        name="Covid Awareness Website"
                        images={["/images/covidhalf.jpg", "/images/covidFull.png"]}
                        demoLink="https://arishah-khan.github.io/HTML-CSS-BOOTSTRAP-Hackhathon/"
                        codeLink="https://github.com/Arishah-Khan/HTML-CSS-BOOTSTRAP-Hackhathon"
                        bgColor="bg-[#6b43bd]"
                        hoverBgColor="hover:bg-[#60a0d1]"
                        textColor="text-white"
                        hoverTextColor="hover:text-black"
                        headingColour="text-[#6b43bd] border-[#6b43bd]"
                        cardbg="bg-[#e2d9f3] w-[280px] md:w-[300px] h-[330px] flex flex-col gap-4"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <JavascriptCard
                        name="Calculator"
                        images={["/images/jscal1.png", "/images/calculator2.png"]}
                        demoLink="https://arishah-khan.github.io/Calculator-javascript/"
                        codeLink="https://github.com/Arishah-Khan/Calculator-javascript"
                        bgColor="bg-[#B80000]"
                        hoverBgColor="hover:bg-[#F09090] hover:border-[#B80000] hover:border-2 "
                        textColor="text-white"
                        hoverTextColor="hover:text-[#8C0000]"
                        headingColour="text-[#B80000] border-[#B80000]"
                        cardbg="bg-[#ffadad] w-[280px] md:w-[300px] h-[330px] flex flex-col gap-4"
                    />
                </div>

                <div className="flex justify-center items-center">
                    <NextjsCard
                        name="Grocery Website"
                        images={["/images/grocery1.png", "/images/grocery2.png", "/images/grocery3.png"]}
                        demoLink="https://multipage-website-nextjs.vercel.app/"
                        codeLink="https://github.com/Arishah-Khan/multipage-website-nextjs"
                        bgColor="bg-[#1e5e3f]"
                        hoverBgColor="hover:bg-[#dddad0]"
                        textColor="text-white"
                        hoverTextColor="hover:text-black hover:border-2 hover:border-[#1e5e3f]"
                        headingColour="text-[#1e5e3f] border-[#1e5e3f]"
                        cardbg="bg-[#c5ead8] w-[280px] md:w-[300px] h-[330px] "
                    />
                </div>

            </div>

            
                <div className="flex justify-center items-center pt-12 pb-3">
                    <ProjectBtn
                        label="View All Projects"
                        link="/projects" />
                </div>
            
        </section>
    )
}