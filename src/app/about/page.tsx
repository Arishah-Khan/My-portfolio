import ResumeBtn from "@/components/bottons/resume-btn";
import Image from "next/image";
import Card from "@/components/about/about-card";

export default function AboutMe() {
  const education = [
    {
      degree: "Master's Degree in Mathematics",
      institution: "University of Karachi",
      year: "2021 - 2023",
    },
    {
      degree: "Bachelor's Degree in Science",
      institution: "DJ Sindh Government Science College, Karachi",
      year: "2018 - 2020",
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "KMA Girls Degree College, Karachi",
      year: "2016 - 2018",
    },
    {
      degree: "Matriculation",
      institution: "Al-Hamd Grammar School, Karachi",
      year: "2014 - 2016",
    },
  ];

  const Certification = [
    {
      name: "Certification in Cloud Applied Generative AI, Governor Sindh Pakistan Initiative",
      institution: "Governor House Karachi",
      year: "Ongoing",
    },
    {
      name: "Certification in Mern Stack Developer",
      institution: "Saylani Mass IT Training",
      year: "2024 - 2025",
    },
  ];
  return (
    <main className={`bg-[#fafafa] py-8`}>
      {/* Heading Section */}
      <section className="text-center">
        <h1 className={`text-4xl font-bold  text-[#071fa8]`}>About Me</h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-8 px-4">
        <div className="py-4 flex flex-col justify-center items-center pt-6 md:px-4">
          <h2 className={`text-2xl font-semibold text-gray-700`}>
            Welcome from Arishah Khan
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
            {
              "I'm a Full Stack Developer with a strong background in mathematics and a passion for building modern web applications. I specialize in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Redux, and Context API."
            }
            <br />
            <br />
            {
              "I create responsive and user-friendly designs using Tailwind CSS, Bootstrap, ShadCN, and Figma. On the backend, I work with Node.js, Express.js, MongoDB, Firebase, and Sanity (Headless CMS)."
            }
            <br />
            <br />
            {
              "I'm familiar with Git, GitHub, and have a basic understanding of Python. I focus on clean code, collaboration, and continuous learning to deliver complete, scalable solutions."
            }
          </p>

          {/* Resume Button */}
          <div className="py-6 flex justify-center">
            <ResumeBtn
        href="https://drive.google.com/file/d/1TGURxcBgQiyCb3W9pCozvVoZprc6ja8m/view?usp=sharing"
              text="My Resume"
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          {/* Gradient Image (Background) */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[300px] h-[290px] sm:w-[370px] sm:h-[370px] mb-4">
              <Image
                src="/images/Gradient.svg"
                alt="Gradient Background"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Profile Image (Foreground) */}
            <div className="relative z-10 translate-y-[-10px]">
              <Image
                src="/images/profile.png"
                alt="Profile Pic"
                width={340}
                height={320}
                className="rounded-full object-cover w-[300px] h-[300px] sm:w-[350px] sm:h-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="space-y-10 grid justify-center items-center ">
        {" "}
        {/* Adds spacing between sections */}
        {/* Education Section */}
        <div className=" py-10 px-6 sm:px-10 md:px-14 lg:px-16">
          <h2 className="text-2xl font-semibold text-center text-[#071fa8] mb-6">
            Education
          </h2>{" "}
          {/* Section Title */}
          <div className="grid grid-cols-1  gap-6">
            {" "}
            {/* Grid Layout for Cards */}
            {education.map((element, index) => (
              <Card
                key={index}
                degree={element.degree}
                institute={element.institution}
                year={element.year}
              />
            ))}
          </div>
        </div>
        {/* Certification Section */}
        <div className="py-10 px-6 sm:px-10 md:px-14 lg:px-16 rounded-lg ">
          <h2 className="text-2xl font-semibold text-center text-[#071fa8] mb-6">
            Certifications
          </h2>{" "}
          {/* Section Title */}
          <div className="grid grid-cols-1 gap-6">
            {Certification.map((element, index) => (
              <Card
                key={index}
                degree={element.name}
                institute={element.institution}
                year={element.year}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
