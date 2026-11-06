import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {/* Eyebrow / Tag */}
      {tag && (
        <div className={cn(
          'inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase mb-3.5 border',
          light 
            ? 'bg-cyan/10 border-cyan/30 text-cyan' 
            : 'bg-electric/10 border-electric/20 text-electric'
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span>{tag}</span>
        </div>
      )}

      {/* Decorative accent line */}
      {!tag && (
        <div
          className={cn(
            'h-1 w-12 rounded-full mb-4',
            'bg-gradient-to-r from-electric via-cyan to-electric',
            align === 'center' && 'mx-auto'
          )}
        />
      )}

      {/* Headline */}
      <h2
        className={cn(
          'font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.18]',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal',
            light ? 'text-white/75' : 'text-navy-400',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
