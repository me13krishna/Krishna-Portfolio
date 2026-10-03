import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
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
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E2A866', '#728A7C', '#F7F6F2']
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
    <section id="contact" className="py-28 relative border-t border-white/[0.06]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#1C1C21]/95 border border-white/[0.1] text-[#F7F6F2] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#728A7C]" />
          <span className="text-xs font-mono">{toastMessage}</span>
        </div>
      )}

      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#E2A866]/[0.035] rounded-full blur-[190px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E2A866] font-medium block">
            Initiate Contact &bull; Collaboration
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#F7F6F2] tracking-tight">
            Let's start a conversation.
          </h2>
          <p className="text-sm sm:text-base text-[#9B988E] leading-relaxed font-normal">
            Whether you have an engineering role, a startup project, an AI architecture question, or simply want to talk craft over coffee — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column (5 cols): Direct Channels & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-[32px] p-8 sm:p-9 bg-[#151518]/90 border border-white/[0.07] space-y-6 shadow-soft-card">
              <div>
                <h3 className="text-xl font-bold text-[#F7F6F2] tracking-tight">
                  Direct Channels
                </h3>
                <p className="text-xs text-[#9B988E] mt-1 leading-relaxed">
                  I usually respond within a few hours to direct emails and LinkedIn messages.
                </p>
              </div>

              {/* Email Box */}
              <div className="p-5 rounded-2xl bg-[#1C1C21]/60 border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#E2A866] uppercase tracking-wider font-medium">
                    Direct Email
                  </span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 text-xs text-[#9B988E] hover:text-[#F7F6F2] transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#728A7C]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-medium text-[#F7F6F2] hover:text-[#E2A866] transition-colors block truncate font-mono"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 text-xs text-[#E3E1D8]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#728A7C] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-[#F7F6F2]">Location Base</div>
                  <div className="text-[#9B988E]">Pune Division, Maharashtra, India</div>
                </div>
              </div>

              {/* Credentials Link */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.04] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <FolderDown className="w-4 h-4 text-[#E2A866] flex-shrink-0" />
                  <span className="text-xs text-[#E3E1D8]">Verified Credentials Archive</span>
                </div>
                <a
                  href={personalInfo.certificatesDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="text-xs font-medium text-[#E2A866] hover:text-white flex items-center gap-1 flex-shrink-0"
                >
                  <span>Open Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Social Platforms Row */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9B988E] block">
                  Find Me Online:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
                    title="LeetCode"
                  >
                    <LeetcodeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.codechefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
                    title="CodeChef"
                  >
                    <CodechefIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
                    title="Medium"
                  >
                    <MediumIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.creatorInstaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
                    title="Instagram Creator (@yappp.kris)"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
                    title="X / Twitter"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (7 cols): Direct Message Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="rounded-[32px] p-8 sm:p-10 bg-[#151518]/90 border border-white/[0.07] shadow-soft-card space-y-5"
            >
              <h3 className="text-xl font-bold text-[#F7F6F2] tracking-tight">
                Send a Note
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-[#9B988E]">
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
                    className="w-full px-4 py-3 rounded-2xl bg-[#0E0E10]/80 border border-white/[0.06] focus:border-[#E2A866] focus:outline-none text-sm text-[#F7F6F2] placeholder-[#9B988E]/40 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-[#9B988E]">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="maya@studio.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0E0E10]/80 border border-white/[0.06] focus:border-[#E2A866] focus:outline-none text-sm text-[#F7F6F2] placeholder-[#9B988E]/40 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-[#9B988E]">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Engineering Collaboration / Role Opportunity / General Inquiry"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0E0E10]/80 border border-white/[0.06] focus:border-[#E2A866] focus:outline-none text-sm text-[#F7F6F2] placeholder-[#9B988E]/40 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-[#9B988E]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Krishna, I reviewed your work on Qlockain & Startup Mentor and would love to chat about..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#0E0E10]/80 border border-white/[0.06] focus:border-[#E2A866] focus:outline-none text-sm text-[#F7F6F2] placeholder-[#9B988E]/40 transition-colors resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                onClick={playCyberClick}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#F7F6F2] hover:bg-white text-[#0E0E10] font-semibold text-sm shadow-md transition-all active:scale-98"
              >
                <Send className="w-4 h-4 text-[#0E0E10]" />
                <span>{submitted ? 'Message Ready' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
