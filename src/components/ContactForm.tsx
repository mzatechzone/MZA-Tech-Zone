import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Mail, Phone, Building, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  defaultService?: string;
  isCompact?: boolean;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService = 'Web Development', isCompact = false, onSuccess }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission processing with feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSuccess) onSuccess();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Web Development',
      message: '',
    });
    setIsSuccess(false);
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div
        id="contact-form-success-card"
        className="bg-[#0b1220] border border-emerald-500/30 rounded-3xl p-8 sm:p-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white font-display">
            Inquiry Received Successfully!
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-emerald-400">{formData.name}</span>. Our strategy team has received your project details. We will review your request and reply to <span className="font-mono text-xs text-white bg-slate-800 px-2 py-0.5 rounded">{formData.email}</span> within one business day.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors"
          >
            Send Another Inquiry
          </button>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/40 text-sm font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Direct Email ({COMPANY_INFO.email})</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      id="inquiry-contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#0b1220]/90 backdrop-blur-xl border border-slate-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-2xl shadow-black/80"
    >
      <div className="space-y-2 border-b border-slate-800/80 pb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Project Discovery & Quote</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
          Start Your Growth Strategy
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Tell us about your project goals. We reply within one business day (Mon–Fri, 9:00 AM – 5:00 PM).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-[#070b14] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
              errors.name
                ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Work Email <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-[#070b14] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
              errors.email
                ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Phone Number <span className="text-slate-500 text-[10px] lowercase">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+1 (555) 019-2834"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
          />
        </div>

        {/* Company */}
        <div className="space-y-1.5">
          <label htmlFor="contact-company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Company / Organization
          </label>
          <input
            id="contact-company"
            type="text"
            placeholder="Acme Enterprises"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Primary Service Selection */}
      <div className="space-y-1.5">
        <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
          Primary Service Required
        </label>
        <select
          id="contact-service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white focus:outline-none transition-all"
        >
          <option value="Web Development">Web Development</option>
          <option value="SEO Services">SEO Services</option>
          <option value="Google Business Profile">Google Business Profile Management</option>
          <option value="Full Digital Growth Package">Full Digital Growth Package (Web + SEO + GBP)</option>
          <option value="Other">Other Custom Inquiry</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
          Project Details & Objectives <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={isCompact ? 3 : 4}
          placeholder="Briefly describe your business, current website or search presence, and what goals you want to achieve..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl bg-[#070b14] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
            errors.message
              ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
              : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          id="contact-form-submit-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
        <p className="text-center text-[11px] text-slate-500 mt-3">
          We respect your privacy. We will never share your information.
        </p>
      </div>
    </form>
  );
};
