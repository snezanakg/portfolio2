import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Copy, Calendar, Wrench, AlertTriangle, Lightbulb, MonitorPlay, Layers } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { projects } from '../data/projects';
import { Noise } from '../components/Noise';
import { Reveal } from '../components/Reveal';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Link copied to clipboard!');
    });
  };

  return (
    <div className="bg-background min-h-screen pb-24 relative font-sans selection:bg-primary selection:text-primary-foreground">
      <Noise />
      <Toaster position="top-right" toastOptions={{
        className: 'bg-card border border-primary text-foreground font-mono',
      }} />
      
      {/* Decorative Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 sm:px-12 max-w-[1400px] mx-auto opacity-10">
        <div className="w-px h-full bg-border"></div>
        <div className="w-px h-full bg-border hidden md:block"></div>
        <div className="w-px h-full bg-border"></div>
      </div>

      {/* Top Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="group flex items-center text-xs font-mono font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleShare}
              className="flex items-center text-[10px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest transition-all bg-card/50 px-3 py-2 rounded border border-border hover:border-primary/50"
            >
              <Copy className="mr-2 w-3.5 h-3.5" />
              Copy Link
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 pt-12 relative z-10">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  Case Study • {project.duration}
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.9] mb-8 uppercase">
                {project.title}
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl border-l-2 border-primary pl-6">
                {project.shortDescription}
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <MonitorPlay className="mr-2 w-4 h-4" />
                  View Live Site
                  <ExternalLink className="ml-2 w-3 h-3 opacity-50 group-hover:opacity-100" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground/5 transition-all"
                >
                  <Github className="mr-2 w-4 h-4" />
                  Source Code
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-12 space-y-8">
            <Reveal delay={0.3}>
              <div>
                <h3 className="text-xs font-mono uppercase text-muted-foreground mb-2 flex items-center">
                  <Calendar className="w-3 h-3 mr-2 text-primary" /> Timeline
                </h3>
                <p className="text-sm font-bold text-foreground">{project.duration}</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div>
                <h3 className="text-xs font-mono uppercase text-muted-foreground mb-2 flex items-center">
                  <Layers className="w-3 h-3 mr-2 text-primary" /> Role
                </h3>
                <p className="text-sm font-bold text-foreground">Frontend Development • UI Design</p>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div>
                <h3 className="text-xs font-mono uppercase text-muted-foreground mb-2 flex items-center">
                  <Wrench className="w-3 h-3 mr-2 text-primary" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="px-2 py-1 bg-card border border-border text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Main Image */}
        <Reveal delay={0.2} width="100%">
          <figure className="relative mb-24 group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="relative border border-border bg-card overflow-hidden">
               <ImageWithFallback
                 src={project.thumbnail}
                 alt={project.title}
                 className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.02]"
               />
            </div>
            <figcaption className="mt-4 flex items-center justify-between border-b border-border pb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Figure 1.0 — Main Interface</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary">{project.caption}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Overview */}
            <section>
              <Reveal>
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-4xl font-black text-foreground/10">01</span>
                  <h2 className="text-2xl font-bold uppercase tracking-tight">Project Overview</h2>
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-loose">
                  <p>{project.fullDescription}</p>
                </div>
              </Reveal>
            </section>

            {/* Challenge & Solution */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal>
                <div className="bg-card/30 border border-border p-8 h-full hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-6 text-orange-500">
                    <AlertTriangle className="w-6 h-6" />
                    <h3 className="text-lg font-bold uppercase tracking-wider text-foreground">The Challenge</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="bg-card/30 border border-border p-8 h-full hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-6 text-green-500">
                    <Lightbulb className="w-6 h-6" />
                    <h3 className="text-lg font-bold uppercase tracking-wider text-foreground">The Solution</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </Reveal>
            </section>

          </div>

          {/* Right Column (Key Features) */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <Reveal delay={0.3}>
                   <div className="bg-background border border-border p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 opacity-5">
                         <Layers size={80} />
                      </div>
                      <div className="flex items-center space-x-4 mb-8 relative z-10">
                        <span className="text-4xl font-black text-foreground/10">02</span>
                        <h2 className="text-lg font-bold uppercase tracking-tight">Key Implementations</h2>
                      </div>
                      
                      <ul className="space-y-6 relative z-10">
                        {project.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start group">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full border border-primary/30 text-[10px] font-mono flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {index + 1}
                            </span>
                            <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                              {improvement}
                            </span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </Reveal>

                <Reveal delay={0.5}>
                   <div className="mt-12 p-6 border-t border-border">
                      <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
                         Interested in the code?
                      </p>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                         <Github size={16} />
                         View Repository
                      </a>
                   </div>
                </Reveal>
             </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-24 py-12 border-t border-border flex justify-between items-center">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-bold uppercase tracking-widest flex items-center">
               <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Link>
        </div>

      </div>
    </div>
  );
}