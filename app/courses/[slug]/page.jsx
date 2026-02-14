"use client"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"
import { motion } from "framer-motion"
import { FiChevronLeft, FiCheckCircle, FiUsers, FiTarget, FiSmile } from "react-icons/fi"

const courseData = {
    "iit-focused": {
        title: "IIT-JEE Foundation & Advanced",
        badge: "Grades 7 - 10",
        image: "/iit-course.png",
        description: "A premier program designed to bridge the gap between school curriculum and the rigors of competitive engineering exams. We focus on building an 'analytical' brain rather than just rote learning.",
        stats: { students: "Limited to 6", duration: "1 Year", level: "Advanced" },
        highlights: [
            { title: "Conceptual Depth", detail: "Moving beyond formulas to understand the 'why' behind Physics & Maths." },
            { title: "Doubt Elimination", detail: "Dedicated 1-on-1 time to clear hurdles before they become habits." },
            { title: "Competitive Edge", detail: "Early exposure to MCQ patterns and time-management strategies." }
        ],
        features: [
            "Complete IIT-JEE aligned syllabus",
            "Weekly 3-Tier Assessments",
            "Advanced Problem Solving Sessions",
            "Personal Academic Mentoring",
            "Olympiad & NTSE exposure"
        ]
    },
    "40-day-booster": {
        title: "Board Exam Booster (40 Days)",
        badge: "Critical Revision",
        image: "/40-day.png",
        description: "The clock is ticking. This high-intensity program is designed to turn your average scores into 'Topper' grades by identifying and fixing your weak links in record time.",
        stats: { students: "Flash Batch", duration: "40 Days", level: "Intensive" },
        highlights: [
            { title: "High-Yield Topics", detail: "Focusing on 20% of the syllabus that accounts for 80% of marks." },
            { title: "Paper Presentation", detail: "Learning how to write answers that examiners love to mark high." },
            { title: "Stress Management", detail: "Helping students stay calm and focused during the peak exam season." }
        ],
        features: [
            "Rapid Concept Recap",
            "Top 100 Expected Questions",
            "Real-time Mock Exams",
            "Daily Score Tracking",
            "Time-crunch Management"
        ]
    },
    "foundation-program": {
        badge: "Classes 6 – 8",
        title: "Junior Excellence Foundation",
        image: "/foundation6-8.png",
        description: "The most crucial years of a student's life. We transform students from 'Passive Learners' to 'Active Thinkers' by making Science and Math intuitive and fun.",
        stats: { students: "Small Group", duration: "1 Year", level: "Foundational" },
        highlights: [
            { title: "Maths Fear Removal", detail: "Breaking complex numbers into simple, relatable real-world logic." },
            { title: "English Fluency", detail: "Building confidence in communication alongside academic excellence." },
            { title: "Curiosity Driven", detail: "Practical Science demonstrations to keep the interest alive." }
        ],
        features: [
            "Strong STEM Fundamentals",
            "Logical Reasoning Modules",
            "Interactive Communication Skills",
            "Fortnightly Progress Reports",
            "Practical-based Learning"
        ],
    },
    "board-preparation": {
        badge: "Classes 9 – 10",
        title: "Secondary Board Mastery",
        image: "/board-preparation.png",
        description: "Your first major milestone. We provide a structured roadmap to 95%+ scores through rigorous testing, personalized feedback, and comprehensive notes.",
        stats: { students: "Max 6", duration: "1 Year", level: "Boards" },
        highlights: [
            { title: "PYQ Analysis", detail: "Analyzing 10 years of board papers to predict future trends." },
            { title: "Step-Marking Mastery", detail: "Training students to secure marks even in complex calculations." },
            { title: "NCERT Focus", detail: "Mastering the 'Bible' of Board exams with in-depth clarity." }
        ],
        features: [
            "Comprehensive NCERT Coverage",
            "Weekly Subjective Tests",
            "Error-Correction Workshops",
            "Previous Year Question Banks",
            "Regular Parent-Teacher Meets"
        ],
    },
    // ... add similar depth to others
    "all-streams": {
        badge: "Senior Secondary (Grades 11-12)",
        title: "Senior Excellence & Career Launchpad",
        image: "/allstreams.png",
        description: "The bridge between school and your professional career. Whether you are aiming for Medicine, Corporate Leadership, or Creative Arts, we provide the subject mastery and entrance-exam orientation required to succeed in the 21st century.",
        stats: { students: "Personalized", duration: "2 Years", level: "Senior High" },
        highlights: [
            {
                title: "Subject Specialization",
                detail: "In-depth coaching for Physics, Accounts, or Humanities led by domain experts who simplify complex theories."
            },
            {
                title: "CUET & Entrance Prep",
                detail: "Parallel preparation for university entrance exams so students don't have to join separate coaching."
            },
            {
                title: "Profile Building",
                detail: "Guidance on career roadmaps, college applications, and identifying the right stream for the future."
            }
        ],
        features: [
            "Stream-Specific Expert Guidance",
            "Advanced Subject Mentoring",
            "Competitive Exam Integration",
            "Intensive Concept Clarity Labs",
            "One-on-One Career Counselling"
        ],
    },
    "practical-learning": {
        badge: "Our Core Philosophy",
        title: "The Practical Learning Lab",
        image: "/practical-learning.png",
        description: "Education is useless if it can't be applied. Our 'Special Focus' program replaces boring lectures with interactive experiments and real-world case studies to ensure students 'see' the logic before they 'read' the text.",
        stats: { students: "Interactive", duration: "Ongoing", level: "All Grades" },
        highlights: [
            {
                title: "Real-World Application",
                detail: "Understanding Newton's laws through sports or compound interest through stock market basics."
            },
            {
                title: "Active Participation",
                detail: "Doubt-solving isn't a separate session; it's built into every minute of our interactive teaching."
            },
            {
                title: "Visual Mastery",
                detail: "Using 3D models, digital tools, and physical experiments to make learning unforgettable."
            }
        ],
        features: [
            "Experience-Based Learning",
            "Live Doubt-Solving Ecosystem",
            "Application-Oriented Problem Solving",
            "Case Study Discussions",
            "Weekly Insightful Assessments"
        ],
    },
};

