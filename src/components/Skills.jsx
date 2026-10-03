import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  Sparkles, 
  ArrowRight,
  Database,
  Wrench,
  Server
} from 'lucide-react';
import { playCyberClick } from '../utils/audio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Technologies' },
    { id: 'Languages', label: 'Languages' },
    { id: 'AI & ML', label: 'AI & Machine Learning' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Backend', label: 'Backend & Systems' },
    { id: 'Data', label: 'Data & Analytics' },
    { id: 'Tools', label: 'Tools & DevOps' },
  ];

  const skillGroups = [
    {
      category: 'Languages',
      icon: <Code2 className="w-4 h-4 text-forest dark:text-sun" />,
      skills: [
        { name: 'Python', level: 'Core Language & AI Pipelines', highlighted: true },
        { name: 'JavaScript (ES6+)', level: 'Modern Web & Async Logic', highlighted: true },
        { name: 'C Language', level: 'Low-Level & Memory Foundations', highlighted: false },
        { name: 'SQL', level: 'Relational Queries & Schemas', highlighted: false },
        { name: 'HTML5 & CSS3', level: 'Semantic Layouts & Styling', highlighted: false },
      ]
    },
    {
      category: 'AI & ML',
      icon: <Cpu className="w-4 h-4 text-gold dark:text-sun" />,
      skills: [
        { name: 'IBM watsonx Orchestrate', level: 'Enterprise Multi-Step Workflows', highlighted: true },
        { name: 'Gemini 1.5 API', level: 'Multimodal Generative Reasoning', highlighted: true },
        { name: 'Computer Vision', level: 'Surveillance & Object Detection', highlighted: true },
        { name: 'Prompt Engineering', level: 'Deterministic Chain-of-Thought', highlighted: false },
        { name: 'Agentic AI Architecture', level: 'Autonomous Task Orchestration', highlighted: false },
        { name: 'Scikit-learn', level: 'Statistical Machine Learning', highlighted: false },
      ]
    },
    {
      category: 'Frontend',
      icon: <Layers className="w-4 h-4 text-leaf dark:text-leaf" />,
      skills: [
        { name: 'React.js', level: 'Component Hierarchies & Hooks', highlighted: true },
        { name: 'Vite', level: 'High-Speed Bundling & HMR', highlighted: false },
        { name: 'Tailwind CSS', level: 'Design Systems & Utility CSS', highlighted: true },
        { name: 'Responsive UI/UX', level: 'Mobile-First Accessibility', highlighted: false },
      ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-4 h-4 text-olive dark:text-leaf" />,
      skills: [
        { name: 'Node.js & Express', level: 'REST APIs & Middleware', highlighted: true },
        { name: 'Python Flask', level: 'Microservices & Verification Endpoints', highlighted: true },
        { name: 'RESTful API Design', level: 'Deterministic Endpoints & Schemas', highlighted: false },
        { name: 'Linux / POSIX', level: 'System Calls & File Descriptors', highlighted: false },
      ]
    },
    {
      category: 'Data',
      icon: <Database className="w-4 h-4 text-sun dark:text-gold" />,
      skills: [
        { name: 'Tableau Desktop', level: 'Multi-Level Grain Visualizations', highlighted: true },
        { name: 'Orange Data Mining', level: 'Visual ML Pipelines & Clustering', highlighted: true },
        { name: 'Kaggle Datasets', level: 'Data Preprocessing & Cleansing', highlighted: false },
        { name: 'Data Visualization', level: 'Empirical Research Reports', highlighted: false },
      ]
    },
    {
      category: 'Tools',
      icon: <Wrench className="w-4 h-4 text-forest dark:text-sun" />,
      skills: [
        { name: 'Git & GitHub', level: 'Branching & Collaborative PRs', highlighted: true },
        { name: 'Render Cloud', level: 'Web Services & Production Deployments', highlighted: false },
        { name: 'Vercel', level: 'Edge Deployments & Next.js Hosting', highlighted: false },
        { name: 'VS Code & POSIX CLI', level: 'Primary Development Environment', highlighted: false },
      ]
    }
  ];

  const filteredGroups = skillGroups.filter(
    (group) => activeCategory === 'All' || group.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 relative border-t border-forest/10 dark:border-white/10">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-canopy-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
            SKILLS &bull; STACK &bull; CRAFT
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Technology Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
            A curated stack categorized by system layer. Built around performance, algorithmic predictability, and thoughtful user interfaces rather than trend cycles.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 text-left">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playCyberClick();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-forest dark:bg-sun text-warm-white dark:text-forest-dark font-semibold shadow-sm'
                  : 'bg-cream-card dark:bg-dark-card text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white border border-forest/10 dark:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-7 rounded-[26px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 shadow-soft-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-forest/10 dark:border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-forest/5 dark:bg-white/5 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal dark:text-warm-white">
                    {group.category}
                  </h3>
                </div>

                {/* Badges / Chips */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl border transition-all ${
                        skill.highlighted
                          ? 'bg-warm-white dark:bg-dark-cardElevated border-forest/20 dark:border-sun/30 shadow-sm'
                          : 'bg-forest/[0.02] dark:bg-white/[0.02] border-forest/5 dark:border-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold ${skill.highlighted ? 'text-forest dark:text-sun' : 'text-charcoal dark:text-warm-white'}`}>
                          {skill.name}
                        </span>
                        {skill.highlighted && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sun dark:bg-sun" />
                        )}
                      </div>
                      <p className="text-[11px] text-charcoal-muted dark:text-dark-textMuted font-mono mt-0.5">
                        {skill.level}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-14 p-8 rounded-[28px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left shadow-soft-card">
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase text-forest dark:text-sun tracking-wider font-semibold">
              Tooling Philosophy
            </h4>
            <p className="text-xs text-charcoal-muted dark:text-dark-textMuted max-w-xl leading-relaxed">
              “Frameworks and libraries evolve constantly; computational foundations, memory rigor, and disciplined problem solving remain the true constants.”
            </p>
          </div>

          <a
            href="#projects"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-semibold px-6 py-3 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark transition-all shadow-sm"
          >
            <span>See Stack in Action</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
