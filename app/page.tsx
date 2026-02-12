import ComingSoon from "@/components/ComingSoon";
import Header from "../components/Header"
import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import AvailableCourses from "../components/AvailableCourses"
import SpecialCourses from "../components/SpecialCourses"

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="">
        {/* <ComingSoon/> */}
        <Header />
        <Hero/>
        <AboutSection />
        <AvailableCourses />
        <SpecialCourses />
      </div>
    </div>
  );
}