export default function CourseDetail({ params }) {
    const { slug } = use(params);
    const course = courseData[slug];

    if (!course) return <div className="p-20 text-center">Course not found</div>;

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-orange-100">
            {/* 1. HERO & QUICK STATS */}
            <section className="relative pt-24 pb-12 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-slate-50 to-white -z-10" />

                <div className="max-w-7xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-8 transition-all group">
                        <FiChevronLeft className="group-hover:-translate-x-1" /> Back to Catalog
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Text Content */}
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="px-4 py-1.5 rounded-lg bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-widest mb-6 inline-block">
                                {course.badge}
                            </span>
                            <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight leading-[1.1]">
                                {course.title}
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                                {course.description}
                            </p>

                            {/* Quick Stats Bar */}
                            <div className="flex flex-wrap gap-8 py-8 border-y border-slate-100 mb-10">
                                {Object.entries(course.stats).map(([key, val]) => (
                                    <div key={key}>
                                        <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">{key}</p>
                                        <p className="text-lg font-black text-slate-800">{val}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95">
                                    Book a Free Demo Class
                                </button>
                                <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
                                    Get Prospectus
                                </button>
                            </div>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
                                <Image src={course.image} alt={course.title} fill className="object-cover" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                    <FiUsers />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Batch Size</p>
                                    <p className="text-lg font-black text-slate-800 leading-none">Max 6 Students</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. KEY HIGHLIGHTS (The 'Why' Section) */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {course.highlights.map((h, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <span className="text-4xl font-black text-blue-100 mb-4 block">0{i + 1}</span>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{h.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{h.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DETAILED FEATURES */}
            <section className="py-24 bg-blue-500 rounded-[4rem] mx-4 mb-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                                Everything you need to <span className="">Succeed.</span>
                            </h2>
                            <div className="grid gap-4">
                                {course.features.map((f, i) => (
                                    <motion.div
                                        key={i}
                                        whileInView={{ x: [0, 10, 0] }}
                                        className="flex items-center gap-4 bg-blue-200/20 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <FiCheckCircle className="text-blue-50 text-xl shrink-0" />
                                        <span className="text-slate-200 font-medium">{f}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Trust Factors Card */}
                        <div className="bg-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
                            <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Why Our Method Works</h3>
                            <div className="space-y-8">
                                {[
                                    { t: "Personalized Pace", d: "We don't leave anyone behind. If a student struggles with a concept, we halt until it's mastered.", icon: <FiTarget />, c: "text-orange-500" },
                                    { t: "Active Interaction", d: "With only 6 students, silence isn't an option. Everyone participates, everyone learns.", icon: <FiUsers />, c: "text-blue-500" },
                                    { t: "Fun Foundations", d: "We use visual storytelling to teach abstract Science concepts.", icon: <FiSmile />, c: "text-green-500" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className={`text-3xl ${item.c} pt-1`}>{item.icon}</div>
                                        <div>
                                            <h4 className="text-lg font-black text-slate-900 leading-none mb-2">{item.t}</h4>
                                            <p className="text-slate-500 text-sm">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}