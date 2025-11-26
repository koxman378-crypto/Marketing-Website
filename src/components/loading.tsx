import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [allowInteraction, setAllowInteraction] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const interactionTimer = setTimeout(() => setAllowInteraction(true), 1800);
    const hideTimer = setTimeout(() => setIsVisible(false), 2500);
    return () => {
      clearTimeout(interactionTimer);
      clearTimeout(hideTimer);
    };
  }, [isMounted]);

  if (!isMounted || !isVisible) return null;

  return (
    <motion.div
      className={`fixed inset-0 z-9999 w-screen h-screen bg-[#0C243E] flex items-center justify-center ${
        allowInteraction ? "pointer-events-none" : ""
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        className="playfair-display text-[50px] font-extrabold text-white"
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          times: [0, 0.6, 1],
        }}
      >
        MM Social
      </motion.div>
    </motion.div>
  );
};

export default Loading;
