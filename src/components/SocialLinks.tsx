import { Github, X, Linkedin, Instagram, Send } from "lucide-react";

const SocialLinks = () => {
  const socialProfiles = [
    {
      name: "GitHub",
      source: "https://github.com/Me-amruth",
      icon: <Github />,
    },
    { name: "Twitter (X)", source: "https://x.com/amruth_X", icon: <X /> },
    {
      name: "LinkedIn",
      source: "https://www.linkedin.com/in/amruth-krishna-982732321",
      icon: <Linkedin />,
    },
    {
      name: "Instagram",
      source: "https://instagram.com/_amrut.h/",
      icon: <Instagram />,
    },
    { name: "Telegram", source: "https://t.me/meamruth/", icon: <Send /> },
  ];

  return (
    <div className="flex gap-4 my-3 justify-center">
      {socialProfiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.source}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profile.name}
          className="text-gray-700 hover:text-black transition-transform duration-300 hover:scale-110"
        >
          {profile.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
