import React from 'react';
import { Search, Briefcase, MapPin, Clock, TrendingUp, Shield, Users, Building2, Bookmark } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://mmo.aiircdn.com/370/61153dc9468c7.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-600/90 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Discover thousands of job opportunities with the best companies in your industry
          </p>
          
          {/* Search Box */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Featured Jobs</h2>
        <p className="text-gray-600 text-center mb-12">Know your worth and find the job that qualify your life</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Software Engineer (Android), Libraries",
              company: "Segment",
              logo: "bg-emerald-500",
              location: "London, UK",
              time: "11 hours ago",
              salary: "$35k - $45k",
              tags: ["Full Time", "Private", "Urgent"]
            },
            {
              title: "Recruiting Coordinator",
              company: "Segment",
              logo: "bg-blue-500",
              location: "London, UK",
              time: "11 hours ago",
              salary: "$35k - $45k",
              tags: ["Full Time", "Private", "Urgent"]
            },
            {
              title: "Product Manager, Studio",
              company: "Segment",
              logo: "bg-pink-500",
              location: "London, UK",
              time: "11 hours ago",
              salary: "$35k - $45k",
              tags: ["Full Time", "Private", "Urgent"]
            },
            {
              title: "Senior Product Designer",
              company: "Segment",
              logo: "bg-green-500",
              location: "London, UK",
              time: "11 hours ago",
              salary: "$35k - $45k",
              tags: ["Full Time", "Private", "Urgent"]
            },
            {
              title: "Senior Full Stack Engineer, Creator Success",
              company: "Segment",
              logo: "bg-gray-900",
              location: "London, UK",
              time: "11 hours ago",
              salary: "$35k - $45k",
              tags: ["Full Time", "Private", "Urgent"]
            },
            {
              title: "Software Engineer (Android), Libraries",
              company: "Segment",
              logo: "bg-purple-500",
              location: "London, UK",
              time: "11 hours ago",
              salary: "$35k - $45k",
              tags: ["Full Time", "Private", "Urgent"]
            }
          ].map((job, index) => (
            <div key={index} className="bg-white rounded-lg p-6 relative">
              <button className="absolute top-6 right-6 text-gray-400 hover:text-blue-600">
                <Bookmark size={20} />
              </button>
              
              <div className="flex items-start gap-4">
                <div className={`h-12 w-12 rounded-lg ${job.logo} flex items-center justify-center text-white font-bold`}>
                  {job.company[0]}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 size={16} />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {job.time}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <Briefcase size={16} className="text-gray-400" />
                    <span className="text-gray-900 font-medium">{job.salary}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                      {job.tags[0]}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">
                      {job.tags[1]}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-600 text-sm">
                      {job.tags[2]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Load More Listing
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, title: 'Latest Jobs', description: 'Access to the newest job postings' },
              { icon: Shield, title: 'Verified Employers', description: 'All companies are pre-screened' },
              { icon: TrendingUp, title: 'Career Growth', description: 'Find opportunities to advance' },
              { icon: Users, title: 'Expert Support', description: '24/7 dedicated assistance' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
