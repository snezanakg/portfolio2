import React from 'react';
import { useLocation } from 'react-router-dom';
import { Github, ArrowDown, MapPin, Code2, Database, Layout, Mail, Terminal, Coffee } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Reveal } from '../components/Reveal';

export function Home() {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash === '#projects') {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const skills = [
    { name: 'React', category: 'Frontend', icon: <Code2 size={14} /> },
    { name: 'TypeScript', category: 'Language', icon: <Terminal size={14} /> },
    { name: 'Tailwind CSS', category: 'Styling', icon: <Layout size={14} /> },
    { name: 'Supabase', category: 'Backend', icon: <Database size={14} /> },
    { name: 'Figma', category: 'Design', icon: <Layout size={14} /> },
    { name: 'Git & GitHub', category: 'Version Control', icon: <Github size={14} /> },
  ];

  return (
    <div className="bg-background min-h-screen relative font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Decorative Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 sm:px-12 max-w-[1400px] mx-auto opacity-10">
        <div className="w-px h-full bg-border"></div>
        <div className="w-px h-full bg-border hidden md:block"></div>
        <div className="w-px h-full bg-border hidden lg:block"></div>
        <div className="w-px h-full bg-border"></div>
      </div>

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-12 py-6 flex justify-between items-center mix-blend-difference text-primary-foreground w-full max-w-[1400px] mx-auto pointer-events-none">
         <div className="font-bold tracking-tighter text-lg pointer-events-auto">
            SNEZANA_KRAGUJEVAC<span className="text-primary">.DEV</span>
         </div>
         <div className="hidden sm:flex items-center space-x-6 text-xs font-mono tracking-widest pointer-events-auto">
            <a href="#projects" className="hover:text-primary transition-colors uppercase">Work</a>
            <a href="#about" className="hover:text-primary transition-colors uppercase">About</a>
            <a href="mailto:sneza.kragujevac@gmail.com" className="hover:text-primary transition-colors uppercase">Contact</a>
         </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-12 pt-24 pb-12 max-w-[1400px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
             <Reveal>
              <div className="inline-flex items-center space-x-2 mb-6 border border-primary/30 px-3 py-1 rounded-full bg-primary/5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-primary uppercase tracking-widest">Available for hire</span>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.9] mb-8">
                CREATIVE <br />
                <span className="text-muted-foreground opacity-50 stroke-text">DEVELOPER</span> <br />
                <span className="text-primary italic font-serif">Portfolio</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg sm:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10 border-l-2 border-primary pl-6">
                Frontend Development Student at <span className="text-foreground font-medium">Noroff</span>. 
                Focusing on authentic digital experiences, clean code, and user-centric design.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                 <a href="#projects" className="group relative px-8 py-4 bg-foreground text-background font-bold text-sm tracking-widest uppercase overflow-hidden hover:bg-primary transition-colors">
                    <span className="relative z-10 flex items-center">
                      View Selected Works
                      <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </span>
                 </a>
                 <a href="https://github.com/snezanakg" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-foreground/20 text-foreground font-bold text-sm tracking-widest uppercase hover:bg-foreground/5 transition-colors flex items-center">
                    <Github className="mr-2 w-4 h-4" />
                    GitHub
                 </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 hidden lg:block pb-4">
             <Reveal delay={0.4}>
                <div className="space-y-6 text-right">
                   <div className="border-b border-border pb-2">
                      <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Location</p>
                      <p className="text-sm font-bold flex items-center justify-end gap-2"><MapPin size={14} className="text-primary"/> Oslo, Norway</p>
                   </div>
                   <div className="border-b border-border pb-2">
                      <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Status</p>
                      <p className="text-sm font-bold flex items-center justify-end gap-2"><Coffee size={14} className="text-primary"/> 2nd Year Student</p>
                   </div>
                   <div className="border-b border-border pb-2">
                      <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Focus</p>
                      <p className="text-sm font-bold flex items-center justify-end gap-2"><Layout size={14} className="text-primary"/> React & Tailwind</p>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center opacity-50">
           <span className="text-[10px] font-mono uppercase tracking-[0.3em] mb-2 rotate-90 origin-left translate-x-3">Scroll</span>
           <div className="w-[1px] h-24 bg-gradient-to-b from-foreground to-transparent"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 sm:py-32 border-t border-border bg-background/50 backdrop-blur-sm z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <Reveal>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter">
                SELECTED <span className="text-primary font-serif italic">WORKS</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
               <p className="max-w-sm text-muted-foreground text-sm leading-relaxed border-l border-border pl-4">
                 A collection of my most significant academic projects, demonstrating progression from vanilla JavaScript to complex React applications.
               </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {projects.map((project, index) => (
               <Reveal key={project.id} delay={index * 0.1} width="100%">
                  <ProjectCard project={project} />
               </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About / Skills Section */}
      <section id="about" className="relative py-24 sm:py-32 border-t border-border bg-card/30 z-10">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               <div>
                  <Reveal>
                     <div className="flex items-center space-x-4 mb-8">
                        <span className="h-px w-12 bg-primary"></span>
                        <span className="text-xs font-mono uppercase tracking-widest text-primary">About Me</span>
                     </div>
                     <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
                        I build things for the web with a focus on <span className="text-primary border-b-2 border-primary/20">simplicity</span> and <span className="text-primary border-b-2 border-primary/20">structure</span>.
                     </h2>
                     <div className="prose prose-invert text-muted-foreground space-y-6">
                        <p>
                           My journey into frontend development started with a curiosity about how the web works. 
                           Two years into my studies at Noroff, that curiosity has turned into a disciplined practice of building 
                           user-centric applications.
                        </p>
                        <p>
                           I believe in "learning by doing". Whether it's wrestling with Vanilla JS DOM manipulation 
                           or managing complex state in React, every bug fixed is a lesson learned. This portfolio 
                           isn't just a showcase of code; it's a documentation of my growth.
                        </p>
                     </div>

                     <div className="mt-12 flex flex-wrap gap-3">
                        <a href="mailto:sneza.kragujevac@gmail.com" className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                           <Mail size={16} />
                           <span>Get in touch</span>
                        </a>
                     </div>
                  </Reveal>
               </div>

               <div>
                  <Reveal delay={0.2}>
                     <div className="bg-background border border-border p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                           <Code2 size={120} />
                        </div>
                        <h3 className="text-xl font-bold mb-8 flex items-center">
                           <Terminal className="mr-3 text-primary" size={20} />
                           Technical Arsenal
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                           {skills.map((skill) => (
                              <div key={skill.name} className="group">
                                 <div className="flex items-center space-x-3 mb-2">
                                    <div className="text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                                       {skill.icon}
                                    </div>
                                    <span className="font-bold text-foreground">{skill.name}</span>
                                 </div>
                                 <div className="h-1 w-full bg-muted overflow-hidden">
                                    <div className="h-full bg-primary w-[0%] group-hover:w-full transition-all duration-500 ease-out"></div>
                                 </div>
                                 <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {skill.category}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Reveal>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background relative z-10">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-muted-foreground font-mono">
               &copy; {new Date().getFullYear()} Snezana Kragujevac. All rights reserved.
            </div>
            <div className="flex space-x-6">
               <a href="https://github.com/snezanakg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
               </a>
               <a href="mailto:sneza.kragujevac@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
               </a>
            </div>
         </div>
      </footer>
      
    </div>
  );
}