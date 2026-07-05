"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Terminal, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaXTwitter, FaDiscord } from "react-icons/fa6";
import Link from "next/link";
import { ProfileCard } from "@/components/ui/profile-card";
import { ProjectsGrid } from "@/components/ui/projects-grid";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playBackgroundVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
    } catch (error) {
      console.warn("Background video autoplay was blocked by the browser:", error);
    }
  };

  useEffect(() => {
    const handleEnableAudio = () => {
      void playBackgroundVideo();
    };

    window.addEventListener("enable-audio", handleEnableAudio);
    void playBackgroundVideo();

    return () => {
      window.removeEventListener("enable-audio", handleEnableAudio);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] justify-center py-12 md:py-24 relative">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={false}
        playsInline
        preload="auto"
        onCanPlay={() => {
          void playBackgroundVideo();
        }}
        onLoadedData={() => {
          void playBackgroundVideo();
        }}
        className="fixed inset-0 w-full h-full object-cover z-[1] opacity-30 pointer-events-none"
      >
        <source src="/videos/background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Section */}
      <section className="relative z-[2] pointer-events-none w-full max-w-5xl mx-auto space-y-12 min-h-[80vh] flex flex-col justify-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4" />
            <span>AI Agent Builder & Vibe Coder</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 max-w-4xl leading-tight">
            Building AI intelligence and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">digital experiences</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Developer and Statistical Data Science Student crafting fast, premium web applications with an emphasis on AI-driven workflows and problem Solving.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 pointer-events-auto">
          <Link href="#projects" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="https://github.com/BuiltByDennis" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 glass-panel">
            <Terminal className="w-4 h-4" />
            View GitHub
          </Link>
        </div>

        {/* Stats / Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700 pointer-events-auto">
          {[
            { label: "AI Agents Built", value: "3" },
            { label: "Years Vibe Coding", value: "1" },
            { label: "Currently Learning", value: "Azura AI" },
            { label: "Data Science Projects", value: "2" }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl glass-panel group hover:bg-white/5 transition-colors border-t border-l border-white/10">
              <p className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
              <p className="text-sm font-medium text-foreground/60 group-hover:text-primary transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative z-10 w-full max-w-6xl mx-auto mt-32 space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-1000">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            {/* Replace /profile.jpg with the actual image uploaded */}
            <ProfileCard
              imageSrc="/profile.jpg"
              name="Dennis Nyaaba"
              role="AI Engineer & Developer"
            />
          </div>

          <div className="lg:col-span-8 space-y-8 glass-panel p-8 md:p-12 rounded-3xl border-t border-l border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-1000"></div>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              I am a Full-Stack Developer, AI Automation Engineer, and Data Science Student with a deep fascination for AI Agents and Large Language Models (LLMs). My academic focus anchors my work in statistical integrity, while my engineering toolkit allows me to bring those concepts to life in production.
            </p>

            <div className="space-y-6 mt-8">
              <h3 className="text-2xl font-semibold text-white">What I Focus On</h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_10px_rgba(124,58,237,0.5)]"></div>
                  <p className="text-foreground/70 leading-relaxed">
                    <strong className="text-white font-medium">Agentic Workflows:</strong> Designing autonomous multi-agent systems with strict deterministic boundaries and safety guardrails.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                  <p className="text-foreground/70 leading-relaxed">
                    <strong className="text-white font-medium">Data Infrastructure:</strong> Architecting federated query engines, secure databases, and complex data pipelines.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_10px_rgba(124,58,237,0.5)]"></div>
                  <p className="text-foreground/70 leading-relaxed">
                    <strong className="text-white font-medium">High-Velocity Development:</strong> Utilizing AI-assisted orchestration to drastically collapse the time between abstract concept and live deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors">
                <h4 className="text-primary font-semibold tracking-wide uppercase text-sm">How I Build</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Deep technical understanding paired with rapid AI-assisted orchestration ("vibe coding") to ship robust products fast.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 transition-colors">
                <h4 className="text-accent font-semibold tracking-wide uppercase text-sm">Current Focus</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Completing my B.Sc. in Data Science while building multi-lingual safety frameworks and agentic workflows.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-foreground/90 font-medium italic text-lg text-center">
                &quot;Whether I am optimizing data pipelines or building end-to-end full-stack platforms, my goal is to build intelligent software that solves tangible operational bottlenecks.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative z-10 w-full max-w-7xl mx-auto mt-32 mb-24 space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-1000">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-foreground/60 max-w-2xl mx-auto mt-4">
            A selection of my recent work in multi-agent systems, statistical AI, and scalable infrastructure.
          </p>
        </div>

        <ProjectsGrid />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 w-full max-w-5xl mx-auto mt-16 mb-24 space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-1000">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connect</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-foreground/60 max-w-2xl mx-auto mt-4">
            Available for new opportunities and collaborations. Reach out via any of the platforms below!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/+233594948955", color: "hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10" },
            { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/dennistjay/", color: "hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10" },
            { name: "Gmail", icon: Mail, href: "mailto:dennyaaba@gmail.com", color: "hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:bg-[#EA4335]/10" },
            { name: "X (Twitter)", icon: FaXTwitter, href: "https://x.com/_Dennyspark", color: "hover:text-white hover:border-white/50 hover:bg-white/10" },
            { name: "Discord", icon: FaDiscord, href: "#", color: "hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className={`flex flex-col items-center gap-3 p-6 w-32 rounded-2xl glass-panel border border-white/5 transition-all duration-300 group ${social.color}`}
            >
              <social.icon className="w-8 h-8 text-foreground/50 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-foreground/70 group-hover:text-current">{social.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
