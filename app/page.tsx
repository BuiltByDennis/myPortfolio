import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] justify-center py-12 md:py-24">
      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-5xl mx-auto space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4" />
            <span>AI Agent Builder & Vibe Coder</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 max-w-4xl leading-tight">
            Building spatial intelligence and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">digital experiences</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Developer and Statistical Data Science student crafting fast, premium web applications with an emphasis on AI-driven workflows and immersive UI.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 glass-panel">
            <Terminal className="w-4 h-4" />
            View GitHub
          </button>
        </div>

        {/* Stats / Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          {[
            { label: "AI Agents Built", value: "12+" },
            { label: "Years Vibe Coding", value: "3" },
            { label: "Models Trained", value: "24" },
            { label: "Data Science Projects", value: "8" }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl glass-panel group hover:bg-white/5 transition-colors border-t border-l border-white/10">
              <p className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
              <p className="text-sm font-medium text-foreground/60 group-hover:text-primary transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
