import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import myImage from "./Pruthvi Rathod image.jpg";
import { 
  Github, 
  Linkedin, 
  Mail, 
  
  Download,
  ExternalLink,
  Code2,
  Database,

  Brain,
  Server,
  Library,
  Bot,

} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Python', level: 90, icon: <Code2 className="w-5 h-5" /> },
    { name: 'JAVA', level: 70, icon: <Code2 className="w-5 h-5" /> },
    { name: 'JavaScript', level: 60, icon: <Code2 className="w-5 h-5" /> },
    { name: 'Django', level: 85, icon: <Server className="w-5 h-5" /> },
    { name: 'React', level: 80, icon: <Code2 className="w-5 h-5" /> },
    { name: 'Machine Learning', level: 75, icon: <Brain className="w-5 h-5" /> },
    { name: "Generative AI", level: 85, icon: <Brain className="w-5 h-5" /> },
    { name: 'FastAPI', level: 85, icon: <Server className="w-5 h-5" /> },
    { name: 'MySQL', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: "LangChain", level: 80, icon: <Library className="w-5 h-5" /> },
    { name: "Hugging Face", level: 85, icon: <Bot className="w-5 h-5" /> },
    { name: "OpenAI API", level: 90, icon: <Brain className="w-5 h-5" /> },
    { name: 'ChromaDB', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Pinecone', level: 80, icon: <Database className="w-5 h-5" /> },
  ];
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // Update the right field
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_vwzj7dh",
        "template_pp2r2mh",
        formData,
        "VRxZI3MTYu83nsyez"
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const projects = [
    {
      title: 'Sign Language Recognition System (Using AI)',
      description: 'Capture hand movements using a webcam and translate them into text in real-time using Deep Learning (CNNs, LSTMs).',
      tech: ['Python', 'TensorFlow', 'Flask',"CNN",'Deep Learning'],
      github: 'https://github.com/Ramanand14/SIH-2022',
      demo: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with Django and React, featuring real-time inventory management.',
      tech: ['Django', 'React', 'PostgreSQL'],
      github: 'https://github.com/Rathodpruthvi45/Ecommerce',
      demo: '#'
    },
    {
      title: 'Health-Care AI Web App',
      description: 'Created a web application for predicting patient health outcomes using machine learning and AI.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask','TensorFlow','Machine Learning',"Deep Learning"],
      github: 'https://github.com/iamKed/Health-Care',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              PR
            </span>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="container mx-auto px-6 relative">
          <div className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Pruthvi Rathod</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Generative AI Developer & Python Full-Stack Engineer
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2 transition-colors">
                <Download className="w-5 h-5" /> Download Resume
              </button>
              <button className="px-6 py-3 border border-purple-500 hover:bg-purple-500/20 rounded-lg transition-colors">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={myImage}
                alt="Pruthvi Rathod"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
                I'm a passionate software engineer specializing in Python Full-Stack development and Generative AI Developer. 
                With expertise in Django, React, and FastAPI, I create robust and scalable applications that solve real-world problems.
              </p>
              <p className="text-gray-300">
                My journey in tech has been driven by curiosity and a desire to build innovative solutions. 
                I'm particularly interested in AI/ML applications and creating efficient web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all group">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a href={project.demo} className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <div className="mb-6">
                <h4 className="font-medium">Junior Software Developer</h4>
                <span className="text-gray-300">May 2024 - Aug 2024</span> 
                <p className="text-purple-400">Tech Active Solutions (India) Private Limited</p>
                
                <p className="text-gray-400">Built RESTful APIs with Django, optimized databases, integrated third-party APIs, implemented secure authentication, collaborated on frontend integration, and optimized backend performance.</p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Introduction to Machine Learning </p>
                  <p className="text-gray-400">IIT Madras (NPTEL)</p>
                </li>
                 <li>
                  <p className="font-medium">Programming In Java </p>
                  <p className="text-gray-400">IIT Kharagpur (NPTEL)</p>
                </li>
                 <li>
                  <p className="font-medium">Data Base Management System </p>
                  <p className="text-gray-400">IIT Kharagpur (NPTEL)</p>
                </li>
                 <li>
                  <p className="font-medium">Programming, Data Structures And Algorithms Using Python </p>
                  <p className="text-gray-400">Chennai Mathematical Institute (NPTEL)</p>
                </li>
                <li>
                  <p className="font-medium">Problem Solving Through Programming In C </p>
                  <p className="text-gray-400">Chennai Mathematical Institute (NPTEL)</p>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input 
          type="text"
          name="name"  // ✅ Added name attribute
          value={formData.name} 
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input 
          type="email"
          name="email"  // ✅ Added name attribute
          value={formData.email} 
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea 
          rows={4}
          name="message"  // ✅ Added name attribute
          value={formData.message} 
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
        />
      </div>
      <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
        Send Message
      </button>
    </form>
            </div>
            <div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex flex-col gap-4">
                  <a href="https://www.linkedin.com/in/pruthvi-rathod-016952167/" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors">
                    <Linkedin className="w-6 h-6" /> LinkedIn
                  </a>
                  <a href="https://github.com/Rathodpruthvi45" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors">
                    <Github className="w-6 h-6" /> GitHub
                  </a>
                 
                  <a href="mailto:pruthvirathod4545@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail className="w-6 h-6" /> pruthvirathod4545@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          © 2025 Pruthvi Rathod. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;