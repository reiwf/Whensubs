import { MotionProps } from 'framer-motion';

export interface OrbConfig {
  className: string;
  animate: MotionProps['animate'];
  transition: MotionProps['transition'];
  style?: React.CSSProperties;
}

const getRandomAnimation = () => ({
  x: Array.from({ length: 3 }, () => Math.random() * 200 * (Math.random() > 0.5 ? 1 : -1)),
  y: Array.from({ length: 3 }, () => Math.random() * 300 * (Math.random() > 0.5 ? 1 : -1)),
  scale: [1, Math.random() * 0.5 + 1, 1],
  rotate: [0, Math.random() * 360, 0],
});

export const orbConfigs: OrbConfig[] = [
  
  {
    className: "absolute right-[10%] top-[15%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/30 blur-[60px]",
    animate: getRandomAnimation(),
    transition: {
      duration: Math.random() * 3 + 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.2,
    },
  },
  {
    className: "absolute left-[5%] bottom-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-500/40 blur-[70px]",
    animate: getRandomAnimation(),
    transition: {
      duration: Math.random() * 3 + 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.4,
    },
  },
  {
    className: "absolute left-[15%] top-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-bl from-indigo-500/35 to-violet-500/30 blur-[65px]",
    animate: getRandomAnimation(),
    transition: {
      duration: Math.random() * 3 + 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.6,
    },
  },
  {
    className: "absolute right-[5%] bottom-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-rose-500/30 to-orange-500/40 blur-[75px]",
    animate: getRandomAnimation(),
    transition: {
      duration: Math.random() * 3 + 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.8,
    },
  }, 
  {    
    className:
      "absolute left-[40%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-teal-500/30 to-green-500/40 blur-[75px]",
    animate: getRandomAnimation(),      
    transition: {
      duration: Math.random() * 3 + 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.4,
    },
  },
];

