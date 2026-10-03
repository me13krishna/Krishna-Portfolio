import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  CheckCircle2, 
  Mail, 
  ArrowUpRight,
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
        // Fallback for local testing: open mailto
        setIsSubmitting(false);
        setSubmitted(true);
        const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `Hello Krishna,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      });
  };

  return (
    <section id="contact" className="py-28 relative border-t border-forest/10 dark:border-white/10">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-forest dark:bg-dark-card border border-sun/30 text-warm-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-sun" />
          <span className="text-xs font-mono">{toastMessage}</span>
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
          <p className="text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
            Whether you have an internship opening, a distributed systems challenge, an AI reasoning pipeline, or an ambitious product in mind — my inbox is always open.
          </p>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column (5 cols): Direct Channels, Socials & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-7 rounded-[28px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 space-y-4 shadow-soft-card">
              <span className="text-xs font-mono uppercase tracking-wider text-forest dark:text-sun font-semibold block">
                Direct Electronic Mail
              </span>

              <div className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-forest dark:text-sun flex-shrink-0" />
                  <span className="text-xs font-mono text-charcoal dark:text-warm-white truncate">{personalInfo.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 text-xs font-sans text-forest dark:text-warm-white transition-all flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-leaf" />
                      <span className="text-leaf font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-olive dark:text-sun" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted pt-1">
                <MapPin className="w-3.5 h-3.5 text-olive dark:text-leaf" />
                <span>Pune, Maharashtra, India (IST / UTC+5:30)</span>
              </div>
            </div>

            {/* Social Network Ecosystem */}
            <div className="p-7 rounded-[28px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 space-y-4 shadow-soft-card">
              <span className="text-xs font-mono uppercase tracking-wider text-forest dark:text-sun font-semibold block">
                Online Presence &amp; Profiles
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 flex items-center gap-2.5 text-xs text-charcoal dark:text-warm-white hover:border-forest/30 dark:hover:border-sun/30 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="font-mono text-[11px]">GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 flex items-center gap-2.5 text-xs text-charcoal dark:text-warm-white hover:border-forest/30 dark:hover:border-sun/30 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-olive dark:text-sun" />
                  <span className="font-mono text-[11px]">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 flex items-center gap-2.5 text-xs text-charcoal dark:text-warm-white hover:border-forest/30 dark:hover:border-sun/30 transition-all"
                >
                  <LeetcodeIcon className="w-4 h-4 text-sun" />
                  <span className="font-mono text-[11px]">LeetCode</span>
                </a>

                <a
                  href={personalInfo.codechefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 flex items-center gap-2.5 text-xs text-charcoal dark:text-warm-white hover:border-forest/30 dark:hover:border-sun/30 transition-all"
                >
                  <CodechefIcon className="w-4 h-4 text-leaf" />
                  <span className="font-mono text-[11px]">CodeChef</span>
                </a>

                <a
                  href={personalInfo.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 flex items-center gap-2.5 text-xs text-charcoal dark:text-warm-white hover:border-forest/30 dark:hover:border-sun/30 transition-all"
                >
                  <MediumIcon className="w-4 h-4 text-forest dark:text-sun" />
                  <span className="font-mono text-[11px]">Medium</span>
                </a>

                <a
                  href={personalInfo.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="p-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 flex items-center gap-2.5 text-xs text-charcoal dark:text-warm-white hover:border-forest/30 dark:hover:border-sun/30 transition-all"
                >
                  <TwitterIcon className="w-4 h-4 text-charcoal dark:text-warm-white" />
                  <span className="font-mono text-[11px]">X / Twitter</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Working Netlify Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[32px] bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 shadow-soft-card">
              
              <h3 className="text-xl font-bold text-charcoal dark:text-warm-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-charcoal-muted dark:text-dark-textMuted mb-6">
                Connected directly to Netlify Forms. Expected response within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-forest/5 dark:bg-white/5 border border-forest/15 dark:border-sun/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-forest dark:bg-sun text-warm-white dark:text-forest-dark flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-charcoal dark:text-warm-white">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs text-charcoal-muted dark:text-dark-textMuted max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name}. I'll review your note and respond back to {formData.email} promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-forest dark:text-sun underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Netlify Hidden Form Name Field */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Netlify Honeypot Field */}
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 text-xs text-charcoal dark:text-warm-white placeholder:text-charcoal-muted/40 focus:outline-none focus:border-forest dark:focus:border-sun transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 text-xs text-charcoal dark:text-warm-white placeholder:text-charcoal-muted/40 focus:outline-none focus:border-forest dark:focus:border-sun transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted block">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Engineering Internship / AI System Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 text-xs text-charcoal dark:text-warm-white placeholder:text-charcoal-muted/40 focus:outline-none focus:border-forest dark:focus:border-sun transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your team, problem space, or project timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 text-xs text-charcoal dark:text-warm-white placeholder:text-charcoal-muted/40 focus:outline-none focus:border-forest dark:focus:border-sun transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={playCyberClick}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-xs shadow-md transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
