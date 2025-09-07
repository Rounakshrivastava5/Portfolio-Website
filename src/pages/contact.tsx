export default function Contact() {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '700', letterSpacing: '-0.02em' }}>
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-300 mb-12" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400', letterSpacing: '-0.01em' }}>
            Let's work together on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="rounded-xl bg-white px-8 py-4 text-black font-semibold hover:bg-neutral-200 transition-all duration-300"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '600', letterSpacing: '-0.01em' }}
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="rounded-xl border border-white/30 px-8 py-4 text-white hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '600', letterSpacing: '-0.01em' }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }