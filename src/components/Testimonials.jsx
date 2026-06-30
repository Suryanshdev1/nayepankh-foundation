import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Volunteer, Kanpur',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    quote: 'Joining NayePankh was the best decision of my life. Teaching these kids and seeing their eyes light up with curiosity is priceless. The organization truly lives by its values.',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'Donor, Ghaziabad',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    quote: 'I have been donating for 2 years now. The transparency and regular updates about how my contributions are used gives me immense satisfaction. Truly a trustworthy NGO.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Beneficiary Parent',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    quote: 'NayePankh helped my daughter continue her education when we could not afford it. Today she is excelling in school. We are forever grateful to the team.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Student Volunteer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    quote: 'Being a student volunteer taught me leadership and empathy. The mentorship from senior volunteers helped me grow both personally and professionally.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Stories of <span className="gradient-text dark:gradient-text-dark">Hope</span>
            </h2>
          </div>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary-200 dark:text-primary-900" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-primary-100 dark:ring-primary-900/30">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-display font-bold text-slate-900 dark:text-white">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-4 mt-8">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary-600 w-8' : 'bg-slate-300 dark:bg-slate-700'}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
