const skillColors = {
  HTML: "from-purple-500 to-pink-500",
  CSS: "from-gray-500 to-blue-500",
  JavaScript: "from-yellow-200 to-yellow-400",
  React: "from-blue-300 to-blue-500",
  "Node.js": "from-green-300 to-green-500",
};

export default function SkillCard({ name, level }) {
  const barColor = skillColors[name] || "from-gray-300 to-gray-400";

  return (
    <div className="relative rounded-2xl border border-gray-300 shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-white">
      {/* 🌈 Gradient Background Bar */}
      <div
        className={`absolute top-0 left-0 h-full z-0 opacity-30 bg-gradient-to-r ${barColor} transition-all duration-500`}
        style={{ width: level }}
      />

      {/* 🧠 Content */}
      <div className="relative z-10 p-4">
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm">Skill Level: {level}</p>
      </div>
    </div>
  );
}
