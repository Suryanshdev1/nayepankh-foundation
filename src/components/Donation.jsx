import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Shield, Receipt, ArrowRight } from 'lucide-react';

const amounts = ['Rs.500', 'Rs.1,000', 'Rs.2,500', 'Rs.5,000', 'Rs.10,000', 'Custom'];

export default function Donation() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedAmount, setSelectedAmount] = useState('Rs.1,000');

  return (
    <section id="donate" className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Support Our Cause
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Your Donation <span className="gradient-text dark:gradient-text-dark">Changes Lives</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Every rupee you contribute goes directly to helping those in need. With your support, 
                we can continue providing education, meals, healthcare, and hope to thousands of 
                underprivileged individuals.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">100% Secure</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Your transactions are encrypted and secure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                    <Receipt className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">80G Tax Benefit</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">All donations are tax-exempt under 80G of Income Tax Act.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 shadow-2xl shadow-primary-500/20 text-white">
                <h3 className="font-display text-2xl font-bold mb-2">Make a Donation</h3>
                <p className="text-blue-100 mb-6">Choose an amount that works for you</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-white text-primary-700 shadow-lg'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <div className="text-sm text-blue-100 mb-1">Your impact</div>
                  <div className="font-semibold">
                    {selectedAmount === 'Rs.500' && 'Feeds 10 children for a day'}
                    {selectedAmount === 'Rs.1,000' && 'Provides books for 5 students'}
                    {selectedAmount === 'Rs.2,500' && "Sponsors a child's education for a month"}
                    {selectedAmount === 'Rs.5,000' && 'Funds a health camp for 50 people'}
                    {selectedAmount === 'Rs.10,000' && 'Supports a tuition center for a month'}
                    {selectedAmount === 'Custom' && 'Every contribution makes a difference'}
                  </div>
                </div>

                <button className="w-full bg-white text-primary-700 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                  <Heart className="w-5 h-5" />
                  Donate {selectedAmount !== 'Custom' ? selectedAmount : 'Now'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-blue-200 mt-4">
                  UPI, Card, Net Banking & all major wallets accepted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
