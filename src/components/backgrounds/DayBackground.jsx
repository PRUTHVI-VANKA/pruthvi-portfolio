import { motion } from 'framer-motion';

export default function DayBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-[#b0cece] via-[#d4e6e6] to-white -z-10"
    >
      {/* Floating clouds */}
      <div className="absolute top-20 left-10 w-16 h-8 bg-white/40 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-32 right-20 w-20 h-10 bg-white/30 rounded-full blur-sm animate-pulse delay-1000" />
      <div className="absolute top-40 left-1/3 w-12 h-6 bg-white/35 rounded-full blur-sm animate-pulse delay-2000" />
      <div className="absolute top-60 right-1/4 w-14 h-7 bg-white/25 rounded-full blur-sm animate-pulse delay-3000" />
    </motion.div>
  );
}