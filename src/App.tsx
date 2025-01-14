import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Code, GraduationCap, User } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
      tags: ["HTML", "CSS", "JavaScript", "API"]
    },
    {
      title: "Task Manager",
      description: "A simple task management application with CRUD operations",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "LocalStorage", "Tailwind"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Praneeth Polati
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Aspiring Full Stack Developer
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <a href="https://github.com/PraneethPolati" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/praneethpolati/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:polatipraneeth@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+918688118148" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Phone size={24} />
              </a>
            </div>
            <a
              href="#about"
              className="animate-bounce inline-block"
            >
              <ChevronDown size={32} className="text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <Code className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p className="text-gray-600">Proficient in HTML, CSS, JavaScript, and React</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Fresh graduate with a passion for web development</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <User className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
              <p className="text-gray-600">Quick learner with strong problem-solving abilities</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Personal Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="text-blue-600" size={24} />
                <a href="mailto:polatipraneeth@gmail.com" className="text-gray-700 hover:text-blue-600">
                  polatipraneeth@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Phone className="text-blue-600" size={24} />
                <a href="tel:+918688118148" className="text-gray-700 hover:text-blue-600">
                  +91 8688118148
                </a>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                <a href="https://github.com/PraneethPolati" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/praneethpolati/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 Praneeth Polati. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/PraneethPolati" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/praneethpolati/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:polatipraneeth@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;