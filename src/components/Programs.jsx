import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, BookOpen, Stethoscope, Utensils, TreePine, Shirt, Laptop } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Education Drive',
    desc: 'Free tuition centers, book distribution, and scholarship programs for underprivileged students.',
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
  },
  {
    icon: Stethoscope,
    title: 'Health Camps',
    desc: 'Regular medical checkups, free medicines, and health awareness workshops in slum areas.',
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  },
  {
    icon: Utensils,
    title: 'Food Distribution',
    desc: 'Daily meal programs and emergency food relief for homeless and low-income families.',
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
  },
  {
    icon: TreePine,
    title: 'Environment',
    desc: 'Tree plantation drives, cleanliness campaigns, and sustainability awareness programs.',
    color: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
  },
  {
    icon: Shirt,
    title: 'Cloth Donation',
    desc: 'Collecting and distributing clothes to those in need during winter and festivals.',
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
  },
  {
    icon: Laptop,
    title: 'Digital Literacy',
    desc: 'Teaching computer skills and internet literacy to bridge the digital divide.',
    color: 'bg-cyan-500',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  },
];

export default function ProgramsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="programs" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container-custom" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium mb-4">
              Our Programs
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Initiatives That <span className="gradient-text dark:gradient-text-dark">Change Lives</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              From education to healthcare, our programs address the most pressing needs of underprivileged communities.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg ${program.color} flex items-center justify-center shadow-lg`}>
                  <program.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">{program.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{program.desc}</p>
                <button className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
