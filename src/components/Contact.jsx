import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  CheckCircle2,
  FolderDown,
  ExternalLink,
  ArrowUpRight
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
import { playCyberClick, playSuccessFanfare, playCyberBeep } from '../utils/audio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const copyEmail = () => {
    playCyberBeep();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setToastMessage('Email copied to clipboard');
    setTimeout(() => {
      setCopied(false);
      setToastMessage('');
    }, 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage('Please fill in required fields.');
      setTimeout(() => setToastMessage(''), 3000);
      return;
    }

    playSuccessFanfare();
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FF5500', '#FFAA00', '#FFFFFF']
      });
    } catch (err) {}

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Krishna,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setToastMessage('Opening your mail client...');
    setTimeout(() => {
      setSubmitted(false);
      setToastMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-borderMuted">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-surface/95 border border-ember/50 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono">{toastMessage}</span>
        </div>
      )}

      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-ember font-semibold block">
            Initiate Contact &bull; Collaboration
          </span>
          <h2 className="headline-editorial text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tighter">
            Let's Build Together.
          </h2>
          <p className="text-xs sm:text-base text-ivory-muted leading-relaxed">
            Open for software engineering internships, AI/ML development initiatives, high-impact project collaborations, or discussing new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 cols): Direct Channels & Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="rounded-3xl p-8 bg-surface/90 border border-borderMuted space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Direct Communication
                </h3>
                <p className="text-xs text-ivory-muted mt-1 leading-relaxed">
                  Fastest response via direct email or LinkedIn message.
                </p>
              </div>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-void/60 border border-borderMuted space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-ember uppercase tracking-wider font-semibold">
                    Direct Email
                  </span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 text-[11px] text-ivory-muted hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-white hover:text-ember transition-colors block truncate font-mono"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 text-xs text-ivory-dim">
                <div className="w-10 h-10 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-ember flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location Base</div>
                  <div className="text-ivory-muted">Pune Division, Maharashtra, India</div>
                </div>
              </div>

              {/* Credentials Link */}
              <div className="p-3.5 rounded-2xl bg-void/40 border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <FolderDown className="w-4 h-4 text-amberGold flex-shrink-0" />
                  <span className="text-xs text-ivory-dim">Verified Credentials Folder</span>
                </div>
                <a
                  href={personalInfo.certificatesDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="text-xs font-semibold text-ember hover:text-white flex items-center gap-1 flex-shrink-0"
                >
                  <span>Open Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* All Platform Links */}
              <div className="pt-4 border-t border-borderMuted space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-ivory-muted block">
                  Find Me Online:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  </a>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-200" />
                  </a>
                  <a
                    href={personalInfo.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
                    title="LeetCode"
                  >
                    <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                  </a>
                  <a
                    href={personalInfo.codechefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
                    title="CodeChef"
                  >
                    <CodechefIcon className="w-4 h-4 text-ember" />
                  </a>
                  <a
                    href={personalInfo.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
                    title="Medium"
                  >
                    <MediumIcon className="w-4 h-4 text-emerald-400" />
                  </a>
                  <a
                    href={personalInfo.creatorInstaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
                    title="Instagram Creator (@yappp.kris)"
                  >
                    <InstagramIcon className="w-4 h-4 text-fuchsia-400" />
                  </a>
                  <a
                    href={personalInfo.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
                    title="X / Twitter"
                  >
                    <TwitterIcon className="w-4 h-4 text-slate-300" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (7 cols): Direct Message Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 sm:p-9 bg-surface/90 border border-borderMuted shadow-2xl space-y-5 text-left"
            >
              <h3 className="text-xl font-bold font-display text-white">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-ivory-muted">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-void/70 border border-borderMuted focus:border-ember focus:outline-none text-sm text-white placeholder-ivory-muted/40 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-ivory-muted">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-void/70 border border-borderMuted focus:border-ember focus:outline-none text-sm text-white placeholder-ivory-muted/40 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-ivory-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Project Collaboration / Tech Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-void/70 border border-borderMuted focus:border-ember focus:outline-none text-sm text-white placeholder-ivory-muted/40 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-ivory-muted">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Krishna, I reviewed your work on Qlockain & Startup Mentor and would love to connect regarding..."
                  className="w-full px-4 py-3 rounded-xl bg-void/70 border border-borderMuted focus:border-ember focus:outline-none text-sm text-white placeholder-ivory-muted/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                onClick={playCyberClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-ember hover:bg-ember-light text-white font-semibold text-sm shadow-xl shadow-ember/25 transition-all active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? 'Message Ready!' : 'Send Direct Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
