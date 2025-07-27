import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle';

export default function Projects() {
    return (
        <section id="projects" className="py-16 px-6 h-screen">
            <div className='text-center mb-5'><SectionTitle text='My' stroke='Projects' /></div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}