'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Send, Mail, Phone, Loader2, CheckCircle2, AlertCircle,
  Github, Linkedin, MessageCircle
} from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactClient() {
  const t = useTranslations('contact');
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          title: 'Nouveau message depuis le portfolio',
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
          to_name: 'Julius Junior',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormState('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  const isLoading = formState === 'loading';
  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <section className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">{t('subtitle')}</p>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass rounded-2xl p-6 space-y-5">
            <h3 className="font-display text-lg text-zinc-900 dark:text-white">{t('or')}</h3>

            {[
              { icon: Mail, label: 'Email', value: 'julius.tchehouenou@gmail.com', href: 'mailto:julius.tchehouenou@gmail.com' },
              { icon: Phone, label: 'Téléphone', value: '+229 01 61 13 32 24', href: 'tel:+22901611332 24' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors mt-0.5">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">{label}</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors break-all">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="glass rounded-2xl p-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">Réseaux sociaux</h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                { href: 'https://github.com/jujuprodfbp-creator', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/junior-tchehouenou-a7b804281', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://whatsapp.com/dl/', icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50
                             hover:bg-brand-50 dark:hover:bg-brand-900/30 border border-zinc-100 dark:border-zinc-700
                             hover:border-brand-200 dark:hover:border-brand-700 transition-all"
                >
                  <Icon size={18} className="text-zinc-500 dark:text-zinc-400" />
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  {t('name')} *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('name_placeholder')}
                  className="input-field"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  {t('email')} *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('email_placeholder')}
                  className="input-field"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('message_placeholder')}
                  className="input-field resize-none"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Submit */}
              <motion.button
                onClick={handleSubmit}
                disabled={isLoading || !isValid}
                whileHover={!isLoading && isValid ? { scale: 1.02, y: -1 } : {}}
                whileTap={!isLoading && isValid ? { scale: 0.98 } : {}}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t('sending')}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t('send')}
                  </>
                )}
              </motion.button>

              {/* Feedback messages */}
              {formState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800"
                >
                  <CheckCircle2 size={18} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-700 dark:text-green-400">{t('success')}</p>
                </motion.div>
              )}

              {formState === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800"
                >
                  <AlertCircle size={18} className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700 dark:text-red-400">{t('error')}</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
