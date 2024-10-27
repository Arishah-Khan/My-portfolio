"use client"
import { useState } from "react";
import HtmlCssProjects from "@/components/projects/HtmlCss/htmlCss";
import NextJsProjects from "@/components/projects/nextjs/nextjs";
import TypescriptProjects from "@/components/projects/Typescript/typescript";
import JavaScriptProjects from "@/components/projects/javascript/javascript";
import FilterBtn from "@/components/projects/filter-btn";
import { category } from "@/components/categry";



export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<category>("All");


    const categories: category[] = ["All", "HTML & CSS", "JavaScript", "TypeScript", "NextJs"];

    
    const handleCategoryChange = (category: category) => {
        setSelectedCategory(category);
    };

    return (
        <main className="pb-6 bg-[#fafafa] flex flex-col items-center">
        
            <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-3 sm:py-6`}>
               My Projects
            </h2>

            <div className="flex flex-wrap space-x-4  justify-center">
                {categories.map((category) => (
                    <FilterBtn
                        key={category}
                        label={category}
                        isSelected={selectedCategory === category}
                        onClick={() => handleCategoryChange(category)}
                    />
                ))}
            </div>

            <div className="mt-8 w-full">
                {selectedCategory === "All" && (
                    <>
                        <HtmlCssProjects />
                        <JavaScriptProjects />
                        <TypescriptProjects />
                        <NextJsProjects />
                    </>
                )}
                {selectedCategory === "HTML & CSS" && <HtmlCssProjects />}
                {selectedCategory === "JavaScript" && <JavaScriptProjects />}
                {selectedCategory === "TypeScript" && <TypescriptProjects />}
                {selectedCategory === "NextJs" && <NextJsProjects />}
            </div>
        </main>
    );
}
