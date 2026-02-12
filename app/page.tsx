import ComingSoon from "@/components/ComingSoon";
import Header from "../components/Header"
import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import AvailableCourses from "../components/AvailableCourses"
import SpecialCourses from "../components/SpecialCourses"
import OnlineLearningSection from "../components/OnlineLearningSection"
import TeacherSpotlight from "../components/TeacherSpotlight"
import { BsWhatsapp } from "react-icons/bs";
import DemoBanner from "../components/DemoBanner"
import Contact from "../components/Contact"
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="">
        {/* <ComingSoon/> */}
        <Header />
        <Hero />
        <AboutSection />
        <AvailableCourses />
        <SpecialCourses />
        <OnlineLearningSection />
        <TeacherSpotlight />
        <DemoBanner />
        <Contact />

        <Link href="https://wa.me/917042662602" target="_blank" className="fixed rounded-full p-3 bottom-7 right-8 bg-green-500">
          <BsWhatsapp size={30} color="white"/>
        </Link>
      </div>
    </div>
  );
}
