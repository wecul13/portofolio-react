/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Mail,
  MessageSquare,
  ChevronRight,
  Terminal,
  Database,
  Cpu,
  X,
  ArrowRight,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  FileText
} from 'lucide-react';
import { projects, experiences, skills, Project, Experience, Skill, certificates, Certificate } from './cms-data';

// --- Types ---
interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  key?: string | number;
}

interface ExperienceItemProps {
  exp: Experience;
  key?: string | number;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter">SANJAYA.</a>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-brand-secondary transition-colors">About</a>
          <a href="#projects" className="hover:text-brand-secondary transition-colors">Projects</a>
          <a href="#experience" className="hover:text-brand-secondary transition-colors">Experience</a>
          <a href="#contact" className="hover:text-brand-secondary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 md:mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-brand-secondary text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <motion.div 
    layoutId={`project-${project.id}`}
    onClick={onClick}
    className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">{project.category}</span>
        <span className="text-xs font-medium text-gray-400">{project.year}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3 leading-tight">{project.title}</h3>
      <p className="text-brand-secondary text-sm line-clamp-2 mb-6">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-2">
        {project.tools.slice(0, 3).map(tool => (
          <span key={tool} className="text-[10px] px-2 py-1 bg-gray-50 border border-gray-100 rounded text-brand-secondary uppercase font-semibold">
            {tool}
          </span>
        ))}
        {project.tools.length > 3 && (
          <span className="text-[10px] px-2 py-1 bg-gray-50 border border-gray-100 rounded text-brand-secondary uppercase font-semibold">
            +{project.tools.length - 3}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const SkillCategory = ({ title, icon: Icon, items }: { title: string; icon: any; items: Skill[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/40 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2.5 bg-white text-black rounded-xl shadow-lg shadow-white/5">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2.5">
      {items.map(skill => (
        <div 
          key={skill.id} 
          className="flex flex-col px-5 py-4 bg-white rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all cursor-default grow min-w-[120px]"
        >
          <span className="text-sm font-bold text-black leading-none">{skill.name}</span>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex gap-0.5">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full ${
                    (skill.level === 'Beginner' && i === 1) || 
                    (skill.level === 'Intermediate' && i <= 2) || 
                    (skill.level === 'Advanced') 
                    ? 'bg-black' : 'bg-gray-200'
                  }`} 
                />
              ))}
            </div>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black">{skill.level}</span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const ExperienceItem = ({ exp }: ExperienceItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 pb-12 last:pb-0 border-l border-gray-100 ml-4"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-white shadow-sm" />
    <div className="pt-0">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h3 className="text-2xl font-bold">{exp.role}</h3>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wider">{exp.type}</span>
      </div>
      <div className="flex flex-wrap gap-4 text-brand-secondary text-sm mb-6 font-medium">
        <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.company}</span>
        <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.duration}</span>
      </div>
      <p className="text-brand-secondary mb-4 max-w-2xl leading-relaxed">{exp.description}</p>
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Impact</h4>
        <p className="text-sm font-medium border-l-2 border-black pl-4 py-1 italic">{exp.impact}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {exp.skills.map(skill => (
          <span key={skill} className="text-xs px-3 py-1.5 bg-white border border-gray-100 rounded-lg text-brand-secondary shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter leading-[0.95] mb-8">
                INFORMATICS<br />
                <span className="text-transparent border-t-brand-primary" style={{ WebkitTextStroke: '1px black' }}>ENGINEER.</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row md:items-end gap-8"
            >
              <p className="text-xl md:text-2xl text-brand-secondary font-medium max-w-xl leading-snug">
                I'm Sanjaya, focused on building information systems and simple data analysis to support better decision-making.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
                >
                  View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading subtitle="Professional Background">About Me</SectionHeading>
              <div className="space-y-6 text-lg text-brand-secondary leading-relaxed">
                <p>
                  A Bachelor’s degree graduate in Informatics Engineering from Universitas Komputer Indonesia with a strong interest in system development and data processing to solve real-world problems.
                </p>
                <div className="p-8 bg-black text-white rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">Career Goal</h4>
                  <p className="text-xl font-medium leading-tight">
                    Seeking a full-time role in IT, especially in Information Systems or Data-related roles where I can apply my analytical skills and development knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative group">
                 <img 
                    src="/attachments/pict.jpeg" 
                    alt="Sanjaya" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
              </div>
              <div className="aspect-square bg-black rounded-3xl flex items-center justify-center p-12">
                <Terminal size={64} className="text-white opacity-20" />
              </div>
              <div className="col-span-2 p-8 border border-gray-200 rounded-3xl bg-white space-y-4">
                <h4 className="font-bold flex items-center gap-2 tracking-tight">
                  <Database size={18} /> Education
                </h4>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold">Universitas Komputer Indonesia</p>
                  <p className="text-sm text-brand-secondary">Bachelor of Informatics Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Selected case studies and developments">Featured Work</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Capabilities</h2>
            <p className="text-gray-400 text-lg mb-16 italic">"Turning complex data into organized information flows."</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <SkillCategory
              title="Technical"
              icon={Cpu}
              items={skills.filter(s => s.category === 'Technical')}
            />
            <SkillCategory
              title="Tools"
              icon={Terminal}
              items={skills.filter(s => s.category === 'Tools')}
            />
            <SkillCategory
              title="Domain"
              icon={Database}
              items={skills.filter(s => s.category === 'Domain')}
            />
          </div>

          {/* Certificates Section */}
          <div className="mt-16 pt-16 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map(cert => (
                <motion.a
                  key={cert.id}
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                    <FileText size={24} className="text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-bold text-sm group-hover:scale-105 transition-transform">
                    Download <ExternalLink size={16} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <SectionHeading>History</SectionHeading>
              <div className="sticky top-32 p-8 bg-gray-50 rounded-3xl">
                <p className="text-brand-secondary font-medium mb-6">Currently open for new opportunities and collaborations in information systems.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-bold uppercase tracking-wider">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-0">
                {experiences.map(exp => (
                  <ExperienceItem key={exp.id} exp={exp} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-[3rem] p-12 md:p-24 shadow-2xl text-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50" />
            
            <div className="relative z-10">
              <SectionHeading subtitle="Let's build something efficient together">Get In Touch</SectionHeading>
              <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch pt-8">
                <a 
                  href="mailto:Sanjayawecul78@gmail.com" 
                  className="flex-1 p-8 bg-black text-white rounded-3xl hover:scale-105 transition-all text-left flex flex-col justify-between group"
                >
                  <Mail className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity" size={32} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Email Me</p>
                    <p className="text-lg md:text-xl font-bold break-all">Sanjayawecul78@gmail.com</p>
                  </div>
                </a>
                <a 
                  href="https://wa.me/081282302060" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 p-8 border border-gray-200 rounded-3xl hover:border-black transition-all text-left flex flex-col justify-between group"
                >
                  <MessageSquare className="mb-8 text-black opacity-20 group-hover:opacity-100 transition-opacity" size={32} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-secondary mb-2">WhatsApp</p>
                    <p className="text-xl md:text-2xl font-bold">0812 8230 2060</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-16 flex justify-center gap-12 text-brand-secondary font-bold text-sm tracking-widest uppercase">
                <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-black transition-colors">GitHub</a>
                <a href="https://www.instagram.com/sanjaya_wecul/" className="hover:text-black transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 italic">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-secondary">
          <p>© {new Date().getFullYear()} Sanjaya. Built with React & Tailwind.</p>
          <p>Informatics Engineering — UNIKOM</p>
        </div>
      </footer>

      {/* Modal - Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-full overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/90 rounded-full text-black hover:bg-black hover:text-white transition-all shadow-xl"
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full relative overflow-hidden">
                  <img 
                    src={selectedProject.thumbnail} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                </div>
                <div className="p-8 md:p-16">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">{selectedProject.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-xs font-medium text-brand-secondary">{selectedProject.year}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="text-xs px-3 py-1 bg-gray-100 rounded-lg font-bold text-brand-secondary uppercase tracking-wider">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-12">
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">The Problem</h3>
                      <p className="text-brand-secondary leading-relaxed text-lg">{selectedProject.problem}</p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">The Process</h3>
                      <p className="text-brand-secondary leading-relaxed text-lg">{selectedProject.process}</p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-3xl space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">The Result</h3>
                      <p className="text-black font-bold leading-relaxed text-xl">{selectedProject.result}</p>
                    </div>
                  </div>
                  
                  <div className="mt-16 text-center">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-12 py-5 bg-black text-white rounded-full font-bold hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3"
                      >
                        View Demo <ExternalLink size={20} />
                      </a>
                    )}
                    {selectedProject.certificate && (
                      <a
                        href={selectedProject.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-12 py-5 bg-gray-100 text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 hover:bg-gray-200"
                      >
                        View Sertifikat <FileText size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
