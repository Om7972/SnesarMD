import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404: Route Not Found | Snesar.MD';
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 py-20">
        <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan backdrop-blur-md">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <span className="text-sm font-mono tracking-widest text-cyan font-bold uppercase block mb-2">
          Error 404
        </span>

        <h1 className="text-5xl sm:text-6xl font-bold font-display tracking-tight text-white mb-4">
          Route Not Found
        </h1>

        <p className="text-white/70 text-base leading-relaxed mb-8">
          The requested system node or engineering document is either unavailable, has been refactored, or does not exist within the current architecture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-electric text-white font-semibold text-sm hover:bg-electric/90 shadow-lg shadow-electric/25 transition-all inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/solutions"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/10 transition-all inline-flex items-center justify-center gap-2"
          >
            <span>Solutions Index</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

