import React from 'react';
import { ArrowRight, MessageCircle, User, FolderOpen } from 'lucide-react';

const BlogCard = ({ date, month, author, category, title, image, commentCount }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
    {/* Image */}
    <div className="relative h-48 md:h-40">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-3 py-2 rounded-lg text-center">
        <div className="text-lg">{date}</div>
        <div className="text-xs uppercase">{month}</div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1 justify-between dmsans">
      {/* Author & Category */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4 text-yellow-400" />
          <span>By {author}</span>
        </div>
        <div className="flex items-center gap-1">
          <FolderOpen className="w-4 h-4 text-yellow-400" />
          <span>{category}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-lg font-semibold text-gray-900 mb-4 leading-snug">
        {title}
      </h3>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm">
        <button className="flex items-center gap-1 text-gray-700 font-medium uppercase hover:text-yellow-400 transition-colors">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1 text-gray-500">
          <MessageCircle className="w-4 h-4 text-yellow-400" />
          <span>{commentCount}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function BlogSection() {
  const blogPosts = [
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
    <div className="bg-gray-50 py-40 ">
      <div className="wrapper">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-yellow-400 font-semibold uppercase tracking-wider text-sm dmsans">
              From The Blog
            </span>
            <div className="w-12 h-0.5 bg-yellow-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 outfit">
            News & Articles
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
