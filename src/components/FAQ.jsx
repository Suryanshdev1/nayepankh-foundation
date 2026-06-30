import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How can I donate to NayePankh Foundation?',
    a: 'You can donate through our website using UPI, credit/debit cards, net banking, or wallets. All donations are secure and eligible for tax exemption under 80G.',
  },
  {
    q: 'Is NayePankh Foundation government registered?',
    a: 'Yes, we are registered with the UP Government and hold 80G and 12A certifications, making all donations tax-deductible.',
  },
  {
    q: 'Can I volunteer if I am not from Kanpur or Ghaziabad?',
    a: 'Absolutely! We have remote volunteering opportunities and are expanding to new cities. You can contribute through digital campaigns, content creation, and online mentoring.',
  },
  {
    q: 'How is my donation utilized?',
    a: 'We maintain complete transparency. 85% of donations go directly to our programs (education, health, food), while 15% covers operational costs. We publish annual impact reports.',
  },
  {
    q: 'Do you provide donation receipts?',
    a: 'Yes, every donor receives an instant digital receipt via email, along with an 80G certificate for tax exemption purposes.',
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom max-w-3xl" ref={ref}>
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked <span className="gradient-text dark:gradient-text-dark">Questions</span>
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <span className="font-semibold text-slate-900 dark:text-white pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
              >
                <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
