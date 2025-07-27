import SectionTitle from "../components/SectionTitle"

const About = () => {
  return (
        <section id="about" className="py-16 px-6 h-screen flex flex-col justify-center items-center">
            <div>
                <SectionTitle text='About' stroke='Me'/>
                <p className="text-md sm:text-xl text-gray-400 mb-2">Developer from <span className="text-yellow-950">Kannur, Kerala, India</span></p>
                <p className="text-md sm:text-xl text-gray-500 max-w-3xl">Code is my canvas, and I paint with logic. A self-made Web Developer & Freelancer, turning caffeine into clean, efficient code. I don’t follow trends, I create them. If you’re looking for sleek designs, seamless functionality, and a touch of genius, you’re in the right place. Let’s build something legendary.</p>

                <p className="text-md sm:text-xl text-gray-400 mt-1">“Passionate Developer focused on solving real-world problems through tech.”</p>
                <p className="text-md sm:text-xl text-gray-400">“Driven by curiosity and a deep desire to create meaningful digital experiences.”</p>
            </div>
        </section>
  )
}

export default About
