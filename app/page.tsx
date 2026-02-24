"use client"

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
import ContactModal from "../components/ContactModal"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import WhyChoseUs from "../components/WhyChoseUs"
import Link from "next/link";
import { useEffect, useState } from "react";
import VideoTestimonials from "@/components/VideoTestimonials";

export default function Home() {

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {

    const lastShown = localStorage.getItem("contactModalTime")
    const now : number = Date.now()

    const oneHour = 2 * 60 * 1000

    // Show only if 1 hour has passed
    if (!lastShown || now - Number(lastShown) > oneHour) {

      const timer = setTimeout(() => {
        setShowModal(true)
        localStorage.setItem("contactModalTime", now.toString())
      }, 15000) // show after 15 seconds

      return () => clearTimeout(timer)
    }

  }, [])

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
        <Testimonials />
        {/* <VideoTestimonials/> */}
        <TeacherSpotlight />
        <WhyChoseUs />
        <DemoBanner />
        <Contact />
        <Footer />

        <ContactModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />

        <Link href="https://wa.me/917042662602" target="_blank" className="fixed rounded-full z-50 p-3 bottom-7 right-8 bg-green-500">
          <BsWhatsapp size={30} color="white" />
        </Link>
      </div>
    </div>
  );
}
