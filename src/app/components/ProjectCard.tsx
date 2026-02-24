import { Link } from 'react-router-dom';
import { ArrowUpRight, Folder, GitBranch } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';

export function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Link to={`/project/${project.id}`} className="block group relative h-full">
      <div className="h-full bg-card border border-border/50 p-1 transition-all duration-300 group-hover:border-primary group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0px_0px_var(--color-primary)]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-background/50 mb-1">
           <div className="flex items-center space-x-2">
              <Folder size={12} className="text-primary" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground line-clamp-1">
                 {project.id}
              </span>
           </div>
           <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full border border-border bg-muted group-hover:bg-green-500 transition-colors"></span>
           </div>
        </div>

        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border grayscale-[30%] group-hover:grayscale-0 transition-all duration-500">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay"></div>
          <ImageWithFallback
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute bottom-0 right-0 bg-background/90 backdrop-blur border-t border-l border-border px-3 py-1 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
             <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary flex items-center">
                View Case Study <ArrowUpRight className="ml-1 w-3 h-3" />
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col h-[180px]"> {/* Fixed height for consistency */}
          <div className="flex justify-between items-start mb-3">
             <span className="text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/20 px-2 py-0.5 rounded bg-primary/5">
                {project.duration}
             </span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3 mb-4">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-4 border-t border-border border-dashed flex items-center justify-between">
             <div className="flex gap-2">
                {project.tools.slice(0, 3).map(tool => (
                   <span key={tool} className="text-[10px] text-muted-foreground/70 font-mono uppercase">
                      {tool}
                   </span>
                ))}
                {project.tools.length > 3 && (
                   <span className="text-[10px] text-muted-foreground/70 font-mono uppercase">+</span>
                )}
             </div>
             <GitBranch size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
}