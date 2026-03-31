'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const items = [
  'Sem custo inicial',
  'Entrega prática já na primeira conversa',
  'Para empresas com operação ativa',
];

const DURATION = 3500;

export function TickerSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-bg-secondary border-y border-white/5 py-3 px-6 flex items-center justify-center gap-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="font-body text-sm font-medium text-white/80 text-center"
        >
          <span className="text-primary mr-2">✓</span>
          {items[index]}
        </motion.span>
      </AnimatePresence>

      <div className="flex gap-1.5 shrink-0">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? 'w-4 bg-primary' : 'w-1 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
