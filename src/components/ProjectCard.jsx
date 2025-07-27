export default function ProjectCard({ title, description, link }) {
  return (
    <div className="rounded-2xl hover:shadow-lg border border-gray-400 overflow-hidden hover:scale-[1.02] transition">
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <a href={link} target="_blank" className="text-blue-400 mt-2 inline-block">View Project →</a>
      </div>
    </div>
  );
}
