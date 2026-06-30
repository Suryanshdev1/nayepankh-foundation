import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Globe, Target, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Nationwide Reach',
    desc: 'Operating across multiple cities with a strong network of volunteers and partners.',
  },
  {
    icon: Target,
    title: 'Focused Impact',
    desc: 'Every initiative is designed to create measurable, lasting change in communities.',
  },
  {
    icon: Award,
    title: 'Govt. Registered',
    desc: 'UP Government registered with 80G & 12A certification for tax-exempt donations.',
  },
  {
    icon: TrendingUp,
    title: 'Growing Fast',
    desc: "One of India's fastest-growing student-led NGOs with expanding operations.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950 relative">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">2019</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Founded</div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-64 bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 dark:from-accent-orange/10 dark:to-accent-orange/5 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-orange">3+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Major Cities</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl h-64 bg-gradient-to-br from-accent-green/20 to-accent-green/10 dark:from-accent-green/10 dark:to-accent-green/5 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-green">15K+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Lives Impacted</div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">500+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Volunteers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-2xl" />
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium mb-4">
              About Us
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Think Global,{' '}
              <span className="gradient-text dark:gradient-text-dark">Act Local</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              NayePankh Foundation is a non-governmental organization with a strong desire 
              to help society and make it a better place for all. We believe service to 
              mankind is service to God. Through our dedicated team of volunteers and 
              generous donors, we are revolutionizing communities one person at a time.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Founded by passionate students, we have grown into one of India's largest 
              student-led NGOs. Our operations extend across Kanpur, Ghaziabad, and various 
              other cities, touching thousands of lives through education, health, and 
              humanitarian initiatives.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{feature.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
