import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Card from './Card';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: 'How does ADmyBRAND AI Suite work?',
      answer: 'ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your brand, target audience, and market trends. It then generates personalized marketing content, optimizes campaign performance, and provides actionable insights to grow your business.'
    },
    {
      question: 'What types of content can the AI generate?',
      answer: 'Our AI can generate various types of marketing content including social media posts, email campaigns, blog articles, ad copy, product descriptions, video scripts, and visual design concepts. All content maintains your brand voice and style guidelines.'
    },
    {
      question: 'How accurate is the AI-generated content?',
      answer: 'Our AI achieves 98.7% accuracy rate based on user feedback and engagement metrics. The system continuously learns from your preferences and performance data to improve content quality over time.'
    },
    {
      question: 'Can I integrate with existing marketing tools?',
      answer: 'Yes! ADmyBRAND AI Suite integrates with 100+ popular marketing tools including Google Analytics, Facebook Ads, Mailchimp, HubSpot, Salesforce, Slack, and many more through our comprehensive API.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We use enterprise-grade security with SOC2 compliance, end-to-end encryption, and secure data centers. Your data is never shared with third parties and you maintain full ownership of all content and insights.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes, we provide 24/7 customer support through multiple channels including live chat, email, and phone. Premium and Enterprise plans also include dedicated account managers and priority support.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data before cancellation.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial. You can upgrade to a paid plan anytime during or after the trial period.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="text-gradient block">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about ADmyBRAND AI Suite
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <Plus className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </motion.a>
            <motion.a
              href="/blog"
              whileHover={{ scale: 1.05 }}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Visit Help Center
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;