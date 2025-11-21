"use client"
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import { Users, Heart, Star, Globe, BookOpen, Target, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import SplineScene from "@/components/ui/SplineScene";

const Plasma = dynamic(() => import("@/components/ui/Plasma"), { ssr: false });

const navItems = [
  { label: "IEEE", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Chapters", href: "/#chapters" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function WIEPage() {

  const features = [
    {
      icon: Users,
      title: "Join IEEE WIE",
      description: "Become part of a global network promoting women engineers, scientists, and inspiring girls to pursue STEM careers."
    },
    {
      icon: Star,
      title: "Affinity Group Activities",
      description: "IEEE WIE groups worldwide create impactful programs, events, and community-oriented initiatives."
    },
    {
      icon: Heart,
      title: "Volunteering",
      description: "Get involved with IEEE WIE through mentorship, event organizing, outreach programs, and leadership roles."
    },
    {
      icon: BookOpen,
      title: "Pre-University Outreach (STAR Program)",
      description: "Encourage girls to pursue STEM through IEEE’s Student-Teacher and Research Engineer/Scientist program."
    },
    {
      icon: Globe,
      title: "WIE Global Network",
      description: "Connect with women engineers and educators worldwide through IEEE Collabratec™."
    },
    {
      icon: Target,
      title: "Member & Career Resources",
      description: "Access valuable member resources, professional development tools, and exclusive opportunities."
    }
  ];

  const activities = [
    {
      title: "Community Engagement",
      description: "WIE affinity groups host events that empower women in tech—panels, workshops, mentorship circles, and more."
    },
    {
      title: "Pre-University STEM Activities",
      description: "Conduct STEM sessions, demonstrations, and interactive programs for school students worldwide."
    },
    {
      title: "Professional Development",
      description: "Workshops, talks, and mentorship programs designed to uplift women in engineering careers."
    },
    {
      title: "Global Collaboration",
      description: "Engage with engineers around the world via WIE’s online platforms, conferences, and networks."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">
      
      {/* Plasma Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Plasma 
          color="#b832f6"
          speed={1.5}
          scale={1.9}
          opacity={0.9}
          mouseInteractive={true}
        />
      </div>

      <div className="relative z-10">
        <Navbar items={navItems} />

        {/* HERO SECTION */}
        <section className="w-full min-h-screen flex flex-col items-center justify-center pt-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              IEEE Women In Engineering
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join a global community of women shaping the future of technology, engineering, 
              and empowerment worldwide.
            </p>
          </div>

          {/* 3D Scene — FIXED AND WORKING */}
          <div className="relative w-[100vw] min-h-[60vh] mt-8">
            <SplineScene
              scene="https://prod.spline.design/w12PaRYS19rGu5vn/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <Link href="/events" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
              View Events
            </Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:scale-105 transition">
              Join WIE
            </Link>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
              About IEEE WIE
            </h2>
            <p className="text-lg text-purple-200/90 mt-6 max-w-3xl mx-auto">
              IEEE Women in Engineering is one of the world’s largest global professional organizations 
              dedicated to promoting women engineers, scientists, and innovators across STEM fields.
            </p>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-pink-400/50 transition-all">
                    <div className="flex gap-3 items-center mb-4">
                      <div className="p-3 rounded-lg bg-pink-500/20">
                        <Icon className="w-6 h-6 text-pink-300" />
                      </div>
                      <h3 className="text-xl font-bold">{f.title}</h3>
                    </div>
                    <p className="text-purple-200/80">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ACTIVITIES SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
              Our Activities
            </h2>
            <p className="text-lg text-purple-200/90 max-w-3xl mx-auto">
              IEEE WIE volunteers and affinity groups host impactful programs that inspire and uplift communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((a, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/20 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-3">{a.title}</h3>
                <p className="text-purple-200/90">{a.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 backdrop-blur-md">
            <Users className="w-16 h-16 text-pink-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Be Part of a Global Movement
            </h2>
            <p className="text-lg text-purple-200/90 mb-8 max-w-2xl mx-auto">
              Empower women, inspire future innovators, and help build an inclusive STEM community.
            </p>

            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition">
                Join WIE
              </Link>
              <Link href="/events" className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/15 hover:scale-105 transition">
                <Calendar className="w-5 h-5 inline-block mr-2" />
                View Events
              </Link>
            </div>
          </div>
        </section>

        <div className="h-20"></div>
      </div>
    </div>
  );
}
