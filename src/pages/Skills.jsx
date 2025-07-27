import { skills } from '../data/skills'
import SkillCard from '../components/SkillCard'
import SectionTitle from '../components/SectionTitle';

export default function Skills() {
    return (
        <section id="projects" className="py-16 px-6 min-h-screen">
            <div className='text-center mb-5'><SectionTitle text='My' stroke='Skills' /></div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}