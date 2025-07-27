import { motion } from "motion/react";

const textVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3, // Stagger each word
      duration: 0.5,
      type: "spring",
      stiffness: 500,
    },
  }),
};

const TitleCard = ({words}) => {
  return (
    <>
      <h1 className="overflow-hidden relative text-4xl md:text-6xl font-bold flex gap-2">
        {words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </>
  );
};

export default TitleCard;
