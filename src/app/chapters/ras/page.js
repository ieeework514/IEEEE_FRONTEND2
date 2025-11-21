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

export default function RASPage() {

  const features = [
    {
      icon: Bot,
      title: "Robotics Research",
      description: "Explore cutting-edge robotics technologies and autonomous systems through hands-on projects and research initiatives."
    },
    {
      icon: Cpu,
      title: "Automation Systems",
      description: "Learn about industrial automation, control systems, and intelligent manufacturing processes."
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Integrate artificial intelligence and machine learning algorithms into robotic systems for enhanced capabilities."
    },
    {
      icon: Target,
      title: "Competitions",
      description: "Participate in national and international robotics competitions, hackathons, and technical challenges."
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with industry professionals, researchers, and fellow robotics enthusiasts from around the world."
    },
    {
      icon: BookOpen,
      title: "Workshops & Seminars",
      description: "Attend technical workshops, seminars, and guest lectures by experts in robotics and automation."
    }
  ];

  const activities = [
    {
      title: "Line Follower Robots",
      description: "Build and program autonomous robots that can follow lines using sensors and PID control algorithms."
    },
    {
      title: "Obstacle Avoidance Systems",
      description: "Develop intelligent navigation systems using ultrasonic sensors, LiDAR, and computer vision."
    },
    {
      title: "Robotic Arm Projects",
      description: "Design and control robotic manipulators for various applications including pick-and-place operations."
    },
    {
      title: "Drone Technology",
      description: "Explore unmanned aerial vehicles (UAVs) and their applications in surveillance, delivery, and mapping."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Plasma Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Plasma
          color="#0919f6"
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

        {/* Hero Section - Minimalist Design */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
            {/* Text Content - Centered, Minimalist */}
            <div className="text-center mb-16 z-10">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                Robotics and Automation Society
              </h1>
              <p className="text-base md:text-lg text-white/70 font-normal max-w-2xl mx-auto">
                Empowering the next generation of robotics engineers through innovation, 
                research, and hands-on learning experiences.
              </p>
            </div>

            {/* 3D Robot Scene - Centered Below Text */}
            <div className="relative w-[100vw] min-h-screen md:h-[600px] lg:h-[700px] mt-8">
              <SplineScene 
                scene="https://prod.spline.design/w12PaRYS19rGu5vn/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Action Buttons - Centered Below Robot */}
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
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                About IEEE RAS
              </h2>
              <p className="text-lg text-purple-200/90 max-w-3xl mx-auto">
                The IEEE Robotics and Automation Society (RAS) is dedicated to advancing innovation 
                and excellence in robotics and automation. Our student chapter provides a platform 
                for students to explore, learn, and contribute to the rapidly evolving field of robotics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-purple-200/90">
                  To foster innovation in robotics and automation by providing students with 
                  opportunities to engage in research, competitions, and collaborative projects 
                  that push the boundaries of technology.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-purple-200/90">
                  To become a leading student chapter in robotics and automation, recognized for 
                  excellence in research, innovation, and contribution to the global robotics community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                What We Offer
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-400/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-purple-200/80">{feature.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Our Activities
              </h2>
              <p className="text-lg text-purple-200/90 max-w-3xl mx-auto">
                Explore the exciting projects and activities we organize throughout the year
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 backdrop-blur-md hover:border-blue-400/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                      <Cog className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{activity.title}</h3>
                      <p className="text-purple-200/90">{activity.description}</p>
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
            <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md">
              <Bot className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Join the Robotics Revolution?
              </h2>
              <p className="text-lg text-purple-200/90 mb-8 max-w-2xl mx-auto">
                Become part of our community and help shape the future of robotics and automation. 
                Whether you're a beginner or an experienced engineer, there's a place for you here.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
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

        {/* Footer spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}

