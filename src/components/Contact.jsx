import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  CheckCircle2, 
  Mail, 
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { 
  LinkedinIcon, 
  GithubIcon, 
  InstagramIcon, 
  LeetcodeIcon, 
  CodechefIcon, 
  MediumIcon,
  TwitterIcon 
} from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberBeep } from '../utils/audio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const copyEmail = () => {
    playCyberBeep();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setToastMessage('Email address copied to clipboard');
    setTimeout(() => {
      setCopied(false);
      setToastMessage('');
    }, 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const openInMailClient = () => {
    playCyberClick();
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Krishna,\n\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not specified'}\n\nMessage:\n${formData.message || ''}\n\nSent from Portfolio Contact Section`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in your name, email, and message.');
      setTimeout(() => setErrorMsg(''), 3500);
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData })
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#E8C547', '#7FA63A', '#173D2B']
          });
        } catch (err) {}
      })
      .catch((error) => {
        // Fallback: open user's mail client directly
        setIsSubmitting(false);
        setSubmitted(true);
        openInMailClient();
      });
  };

  return (
    <section id="contact" className="py-28 lg:py-36 relative border-t border-forest/10 dark:border-white/10">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-forest dark:bg-[#14231B] border border-sun/40 text-warm-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-sun" />
          <span className="text-xs font-mono tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sunlight-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Strong Closing Headline */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
            CONTACT &bull; INQUIRIES &bull; COLLABORATIONS
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Let’s build something{' '}
            <span className="text-forest dark:text-sun font-serif italic font-normal">
              thoughtful together.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted dark:text-stone-300 leading-relaxed font-normal">
            Whether you have an internship opening, an ambitious AI system to build, or a software challenge to solve — my inbox is always open.
          </p>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 text-left items-start">
          
          {/* Left Column (5 cols): Direct Channels, Socials & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-7 rounded-[28px] bg-cream-card dark:bg-[#0E1712] border border-forest/15 dark:border-emerald-500/25 space-y-4 shadow-soft-card dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-forest dark:text-sun font-semibold block">
                  Direct Electronic Mail
                </span>
                <span className="w-2 h-2 rounded-full bg-leaf dark:bg-sun animate-pulse" />
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#14231B] border border-forest/10 dark:border-emerald-500/25 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-forest dark:text-sun flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-charcoal dark:text-white font-medium truncate">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest/8 dark:bg-white/10 hover:bg-forest/15 dark:hover:bg-white/15 text-xs font-sans text-forest dark:text-warm-white transition-all flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-leaf dark:text-sun" />
                      <span className="text-leaf dark:text-sun font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-olive dark:text-sun" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted dark:text-stone-300 pt-1">
                <MapPin className="w-3.5 h-3.5 text-olive dark:text-sun" />
                <span>Pune, Maharashtra, India (IST / UTC+5:30)</span>
              </div>
            </div>

            {/* Social Network Ecosystem */}
            <div className="p-7 rounded-[28px] bg-cream-card dark:bg-[#0E1712] border border-forest/15 dark:border-emerald-500/25 space-y-4 shadow-soft-card dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <span className="text-xs font-mono uppercase tracking-wider text-forest dark:text-sun font-semibold block">
                Online Profiles &amp; Code
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#14231B] border border-forest/10 dark:border-white/10 flex items-center gap-2.5 text-xs text-charcoal dark:text-stone-100 hover:border-forest/30 dark:hover:border-sun/40 hover:bg-forest/5 dark:hover:bg-[#1a2e24] transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-charcoal dark:text-warm-white" />
                  <span className="font-mono text-[11px] font-medium">GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#14231B] border border-forest/10 dark:border-white/10 flex items-center gap-2.5 text-xs text-charcoal dark:text-stone-100 hover:border-forest/30 dark:hover:border-sun/40 hover:bg-forest/5 dark:hover:bg-[#1a2e24] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-olive dark:text-sun" />
                  <span className="font-mono text-[11px] font-medium">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#14231B] border border-forest/10 dark:border-white/10 flex items-center gap-2.5 text-xs text-charcoal dark:text-stone-100 hover:border-forest/30 dark:hover:border-sun/40 hover:bg-forest/5 dark:hover:bg-[#1a2e24] transition-all"
                >
                  <LeetcodeIcon className="w-4 h-4 text-sun" />
                  <span className="font-mono text-[11px] font-medium">LeetCode</span>
                </a>

                <a
                  href={personalInfo.codechefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#14231B] border border-forest/10 dark:border-white/10 flex items-center gap-2.5 text-xs text-charcoal dark:text-stone-100 hover:border-forest/30 dark:hover:border-sun/40 hover:bg-forest/5 dark:hover:bg-[#1a2e24] transition-all"
                >
                  <CodechefIcon className="w-4 h-4 text-leaf dark:text-sun" />
                  <span className="font-mono text-[11px] font-medium">CodeChef</span>
                </a>

                <a
                  href={personalInfo.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#14231B] border border-forest/10 dark:border-white/10 flex items-center gap-2.5 text-xs text-charcoal dark:text-stone-100 hover:border-forest/30 dark:hover:border-sun/40 hover:bg-forest/5 dark:hover:bg-[#1a2e24] transition-all"
                >
                  <MediumIcon className="w-4 h-4 text-forest dark:text-sun" />
                  <span className="font-mono text-[11px] font-medium">Medium</span>
                </a>

                <a
                  href={personalInfo.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#14231B] border border-forest/10 dark:border-white/10 flex items-center gap-2.5 text-xs text-charcoal dark:text-stone-100 hover:border-forest/30 dark:hover:border-sun/40 hover:bg-forest/5 dark:hover:bg-[#1a2e24] transition-all"
                >
                  <TwitterIcon className="w-4 h-4 text-charcoal dark:text-warm-white" />
                  <span className="font-mono text-[11px] font-medium">X (Twitter)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): High-Contrast, Night-Mode Optimized Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[32px] bg-white dark:bg-[#0E1712] border border-forest/15 dark:border-emerald-500/25 shadow-soft-card dark:shadow-[0_12px_45px_rgba(0,0,0,0.65)]">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-forest/10 dark:border-white/10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-charcoal dark:text-warm-white tracking-tight">
                    Send a Direct Note
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted dark:text-stone-300 mt-1">
                    Delivered directly to Krishna’s inbox with instant confirmation.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 dark:bg-sun/10 border border-forest/10 dark:border-sun/20 text-[11px] font-mono text-forest dark:text-sun font-medium self-start sm:self-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf dark:bg-sun animate-pulse" />
                  <span>Netlify &bull; Active</span>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-forest/5 dark:bg-[#14231B] border border-forest/15 dark:border-sun/30 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-forest dark:bg-sun text-warm-white dark:text-forest-dark flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-charcoal dark:text-warm-white">
                      Message Dispatched Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-charcoal dark:text-warm-white">{formData.name}</strong>. Your note has been submitted. I’ll review it and reply back to <strong className="text-charcoal dark:text-warm-white font-mono">{formData.email}</strong> promptly.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={openInMailClient}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-xs transition-all shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Also Open in Gmail / Mail App</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-full border border-forest/15 dark:border-white/15 text-charcoal dark:text-stone-200 text-xs font-mono hover:bg-forest/5 dark:hover:bg-white/5 transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Netlify Form Identifier */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Netlify Honeypot Field */}
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal/80 dark:text-sun/90 flex items-center justify-between">
                        <span>Your Name</span>
                        <span className="text-sun font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-[#14231B] border border-stone-300 dark:border-emerald-500/30 text-sm font-sans text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-400 focus:outline-none focus:border-forest dark:focus:border-sun focus:ring-2 focus:ring-forest/15 dark:focus:ring-sun/20 transition-all shadow-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal/80 dark:text-sun/90 flex items-center justify-between">
                        <span>Email Address</span>
                        <span className="text-sun font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-[#14231B] border border-stone-300 dark:border-emerald-500/30 text-sm font-sans text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-400 focus:outline-none focus:border-forest dark:focus:border-sun focus:ring-2 focus:ring-forest/15 dark:focus:ring-sun/20 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal/80 dark:text-sun/90 block">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Internship / AI Project Inquiry"
                      className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-[#14231B] border border-stone-300 dark:border-emerald-500/30 text-sm font-sans text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-400 focus:outline-none focus:border-forest dark:focus:border-sun focus:ring-2 focus:ring-forest/15 dark:focus:ring-sun/20 transition-all shadow-xs"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal/80 dark:text-sun/90 flex items-center justify-between">
                      <span>Message Note</span>
                      <span className="text-sun font-bold">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your team, problem space, internship opportunity, or project timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-[#14231B] border border-stone-300 dark:border-emerald-500/30 text-sm font-sans text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-400 focus:outline-none focus:border-forest dark:focus:border-sun focus:ring-2 focus:ring-forest/15 dark:focus:ring-sun/20 transition-all shadow-xs resize-none"
                    />
                  </div>

                  {/* Dual Action Submit Row */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    {/* Primary Netlify Submission Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onClick={playCyberClick}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <span>Dispatching Note...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Direct Mail Client Fallback */}
                    <button
                      type="button"
                      onClick={openInMailClient}
                      className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 text-charcoal dark:text-stone-200 border border-forest/15 dark:border-white/15 font-semibold text-xs tracking-wider transition-all"
                      title="Open in your default email client (Gmail/Outlook)"
                    >
                      <Mail className="w-3.5 h-3.5 text-forest dark:text-sun" />
                      <span>Open in Gmail / App</span>
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-center text-charcoal-muted dark:text-stone-400 pt-1">
                    Your details are never shared. Direct reply guaranteed.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
