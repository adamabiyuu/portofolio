import type { ReactNode } from "react";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
}

const Reveal = ({ children, delay = 0, duration = 0.6, direction = "up", distance = 40 }: RevealProps) => {
  const initial = {
    opacity: 0,
    x: 0,
    y: 0,
  };

  switch (direction) {
    case "up":
      initial.y = distance;
      break;

    case "down":
      initial.y = -distance;
      break;

    case "left":
      initial.x = distance;
      break;

    case "right":
      initial.x = -distance;
      break;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
