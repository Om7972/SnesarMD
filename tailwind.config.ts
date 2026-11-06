import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071B33',
          50: '#E8EDF3',
          100: '#C5D0E0',
          200: '#9DAFC8',
          300: '#748EB0',
          400: '#4C6D98',
          500: '#2A4F7A',
          600: '#1A3A5C',
          700: '#0F2A47',
          800: '#071B33',
          900: '#030E1A',
        },
        electric: {
          DEFAULT: '#1264E8',
          50: '#E8F0FD',
          100: '#C5D9FA',
          200: '#8FB3F5',
          300: '#598DF0',
          400: '#2367EB',
          500: '#1264E8',
          600: '#0E50BA',
          700: '#0B3C8B',
          800: '#07285D',
          900: '#04142E',
        },
        cyan: {
          DEFAULT: '#16C6D9',
          50: '#E6FAFB',
          100: '#B3F0F5',
          200: '#80E6EF',
          300: '#4DDCE9',
          400: '#1AD2E3',
          500: '#16C6D9',
          600: '#129EAE',
          700: '#0D7782',
          800: '#094F57',
          900: '#04282B',
        },
        slate: {
          DEFAULT: '#172B45',
        },
        section: {
          DEFAULT: '#F3F6FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading': ['1.5rem', { lineHeight: '1.3' }],
        'subheading': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'grid-flow': 'gridFlow 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gridFlow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #071B33 0%, #0F2A47 50%, #1264E8 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(7,27,51,0) 0%, rgba(7,27,51,0.8) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(7, 27, 51, 0.08)',
        'card-hover': '0 8px 40px rgba(7, 27, 51, 0.15)',
        'nav': '0 2px 16px rgba(7, 27, 51, 0.08)',
        'glass': '0 8px 32px rgba(7, 27, 51, 0.1)',
        'glow': '0 0 40px rgba(18, 100, 232, 0.3)',
        'glow-cyan': '0 0 40px rgba(22, 198, 217, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};

export default config;

