"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  video: string;
  linkedin: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kanik Gupta",
    role: "IIT Focused Batch",
    image: "/image.png",
    video: "/video/video-feedback1.mp4",
    linkedin: "https://www.linkedin.com/in/kanik-gupta?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    id: 2,
    name: "Kanik Gupta",
    role: "IIT Focused Batch",
    image: "/image.png",
    video: "/video/video-feedback1.mp4",
    linkedin: "https://www.linkedin.com/in/kanik-gupta?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  // {
  //   id: 2,
  //   name: "Aman Verma",
  //   role: "40-Day Booster",
  //   image: "/students/student2.jpg",
  //   video: "/videos/student2.mp4",
  //   linkedin: "https://linkedin.com/in/sample2",
  // },
  // {
  //   id: 3,
  //   name: "Sneha Patel",
  //   role: "Practical Learning",
  //   image: "/students/student3.jpg",
  //   video: "/videos/student3.mp4",
  //   linkedin: "https://linkedin.com/in/sample3",
  // },
  // {
  //   id: 4,
  //   name: "Arjun Mehta",
  //   role: "IIT Foundation",
  //   image: "/students/student4.jpg",
  //   video: "/videos/student4.mp4",
  //   linkedin: "https://linkedin.com/in/sample4",
  // },
];

export default function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Testimonial | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  // Keyboard Arrow Navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scroll("right");
      if (e.key === "ArrowLeft") scroll("left");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-blue-500 text-sm font-semibold">
            Learn more from our students
          </p>
          <h2 className="md:text-4xl text-3xl font-bold text-gray-900">
            Hear what our students are saying
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          {/* <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:scale-110 transition"
          >
            <BiChevronLeft />
          </button> */}

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className="min-w-[260px] md:min-w-[300px] cursor-pointer group"
              >
                {/* Portrait Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={600}
                    className="object-cover w-full h-[450px] group-hover:scale-105 transition duration-300"
                  />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                      <svg
                        fill="#000"
                        viewBox="0 0 24 24"
                        className="w-8 h-8"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-4 flex items-center gap-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    {/* <p className="text-sm text-gray-500">{item.role}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {/* <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:scale-110 transition"
          >
            <BiChevronRight />
          </button> */}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full relative p-6">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 cursor-pointer"
            >
              <CgClose />
            </button>

            {/* Portrait Video */}
            <video
              src={selected.video}
              controls
              autoPlay
              className="w-full h-[500px] object-cover rounded-lg"
            />

            <div className="mt-4">
              <h3 className="text-xl font-bold">{selected.name}</h3>
              <p className="text-gray-500">{selected.role}</p>

              <Link
                href={selected.linkedin}
                target="_blank"
                className="text-blue-600 text-sm underline"
              >
                View Linked Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}