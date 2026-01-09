import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const BlogIndex: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tax Guides & Insights | UK Tax Optimizer";
  }, []);

  const posts = [
    {
      id: 'uk-60-percent-tax-trap-calculator-guide',
      title: "The UK's Hidden 60% Tax Rate: Are You Losing Thousands?",
      excerpt: "If you earn between £100k and £125k, you might be paying a 60% effective tax rate. Discover how the 'Tax Trap' works and how to legally avoid it using pension contributions.",
      date: "April 2024",
      readTime: "12 min read",
      category: "Tax Planning",
      path: "/blog/uk-60-percent-tax-trap-calculator-guide",
      imageColor: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Tax Guides & Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert analysis, tutorials, and guides to help you navigate the complexities of the UK tax system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={post.path}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1"
            >
              {/* Thumbnail Placeholder */}
              <div className={`h-48 ${post.imageColor} relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 text-white">
                    <span className="inline-block px-2 py-1 rounded bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2 border border-white/30">
                      {post.category}
                    </span>
                 </div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#667eea] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                   <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                   </div>
                   <span className="text-[#667eea] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                     Read <ArrowRight size={12} />
                   </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogIndex;