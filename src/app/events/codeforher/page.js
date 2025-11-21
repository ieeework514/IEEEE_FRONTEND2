"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import { 
  Calendar, 
  Users, 
  Trophy, 
  Target, 
  Clock, 
  Award, 
  Code, 
  ArrowRight,
  CheckCircle2,
  FileText,
  Video,
  Globe
} from "lucide-react";

const navItems = [
  { label: "IEEE", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Chapters", href: "/#chapters" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const eventData = {
  event: {
    title: "CodeForHer Hackathon 2025",
    subtitle: "Empowering Women in Technology Through Innovation",
    organizer: "IEEE Student Branch, Rajiv Gandhi Institute of Petroleum Technology (RGIPT)",
    badge: "Hackathon",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
  },
  introduction: {
    title: "Introduction",
    content: "The IEEE Student Branch of Rajiv Gandhi Institute of Petroleum Technology (RGIPT) proposes to organize a hackathon titled \"CodeforHer\", aimed at encouraging innovation, creativity, and problem-solving among students through technology-driven solutions. The hackathon focuses on promoting women participation in tech and inclusive innovation, in line with IEEE's mission to advance technology for humanity."
  },
  objectives: {
    title: "Objectives",
    items: [
      "To foster a spirit of innovation and problem-solving among students.",
      "To encourage participants to design impactful digital solutions to real-world challenges.",
      "To promote gender inclusivity and empower women in technology.",
      "To provide hands-on experience in developing end-to-end web-based solutions."
    ]
  },
  eventStructure: {
    title: "Event Structure",
    rounds: [
      {
        round: "Round 1",
        name: "Ideation and Presentation Round",
        duration: "15th – 22nd December, 2025",
        description: "Participants will receive one problem statement (PS) provided by the organizing committee. Each team must prepare a PowerPoint Presentation (PPT) describing their proposed solution, idea flow, and implementation strategy.",
        submissionDeadline: "22nd December, 2025",
        presentationDate: "26th December, 2025",
        shortlistAnnouncement: "27th December, 2025",
        evaluationCriteria: [
          "Creativity and innovation",
          "Relevance to the problem statement",
          "Technical feasibility",
          "Presentation quality"
        ]
      },
      {
        round: "Round 2",
        name: "Prototype Development & Demonstration",
        duration: "28th December, 2025 – 3rd January, 2026",
        description: "Shortlisted teams from Round 1 will proceed to develop a fully functional website based on their proposed idea.",
        submissions: [
          "The website link / hosted prototype",
          "A demonstration video (3–5 minutes) showcasing features and working of the website"
        ],
        submissionDeadline: "3rd January, 2026",
        evaluationCriteria: [
          "Functionality and completeness",
          "User interface and experience",
          "Innovation and originality",
          "Technical robustness",
          "Presentation in video"
        ]
      }
    ]
  },
  resultsAndAwards: {
    title: "Results and Awards",
    resultsAnnouncement: "4th January, 2026",
    description: "Winners will be announced via IEEE RGIPT social media handles and official website. Exciting certificates and IEEE goodies will be awarded to top-performing teams."
  },
  eligibility: {
    title: "Eligibility and Team Formation",
    items: [
      "Open to all undergraduate female students across India.",
      "Each team can consist of 3 to 4 members.",
      "All team members must be female and from the same college."
    ]
  },
  timeline: {
    title: "Timeline",
    events: [
      {
        activity: "Problem Statement Release",
        date: "15th December 2025"
      },
      {
        activity: "Round 1 Submission Deadline",
        date: "22nd December 2025"
      },
      {
        activity: "Round 1 Presentations",
        date: "26th December 2025"
      },
      {
        activity: "Announcement of Finalists",
        date: "27th December 2025"
      },
      {
        activity: "Round 2 Development Phase",
        date: "28th December 2025 – 3rd January 2026"
      },
      {
        activity: "Prototype & Video Submission",
        date: "3rd January 2026"
      },
      {
        activity: "Results Announcement",
        date: "4th January 2026"
      }
    ]
  },
  organizingCommittee: {
    title: "Organizing Committee",
    facultyCoordinator: "Dr. Vijay Kumar Singh, IEEE RGIPT Advisor",
    wieFacultyCoordinator: "Dr. Sajal Agarwal",
    studentCoordinators: {
      technical: "IEEE CS Society",
      designAndOutreach: "IEEE Design Team"
    }
  },
  expectedOutcomes: {
    title: "Expected Outcomes",
    items: [
      "Enhanced technical and presentation skills among participants.",
      "Promotion of innovation and inclusivity through practical learning.",
      "Strengthened collaboration among students across institutions.",
      "Greater visibility and recognition of IEEE RGIPT's commitment to student-led innovation."
    ]
  },
  conclusion: {
    title: "Conclusion",
    content: "\"CodeforHer\" stands as a platform to empower creativity, celebrate diversity, and encourage impactful technological solutions. This event will set a benchmark for inclusive hackathons and innovation-driven learning."
  }
};

export default function CodeForHerPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="relative z-10 w-full bg-black">
        <Navbar items={navItems} />

        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30 backdrop-blur-md mb-6">
              <span className="text-xs uppercase tracking-wider text-pink-300 font-semibold">
                {eventData.event.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {eventData.event.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
              {eventData.event.subtitle}
            </p>
            <p className="text-base md:text-lg text-white/60 mb-8">
              Organized by: {eventData.event.organizer}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                View All Events
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {eventData.introduction.title}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {eventData.introduction.content}
            </p>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-pink-400" />
              {eventData.objectives.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {eventData.objectives.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Structure Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {eventData.eventStructure.title}
            </h2>
            <div className="space-y-8">
              {eventData.eventStructure.rounds.map((round, index) => (
                <div key={index} className="rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/20 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-pink-300">{round.round}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{round.name}</h3>
                      <p className="text-pink-300/80 text-sm md:text-base">{round.duration}</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">{round.description}</p>
                  
                  {round.submissions && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-pink-400" />
                        Required Submissions:
                      </h4>
                      <ul className="space-y-2 ml-7">
                        {round.submissions.map((submission, idx) => (
                          <li key={idx} className="text-white/70 flex items-start gap-2">
                            <span className="text-pink-400 mt-1">•</span>
                            <span>{submission}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-sm text-white/60 mb-1">Submission Deadline</p>
                      <p className="text-white font-semibold">{round.submissionDeadline}</p>
                    </div>
                    {round.presentationDate && (
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-sm text-white/60 mb-1">Presentation Date</p>
                        <p className="text-white font-semibold">{round.presentationDate}</p>
                      </div>
                    )}
                    {round.shortlistAnnouncement && (
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-sm text-white/60 mb-1">Shortlist Announcement</p>
                        <p className="text-white font-semibold">{round.shortlistAnnouncement}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-pink-400" />
                      Evaluation Criteria:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {round.evaluationCriteria.map((criterion, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-pink-400" />
                          <span>{criterion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results and Awards Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-pink-400" />
              {eventData.resultsAndAwards.title}
            </h2>
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 mb-6">
              <p className="text-lg text-white/80 mb-2">
                <span className="font-semibold text-white">Results Announcement:</span> {eventData.resultsAndAwards.resultsAnnouncement}
              </p>
            </div>
            <p className="text-white/70 leading-relaxed">
              {eventData.resultsAndAwards.description}
            </p>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-pink-400" />
              {eventData.eligibility.title}
            </h2>
            <div className="space-y-4">
              {eventData.eligibility.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <Clock className="w-8 h-8 text-pink-400" />
              {eventData.timeline.title}
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500"></div>
              <div className="space-y-8">
                {eventData.timeline.events.map((event, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-black"></div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <h3 className="text-xl font-bold text-white mb-2">{event.activity}</h3>
                      <p className="text-pink-300 font-semibold">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Organizing Committee Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {eventData.organizingCommittee.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">Faculty Coordinator</h3>
                <p className="text-white/80">{eventData.organizingCommittee.facultyCoordinator}</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">WIE Faculty Coordinator</h3>
                <p className="text-white/80">{eventData.organizingCommittee.wieFacultyCoordinator}</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">Technical Team</h3>
                <p className="text-white/80">{eventData.organizingCommittee.studentCoordinators.technical}</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">Design and Outreach Team</h3>
                <p className="text-white/80">{eventData.organizingCommittee.studentCoordinators.designAndOutreach}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Outcomes Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {eventData.expectedOutcomes.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {eventData.expectedOutcomes.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {eventData.conclusion.title}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              {eventData.conclusion.content}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 backdrop-blur-md">
              <Code className="w-16 h-16 text-pink-300 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Code for Her?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join us in empowering women in technology and creating innovative solutions that make a difference.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  View All Events
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

