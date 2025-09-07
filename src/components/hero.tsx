import AuroraBackground from "./react_bits_styles/auroraBackground";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground 
        className="absolute inset-0 w-full h-full"
        colorStops={['#1e3a8a', '#3b82f6', '#1e40af']}
        amplitude={0.8}
        blend={0.6}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '700', letterSpacing: '-0.02em' }}>
            Hi, I'm Rounak 👋
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400', letterSpacing: '-0.01em' }}>
            Frontend Developer (Angular + React) with 3+ years experience.
            Skilled in building scalable UIs, REST APIs with Golang, and deploying on AWS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden rounded-2xl bg-white px-8 py-4 text-black font-semibold transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 active:scale-[0.98]"
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', 
                fontWeight: '600', 
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              className="group relative overflow-hidden rounded-2xl border-2 border-white/30 bg-transparent px-8 py-4 text-white font-semibold transition-all duration-300 ease-out transform hover:scale-[1.02] hover:border-white/50 hover:bg-white/5 hover:shadow-2xl hover:shadow-white/10 active:scale-[0.98] backdrop-blur-sm"
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', 
                fontWeight: '600', 
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.05)'
              }}
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
