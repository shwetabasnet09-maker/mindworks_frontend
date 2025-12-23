import React from 'react';
import { ArrowRight, MessageCircle, User, FolderOpen } from 'lucide-react';

const ProjectCard = ({ date, month, author, category, title, image, commentCount }) => (
  <div className="bg-transparent rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
    {/* Image */}
    <div className="relative h-48 md:h-50">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-[#00A74E] text-white font-bold px-3 py-2 rounded-lg text-center">
        <div className="text-lg">{date}</div>
        <div className="text-xs uppercase">{month}</div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1 justify-between dmsans">
      {/* Author & Category */}
      <div className="flex items-center gap-4 text-sm text-white mb-3">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4 text-[#00A74E]" />
          <span>By {author}</span>
        </div>
        <div className="flex items-center gap-1">
          <FolderOpen className="w-4 h-4 text-[#00A74E]" />
          <span>{category}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-lg font-semibold text-white mb-4 leading-snug">
        {title}
      </h3>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm">
        <button className="flex items-center gap-1 text-white font-medium uppercase hover:text-[#00A74E] transition-colors">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1 text-white">
          <MessageCircle className="w-4 h-4 text-[#00A74E]" />
          <span>{commentCount}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function ProjectSection() {
  const ProjectPosts = [
    {
      date: '03',
      month: 'JUN',
      author: 'Rimon',
      category: 'AI Content',
      title: 'Web Development Essentials Every Business',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      commentCount: 'No Comments'
    },
    {
      date: '03',
      month: 'JUN',
      author: 'Rimon',
      category: 'AI Technology',
      title: 'How AI is Revolutionizing Web Development',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      commentCount: 'No Comments'
    },
    {
      date: '01',
      month: 'JUN',
      author: 'Kamrul',
      category: 'UI Design',
      title: 'Effective Hashtag Strategies to Increase Reach',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      commentCount: 'No Comments'
    }
  ];

  return (
    <div className="bg-black py-40">
      <div className="wrapper px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#00A74E] font-semibold uppercase tracking-wider text-sm dmsans">
              From The Project
            </span>
            <div className="w-12 h-0.5 bg-[#00A74E]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white outfit">
            New Project Updates
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ProjectPosts.map((post, index) => (
            <ProjectCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
