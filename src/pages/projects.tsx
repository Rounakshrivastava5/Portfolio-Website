import ProjectCard from "../components/misc_Comp/project_card";
import { projects } from "../components/data/projects_data";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '700', letterSpacing: '-0.02em' }}>
            My Projects
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '400', letterSpacing: '-0.01em' }}>
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
