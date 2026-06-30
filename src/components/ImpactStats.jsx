import { useCountUp } from '../hooks/useCountUp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, BookOpen, Heart, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, value: 15000, suffix: '+', label: 'Children Supported', color: 'text-blue-600' },
  { icon: Heart, value: 500, suffix: '+', label: 'Active Volunteers', color: 'text-orange-600' },
  { icon: BookOpen, value: 120, suffix: '+', label: 'Projects Completed', color: 'text-green-600' },
  { icon: MapPin, value: 50, suffix: '+', label: 'Communities Served', color: 'text-purple-600' },
];

function StatCard({ icon: Icon, value, suffix, label, color }) {
  const { count, ref } = useCountUp(value, 2500);

  return (
    <div ref={ref} className="text-center p-6">
      <div className={`w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4`}>
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-blue-100 font-medium">{label}</div>
    </div>
  );
}

export default function ImpactStats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="impact" className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              Our Impact
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Numbers That <span className="text-orange-400">Speak</span>
            </h2>
            <p className="text-lg text-blue-100">
              Every statistic represents a life changed, a dream nurtured, and a community uplifted.
            </p>
          </div>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6">
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
