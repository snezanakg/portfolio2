import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import { Noise } from '../components/Noise';

export function NotFound() {
  return (
    <div className="min-h-screen bg-background relative flex items-center justify-center p-4 overflow-hidden">
      <Noise />
      
      {/* Decorative Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 sm:px-12 max-w-[1400px] mx-auto opacity-10">
        <div className="w-px h-full bg-border"></div>
        <div className="w-px h-full bg-border hidden md:block"></div>
        <div className="w-px h-full bg-border"></div>
      </div>

      <div className="max-w-md w-full text-center relative z-10">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 border border-primary/30 rounded-full bg-primary/5">
          <FileQuestion className="w-10 h-10 text-primary animate-pulse" />
        </div>
        
        <h1 className="text-8xl font-black text-foreground tracking-tighter mb-4 opacity-20 select-none">
          404
        </h1>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
           <p className="text-lg font-mono font-bold text-primary uppercase tracking-widest bg-background/80 backdrop-blur px-4 py-1 inline-block border border-primary/30">
              Page Not Found
           </p>
        </div>

        <p className="text-sm font-mono text-muted-foreground mb-8 mt-8 max-w-xs mx-auto leading-relaxed border-l border-primary/30 pl-4 text-left">
          Error: The requested resource could not be located on this server. Please check the URL or return to the main index.
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Index
        </Link>
      </div>
    </div>
  );
}