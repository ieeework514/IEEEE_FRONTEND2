"use client"
import Navbar from "@/components/ui/Navbar";
import TeamPage from "@/components/ui/team-page";

const navItems = [
  { label: "IEEE", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Chapters", href: "/#chapters" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function TeamRoute() {
  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="relative z-10 w-full bg-black">
        <Navbar items={navItems} />
        <TeamPage />
      </div>
    </div>
  );
}

