import HtmlCssProjects from "./HtmlCss/htmlCss"
import NextJsProjects from "./nextjs/nextjs"
import TypescriptProjects from "./Typescript/typescript"
import JavaScriptProjects from "./javascript/javascript"

export default function Projects(){
return(
    <main className=" pb-6 ">
        <HtmlCssProjects />
        <TypescriptProjects />
        <JavaScriptProjects />
        <NextJsProjects />
    </main>
)
}