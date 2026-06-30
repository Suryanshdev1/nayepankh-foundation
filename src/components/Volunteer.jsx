import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function Volunteer() {
  const { ref, isVisible } = useScrollAnimation();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleVolunteer = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section id="volunteer" className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 dark:bg-primary-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-orange/20 dark:bg-accent-orange/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Join Our Team
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Be the Change You <span className="gradient-text dark:gradient-text-dark">Wish to See</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Join our team and make a difference in the lives of those in need. At NayePankh Foundation, 
              we are committed to creating positive change and empowering communities. Whether you are 
              passionate about education, health, or providing support during times of crisis, there is 
              a place for you on our team.
            </p>
            <ul className="space-y-3 mb-8">
              {['Flexible volunteering hours', 'Certificate of appreciation', 'Skill development workshops', 'Network with like-minded individuals'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={handleVolunteer}
              className="btn-primary text-base flex items-center gap-2 group relative overflow-hidden"
            >
              <Users className="w-5 h-5" />
              Become a Volunteer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="glass-strong rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4 shadow-lg shadow-primary-500/30">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Join 500+ Volunteers</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Be part of India's biggest student-led NGO</p>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  />
                  <button
                    onClick={handleVolunteer}
                    className="w-full btn-primary justify-center"
                  >
                    Sign Up to Volunteer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
