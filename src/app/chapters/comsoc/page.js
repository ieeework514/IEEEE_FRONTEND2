"use client"
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import { Bot, Cpu, Zap, Target, Users, Award, BookOpen, Calendar, ArrowRight, Code, Microchip, Cog } from "lucide-react";
import Link from "next/link";
import SplineScene from "@/components/ui/SplineScene";

const Plasma = dynamic(
  () => import("@/components/ui/Plasma"),
  { ssr: false }
);

const navItems = [
  { label: "IEEE", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Chapters", href: "/#chapters" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function CSPage() {

  const features = [
    {
      icon: Code,
      title: "Embedded Systems",
      description: "Learn microcontroller programming and embedded software design for communication devices."
    },
    {
      icon: Zap,
      title: "IoT & Wireless",
      description: "Explore communication modules, sensors, and wireless technologies for IoT applications."
    },
    {
      icon: Microchip,
      title: "Signal Processing",
      description: "Analyze and manipulate signals using DSP techniques for communication systems."
    },
    {
      icon: Target,
      title: "Competitions",
      description: "Participate in communication system design challenges, hackathons, and technical contests."
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with industry professionals, researchers, and fellow communication enthusiasts."
    },
    {
      icon: BookOpen,
      title: "Workshops & Seminars",
      description: "Attend technical workshops and guest lectures on communication and signal processing topics."
    }
  ];

  const activities = [
    {
      title: "Wireless Sensor Networks",
      description: "Design and implement wireless sensor networks for monitoring and data collection."
    },
    {
      title: "RFID & NFC Systems",
      description: "Develop RFID and NFC applications for automation, security, and communication projects."
    },
    {
      title: "Digital Signal Processing",
      description: "Apply DSP algorithms to audio, video, and communication signals using MATLAB and Python."
    },
    {
      title: "IoT Communication Modules",
      description: "Work with Zigbee, LoRa, and WiFi modules to build connected communication projects."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Plasma Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Plasma
          color="#09f6f6"
          speed={1.5}
          direction="reverse"
          scale={1.9}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar items={navItems} />

        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
            <div className="text-center mb-16 z-10">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                Communication & Signal Society
              </h1>
              <p className="text-base md:text-lg text-white/70 font-normal max-w-2xl mx-auto">
                Empowering future engineers in communication systems, signal processing, and IoT technologies.
              </p>
            </div>

            {/* 3D Scene */}
            <div className="relative w-[100vw] min-h-screen md:h-[600px] lg:h-[700px] mt-8">
              <SplineScene 
                scene="https://prod.spline.design/w12PaRYS19rGu5vn/scene.splinecode" 
                className="w-full h-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-16 z-10">
              <Link
                href="/events"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-white/90 text-black font-semibold rounded-lg transition-all hover:scale-105 active:scale-95"
              >
                View Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                Join Us
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
                About IEEE COMSOC
              </h2>
              <p className="text-lg text-cyan-200/90 max-w-3xl mx-auto">
                The IEEE Communication & Signal Chapter is committed to advancing research and innovation in communication technologies. We provide students and members with opportunities to learn, collaborate, and create real-world solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
                What We Offer
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-cyan-200/80">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
                Our Activities
              </h2>
              <p className="text-lg text-cyan-200/90 max-w-3xl mx-auto">
                Explore the exciting projects and activities organized throughout the year
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-md hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <Cog className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{activity.title}</h3>
                      <p className="text-cyan-200/90">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-md">
              <Bot className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Join the Communication Revolution?
              </h2>
              <p className="text-lg text-cyan-200/90 mb-8 max-w-2xl mx-auto">
                Become part of our community and help shape the future of communication and signal systems.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/events"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Upcoming Events
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="h-20"></div>
      </div>
    </div>
  );
}
