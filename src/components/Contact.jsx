import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  CheckCircle2,
  FolderDown,
  ExternalLink,
  Mail,
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
import { playCyberClick, playCyberBeep } from '../utils/audio';

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
    setToastMessage('Email address copied to clipboard');
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
      setToastMessage('Please complete all required fields.');
      setTimeout(() => setToastMessage(''), 3000);
      return;
    }

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E8C547', '#7FA63A', '#173D2B']
      });
    } catch (err) {}

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Krishna,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setToastMessage('Opening your email client...');
    setTimeout(() => {
      setSubmitted(false);
      setToastMessage('');
    }, 4000);
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
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
            GET IN TOUCH &bull; COLLABORATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Have an idea worth building?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
            Whether you have an ambitious software project, an AI architecture question, or are looking for a dedicated software engineering builder — my inbox is always open.
          </p>
        </div>

        {/* Forest Green Container */}
        <div className="rounded-[36px] bg-forest dark:bg-dark-card border border-forest/20 dark:border-white/10 p-8 sm:p-12 text-warm-white shadow-soft-lift text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (5 cols): Direct Channels & Online Presence */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-warm-white tracking-tight">
                  Direct Channels
                </h3>
                <p className="text-xs text-warm-white/75 dark:text-dark-textMuted mt-1 leading-relaxed">
                  Fastest response via direct email or LinkedIn message.
                </p>
              </div>

              {/* Email Box */}
              <div className="p-5 rounded-2xl bg-white/10 dark:bg-dark-cardElevated border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-sun uppercase tracking-wider font-semibold">
                    Direct Email
                  </span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 text-xs text-warm-white/80 hover:text-warm-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-sun" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-warm-white hover:text-sun transition-colors block truncate font-mono"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3.5 text-xs text-warm-white/90">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sun flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-warm-white">Location Base</div>
                  <div className="text-warm-white/70 dark:text-dark-textMuted">Pune Division, Maharashtra, India</div>
                </div>
              </div>

              {/* Drive Link */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <FolderDown className="w-4 h-4 text-sun flex-shrink-0" />
                  <span className="text-xs text-warm-white/90">Verified Credentials Folder</span>
                </div>
                <a
                  href={personalInfo.certificatesDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="text-xs font-semibold text-sun hover:underline flex items-center gap-1 flex-shrink-0"
                >
                  <span>Open Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-warm-white/70 block">
                  Find Me Online:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-warm-white transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sun" />
                  </a>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-warm-white transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-warm-white transition-colors"
                    title="LeetCode"
                  >
                    <LeetcodeIcon className="w-4 h-4 text-sun" />
                  </a>
                  <a
                    href={personalInfo.codechefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-warm-white transition-colors"
                    title="CodeChef"
                  >
                    <CodechefIcon className="w-4 h-4 text-leaf" />
                  </a>
                  <a
                    href={personalInfo.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-warm-white transition-colors"
                    title="Medium"
                  >
                    <MediumIcon className="w-4 h-4 text-sun" />
                  </a>
                  <a
                    href={personalInfo.creatorInstaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-warm-white transition-colors"
                    title="Instagram Creator (@yappp.kris)"
                  >
                    <InstagramIcon className="w-4 h-4 text-leaf" />
                  </a>
                  <a
                    href={personalInfo.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-warm-white transition-colors"
                    title="X / Twitter"
                  >
                    <TwitterIcon className="w-4 h-4 text-warm-white/80" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column (7 cols): Clean Contact Form */}
            <div className="lg:col-span-7">
              <form 
                onSubmit={handleSubmit}
                className="rounded-[28px] p-8 sm:p-9 bg-forest-deep dark:bg-dark-cardElevated border border-white/10 shadow-lg space-y-5"
              >
                <h3 className="text-xl font-bold text-warm-white tracking-tight">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-warm-white/70">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Patel"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-sun focus:outline-none text-sm text-warm-white placeholder-warm-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-warm-white/70">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="maya@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-sun focus:outline-none text-sm text-warm-white placeholder-warm-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-warm-white/70">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Role Opportunity / General Chat"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-sun focus:outline-none text-sm text-warm-white placeholder-warm-white/30 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-warm-white/70">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Krishna, I came across your work on Qlockain & Startup Mentor and would love to connect regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-sun focus:outline-none text-sm text-warm-white placeholder-warm-white/30 transition-colors resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  onClick={playCyberClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-sun hover:bg-sun-light text-forest-dark font-bold text-sm shadow-md transition-all active:scale-98"
                >
                  <Send className="w-4 h-4 text-forest-dark" />
                  <span>{submitted ? 'Message Prepared' : 'Send Message'}</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
