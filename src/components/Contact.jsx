import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2,
  FolderDown,
  ExternalLink
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
    setToastMessage('Email copied to clipboard!');
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
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#a855f7', '#10b981']
      });
    } catch (err) {}

    // Open mail client with formatted template
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Krishna,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setToastMessage('Message generated! Opening email client...');
    setTimeout(() => {
      setSubmitted(false);
      setToastMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel-glow bg-surface/95 border border-cyan-400/50 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono">{toastMessage}</span>
        </div>
      )}

      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>06 — Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Exceptional</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Open for software engineering internships, AI/ML development, collaborative projects, or tech banter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-7 border border-white/10 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Communication Channels
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Have an internship role, an AI project idea, or want to connect? My inbox and socials are always open.
                </p>
              </div>

              {/* Email direct box */}
              <div className="p-4 rounded-xl bg-surface/80 border border-cyan-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Direct Email</span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors block truncate"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location info */}
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-slate-400">Pune Division, Maharashtra, India</div>
                </div>
              </div>

              {/* Verified Certificates Quick Link */}
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <FolderDown className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs text-slate-300">Google Drive Credentials Folder</span>
                </div>
                <a
                  href={personalInfo.certificatesDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 flex-shrink-0"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Fast Social Links row */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Connect Across All Platforms:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 border-white/10 hover:border-cyan-500/30 transition-all"
                    title="LinkedIn (krishnamishra13)"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  </a>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white border-white/10 hover:border-purple-500/30 transition-all"
                    title="GitHub (@me13krishna)"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-200" />
                  </a>
                  <a
                    href={personalInfo.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-amber-400 border-white/10 hover:border-amber-500/30 transition-all"
                    title="LeetCode (@me13_krishna)"
                  >
                    <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                  </a>
                  <a
                    href={personalInfo.codechefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-amber-500 border-white/10 hover:border-amber-500/30 transition-all"
                    title="CodeChef (me13_krishna)"
                  >
                    <CodechefIcon className="w-4 h-4 text-amber-500" />
                  </a>
                  <a
                    href={personalInfo.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-emerald-400 border-white/10 hover:border-emerald-500/30 transition-all"
                    title="Medium (@krishna1307mishra)"
                  >
                    <MediumIcon className="w-4 h-4 text-emerald-400" />
                  </a>
                  <a
                    href={personalInfo.creatorInstaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-fuchsia-400 border-white/10 hover:border-fuchsia-500/30 transition-all"
                    title="Instagram Creator (@yappp.kris)"
                  >
                    <InstagramIcon className="w-4 h-4 text-fuchsia-400" />
                  </a>
                  <a
                    href={personalInfo.personalInstaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-pink-400 border-white/10 hover:border-pink-500/30 transition-all"
                    title="Instagram Personal (@me13_krishna)"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-400" />
                  </a>
                  <a
                    href={personalInfo.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 border-white/10 hover:border-cyan-500/30 transition-all"
                    title="X / Twitter (@yapppkris)"
                  >
                    <TwitterIcon className="w-4 h-4 text-slate-300" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl p-7 sm:p-8 border border-white/10 shadow-2xl space-y-4"
            >
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Taylor"
                    className="w-full px-4 py-2.5 rounded-xl bg-void/70 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300">
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
                    className="w-full px-4 py-2.5 rounded-xl bg-void/70 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Internship / Project Collaboration / Tech Talk"
                  className="w-full px-4 py-2.5 rounded-xl bg-void/70 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Krishna, I came across your portfolio and would love to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-void/70 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                onClick={playCyberClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? 'Message Ready!' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
