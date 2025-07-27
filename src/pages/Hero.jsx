import FadeIn from "../components/FadeIn";
import TitleCard from "../components/Title";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const words = ["I'm", "Amruth", "Krishna"];

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-4"
    >

      {/* 🧠 Main Content */}
      <div className="z-10">
        <TitleCard words={words} />

        <FadeIn>
          <h4 className="text-sm md:text-xl">
            Full Stack Developer | MERN Stack | Problem Solver
          </h4>
        </FadeIn>

        <p className="mt-2 text-gray-600 text-sm italic">
          "Crafting clean code & building things that matter."
        </p>

        <a
          href="#projects"
          className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black 
                    hover:bg-black hover:text-white transition duration-300"
        >
          Explore Projects <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

