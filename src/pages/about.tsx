export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '700', letterSpacing: '-0.02em' }}>
            About Me
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400', letterSpacing: '-0.01em' }}>
            I'm a passionate frontend developer with 3+ years of experience building modern web applications. 
            I love creating beautiful, responsive user interfaces and solving complex problems with clean, efficient code.
          </p>
        </div>
      </div>
    );
  }