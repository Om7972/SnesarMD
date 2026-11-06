import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={cn(
            'fixed bottom-6 right-6 z-40 flex items-center justify-center',
            'w-11 h-11 rounded-xl',
            'bg-navy text-white shadow-card hover:shadow-card-hover',
            'hover:bg-electric transition-colors duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2'
          )}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
