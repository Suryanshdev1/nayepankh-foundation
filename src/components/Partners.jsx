import { useScrollAnimation } from '../hooks/useScrollAnimation';

const partners = [
  'UNESCO', 'UNICEF', 'CRY', 'Goonj', 'HelpAge', 'SOS', 'Pratham', 'Akshaya',
];

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="container-custom" ref={ref}>
        <p className={`text-center text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Trusted by organizations worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className={`text-xl md:text-2xl font-display font-bold text-slate-300 dark:text-slate-700 hover:text-primary-400 dark:hover:text-primary-600 transition-all duration-300 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
