interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col">
        <div className="flex-1">
          <h3 
            className="text-2xl font-bold mb-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 leading-tight"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '700', letterSpacing: '-0.01em' }}
          >
            {title}
          </h3>
          <p 
            className="text-neutral-300 text-base mb-8 leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400', letterSpacing: '-0.01em' }}
          >
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-auto">
          {tech.map((technology, i) => (
            <span 
              key={i} 
              className="rounded-full bg-blue-500/20 text-blue-300 px-4 py-2 text-sm font-medium border border-blue-400/30 hover:bg-blue-500/30 transition-colors duration-200"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '500', letterSpacing: '-0.01em' }}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
