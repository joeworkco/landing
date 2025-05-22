"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Comercial",
  "Marketing",
  "Finanzas",
  "Logística",
  "Compras",
  "Recursos Humanos",
];

const RotatingWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="inline-block text-primary" // Added text-primary for blue color as in image
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
};

export default RotatingWords;
