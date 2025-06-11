import { motion } from "framer-motion";

const text = "WilliamANeild.com";

const IntroAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-4xl font-bold"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default IntroAnimation;