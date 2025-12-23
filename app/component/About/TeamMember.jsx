import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const TeamMember = ({ name, role, image }) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
    <div className="w-64 h-64 mb-6 rounded-lg overflow-hidden bg-gray-700">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover grayscale"
      />
    </div>
    <h3 className="text-pink-400 text-xl font-semibold mb-2">{name}</h3>
    <p className="text-white text-sm font-bold tracking-wider mb-6">{role}</p>
    <div className="flex gap-4">
      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition">
        <Facebook className="w-5 h-5 text-gray-900" />
      </button>
      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition">
        <Twitter className="w-5 h-5 text-gray-900" />
      </button>
      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition">
        <Linkedin className="w-5 h-5 text-gray-900" />
      </button>
    </div>
  </div>
);

export default function MeetOurTeam() {
  const team = [
    {
      name: "Brandon James",
      role: "FOUNDER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Alex Parker",
      role: "CO-FOUNDER",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Victoria Thomas",
      role: "BUSINESS MANAGER",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Brandon James",
      role: "FOUNDER",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-8 dmsans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 outfit">Meet our team</h1>
          <p className="text-gray-400 text-lg">
            Alone we can do so little, together we can<br />do so much.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}