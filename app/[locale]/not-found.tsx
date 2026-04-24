'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-8xl font-display font-bold gradient-text mb-4">404</p>
          <h1 className="text-2xl font-display text-zinc-900 dark:text-white mb-4">
            Page introuvable
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-sm mx-auto">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="btn-primary">
              <Home size={16} /> Accueil
            </Link>
            <button onClick={() => history.back()} className="btn-secondary">
              <ArrowLeft size={16} /> Retour
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
