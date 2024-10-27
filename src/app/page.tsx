import HeroSec from "@/components/herosec"
import About from "@/components/about/about"
import Skills from "@/components/skills"
import ProjectSection from "@/components/projects/projectSec"
import ContactSec from "@/components/contact/contactsec"

export default function Home() {
  return (
    <>
      <HeroSec />
      <About />
      <Skills />
      <ProjectSection />
      <ContactSec />
    </>

  )
}