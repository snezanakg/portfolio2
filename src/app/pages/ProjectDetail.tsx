import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Copy,
  Calendar,
  Wrench,
  AlertTriangle,
  Lightbulb,
  MonitorPlay,
  Layers,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { projects } from "../data/projects";
import { Noise } from "../components/Noise";
import { Reveal } from "../components/Reveal";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Link copied to clipboard!");
    });
  };

  return (
    <div className="bg-background min-h-screen pb-24 relative font-sans">
      <Noise />
      <Toaster position="top-right" />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center text-sm font-semibold hover:text-primary transition"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Portfolio
          </Link>

          <button
            onClick={handleShare}
            className="flex items-center text-sm font-semibold hover:text-primary transition"
          >
            <Copy className="mr-2 w-4 h-4" />
            Copy Link
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-16">

        {/* Title */}
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            {project.shortDescription}
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-foreground text-background font-semibold hover:bg-primary transition"
            >
              <MonitorPlay className="mr-2 w-4 h-4" />
              View Live Site
              <ExternalLink className="ml-2 w-3 h-3" />
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-foreground/30 font-semibold hover:bg-foreground/10 transition"
            >
              <Github className="mr-2 w-4 h-4" />
              View Repository
            </a>
          </div>
        </Reveal>

        {/* Main Image */}
        <Reveal delay={0.3}>
          <figure className="mb-16">
            <img
              src={project.articleImage}
              alt={project.title}
              className="w-full rounded-md border border-border"
            />
            <figcaption className="text-sm text-muted-foreground mt-4">
              {project.caption}
            </figcaption>
          </figure>
        </Reveal>

        {/* Overview */}
        <Reveal>
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Layers className="mr-2 w-5 h-5 text-primary" />
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </section>
        </Reveal>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Reveal>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="mr-2 w-5 h-5 text-orange-500" />
                The Challenge
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Lightbulb className="mr-2 w-5 h-5 text-green-500" />
                The Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Improvements */}
        <Reveal>
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Wrench className="mr-2 w-5 h-5 text-primary" />
              Key Improvements
            </h2>
            <ul className="space-y-4">
              {project.improvements.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  • {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Tech Stack */}
        <Reveal delay={0.2}>
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="mr-2 w-5 h-5 text-primary" />
              Timeline & Tech Stack
            </h2>

            <p className="mb-4 text-muted-foreground">
              <strong>Duration:</strong> {project.duration}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 border border-border text-sm rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <Link
            to="/"
            className="flex items-center text-sm font-semibold hover:text-primary transition"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}