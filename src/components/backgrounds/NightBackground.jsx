import { motion } from 'framer-motion';

export default function NightBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 -z-10"
    >
      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Shooting Star */}
      <motion.div
        className="absolute w-2 h-0.5 bg-gradient-to-r from-yellow-300 to-transparent rounded-full"
        initial={{ 
          top: '20%', 
          left: '-10%',
          rotate: -45,
        }}
        animate={{
          top: '80%',
          left: '110%',
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeOut',
        }}
      />

      {/* Owl in corner */}
      <div className="absolute bottom-4 right-4 text-2xl animate-bounce">
        🦉
      </div>
    </motion.div>
  );
}