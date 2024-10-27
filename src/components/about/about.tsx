import ResumeBtn from "../bottons/resume-btn";



export default function About() {
    return (
      <section id="about" className="scroll-mt-24 bg-[#ebeae9] px-3 sm:px-6 md:px-10 lg:px-14 py-10 shadow-lg flex flex-col items-center justify-center">
        <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-2 sm:pt-4`}>
          About Me
        </h2>
        <p className={`text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg  mt-4 w-full md:w-3/4 lg:w-2/3 leading-relaxed text-center`}>
        {`I’m a Full Stack Developer skilled in ReactJS and NextJS, focusing on building responsive, user-friendly interfaces. I continuously learn and adapt to the latest web trends to create optimized and maintainable code.`}
        </p>
        <div className="py-4">
        <ResumeBtn 
        href="/about"
        text="Get to Know Me"
        />
        </div>
    
      </section>
    );
  }
  