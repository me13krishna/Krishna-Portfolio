import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  CheckCircle2, 
  Mail, 
  Sparkles,
  RefreshCw
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
    message: '',
    _honey: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const COOLDOWN_SECONDS = 30;
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Invisible Bot Honeypot: reject bots silently without making API requests
    if (formData._honey && formData._honey.trim() !== '') {
      console.warn('Automated bot submission prevented.');
      setSubmitted(true);
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    // 2. Required fields validation
    if (!name || !email || !message) {
      setErrorMsg('Please fill in your name, email, and message.');
      setTimeout(() => setErrorMsg(''), 4000);
      return;
    }

    // 3. Name length check
    if (name.length < 2 || name.length > 80) {
      setErrorMsg('Please enter a valid name (2 to 80 characters).');
      setTimeout(() => setErrorMsg(''), 4000);
      return;
    }

    // 4. Strict Email Regex Validation
    if (!EMAIL_REGEX.test(email) || email.length > 100) {
      setErrorMsg('Please enter a valid email address (e.g. name@domain.com).');
      setTimeout(() => setErrorMsg(''), 4000);
      return;
    }

    // 5. Message length checks
    if (message.length < 10) {
      setErrorMsg('Message is too short. Please provide at least 10 characters.');
      setTimeout(() => setErrorMsg(''), 4000);
      return;
    }

    if (message.length > 3000) {
      setErrorMsg('Message is too long. Please limit to 3,000 characters.');
      setTimeout(() => setErrorMsg(''), 4000);
      return;
    }

    // 6. Rate Limiting / Anti-flood Cooldown
    const lastSentTime = localStorage.getItem('km_last_contact_time');
    if (lastSentTime) {
      const elapsedSeconds = Math.floor((Date.now() - parseInt(lastSentTime, 10)) / 1000);
      if (elapsedSeconds < COOLDOWN_SECONDS) {
        const remaining = COOLDOWN_SECONDS - elapsedSeconds;
        setErrorMsg(`Please wait ${remaining} second${remaining > 1 ? 's' : ''} before sending another message.`);
        setTimeout(() => setErrorMsg(''), 4000);
        return;
      }
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject || `Inquiry from ${name}`,
          message: message,
          _subject: `New Portfolio Message from ${name}: ${subject || 'Direct Inquiry'}`,
          _template: 'table',
          _captcha: 'false',
          _honey: ''
        })
      });

      const result = await response.json();

      // Either it succeeded or it sent the initial activation email to Krishna
      if (response.ok || result.success === 'true' || result.success === true || (result.message && result.message.includes('Activation'))) {
        try {
          localStorage.setItem('km_last_contact_time', Date.now().toString());
        } catch (e) {}

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
      } else {
        throw new Error(result.message || 'Failed to dispatch message');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setIsSubmitting(false);
      setErrorMsg(
        'Unable to send message directly right now. You can copy the email above to reach me!'
      );
    }
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
                  <span>Direct Delivery &bull; Active</span>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-forest/5 dark:bg-[#14231B] border border-forest/15 dark:border-sun/30 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-forest dark:bg-sun text-warm-white dark:text-forest-dark flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-charcoal dark:text-warm-white">
                      Message Dispatched to Inbox!
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-charcoal dark:text-warm-white">{formData.name}</strong>. Your note has been delivered straight to Krishna&apos;s email. I&apos;ll review it and reply back to <strong className="text-charcoal dark:text-warm-white font-mono">{formData.email}</strong> shortly.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '', _honey: '' });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      <span>Send another note</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Invisible Honeypot trap for automated spam bots */}
                  <input 
                    type="text" 
                    name="_honey" 
                    value={formData._honey} 
                    onChange={handleChange} 
                    style={{ display: 'none' }} 
                    tabIndex={-1} 
                    autoComplete="off" 
                    aria-hidden="true" 
                  />

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono font-medium animate-in fade-in duration-200">
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
                        maxLength={80}
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
                        maxLength={100}
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
                      maxLength={150}
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Internship / AI Project Inquiry"
                      className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-[#14231B] border border-stone-300 dark:border-emerald-500/30 text-sm font-sans text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-400 focus:outline-none focus:border-forest dark:focus:border-sun focus:ring-2 focus:ring-forest/15 dark:focus:ring-sun/20 transition-all shadow-xs"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal/80 dark:text-sun/90 flex items-center gap-1">
                        <span>Message Note</span>
                        <span className="text-sun font-bold">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-charcoal-muted dark:text-stone-400">
                        {formData.message.length}/3000
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      maxLength={3000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your team, problem space, internship opportunity, or project timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-[#14231B] border border-stone-300 dark:border-emerald-500/30 text-sm font-sans text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-400 focus:outline-none focus:border-forest dark:focus:border-sun focus:ring-2 focus:ring-forest/15 dark:focus:ring-sun/20 transition-all shadow-xs resize-none"
                    />
                  </div>

                  {/* Single High-Impact Action Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onClick={playCyberClick}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Dispatching Note to Inbox...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-center text-charcoal-muted dark:text-stone-400 pt-1">
                    Delivered directly to Krishna&apos;s personal Gmail. No email client apps required.
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
