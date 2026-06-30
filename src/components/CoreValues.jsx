import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, HandHeart, Equal, Users, HeartHandshake, Eye } from 'lucide-react';

const values = [
  { icon: GraduationCap, title: 'Education', desc: 'Knowledge is the foundation of empowerment.' },
  { icon: HandHeart, title: 'Empowerment', desc: 'Enabling individuals to shape their own future.' },
  { icon: Equal, title: 'Equality', desc: 'Equal opportunities for every human being.' },
  { icon: Users, title: 'Community', desc: 'Together we achieve what one cannot.' },
  { icon: HeartHandshake, title: 'Compassion', desc: 'Leading with empathy and kindness.' },
  { icon: Eye, title: 'Transparency', desc: '100% accountability in every action.' },
];

export default function CoreValues() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium mb-4">
              Core Values
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Principles We <span className="gradient-text dark:gradient-text-dark">Live By</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800
                hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 
                transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary-500/20">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
