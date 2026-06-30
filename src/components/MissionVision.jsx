import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookOpen, Heart, Shield, Zap } from 'lucide-react';

const missions = [
  {
    icon: BookOpen,
    title: 'Education for All',
    desc: 'Providing quality education and learning resources to underprivileged children who lack access to basic schooling.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    desc: 'Organizing health camps, distributing medicines, and ensuring basic healthcare reaches marginalized communities.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: Shield,
    title: 'Women Empowerment',
    desc: 'Creating safe spaces and skill development programs that enable women to become financially independent.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Zap,
    title: 'Youth Development',
    desc: 'Engaging young minds through mentorship, leadership programs, and community service initiatives.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
];

export default function MissionVision() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="mission" className="section-padding bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-orange/10 dark:bg-accent-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium mb-4">
              Our Mission
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              What Drives Us <span className="gradient-text dark:gradient-text-dark">Forward</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Our mission is to create a society where every individual has access to basic necessities, 
              education, and opportunities to thrive.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((item, index) => (
            <div
              key={item.title}
              className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 dark:border-slate-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-orange opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative`}>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-10`} />
                <item.icon className="w-7 h-7 relative z-10 text-slate-700 dark:text-white" />
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              &ldquo;A world where no child goes to bed hungry, every student has access to quality education, 
              and communities are empowered to break the cycle of poverty. We envision an India where 
              compassion drives action and every individual contributes to collective upliftment.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
