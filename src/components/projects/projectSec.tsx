import HtmlCssProjects from "./HtmlCss/htmlCss";
import JavaScriptProjects from "./javascript/javascript";
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
            <div>
                <HtmlCssProjects />
                <JavaScriptProjects />
            </div>

            
                <div className="flex justify-center items-center pt-12 pb-3">
                    <ProjectBtn
                        label="View All Projects"
                        link="/projects" />
                </div>
            
        </section>
    )
}