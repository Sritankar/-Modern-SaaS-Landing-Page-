import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Palette, 
  Target, 
  Globe, 
  Shield,
  Workflow,
  MessageSquare
} from 'lucide-react';
import Card from './Card';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create compelling copy, visuals, and campaigns in seconds with our advanced AI engine.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into campaign performance with real-time data and predictive analytics.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Brand Consistency',
      description: 'Maintain brand identity across all channels with automated style guides and templates.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach the right audience with AI-powered segmentation and behavioral analysis.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Marketing',
      description: 'Deploy campaigns across social media, email, web, and mobile from one platform.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2 compliance and end-to-end encryption.',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and create sophisticated marketing workflows.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: '24/7 AI Assistant',
      description: 'Get instant help and recommendations from our intelligent virtual assistant.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="text-gradient block">Modern Marketers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns 
            with the power of artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover className="h-full group cursor-pointer">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} p-4 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <Card glass className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  See It in Action
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Watch how ADmyBRAND AI Suite transforms your marketing workflow 
                  with intelligent automation and data-driven insights.
                </p>
                <div className="space-y-4">
                  {['Generate content in seconds', 'Analyze performance metrics', 'Optimize campaigns automatically'].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      <span className="text-gray-700">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative p-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">Campaign Performance</h4>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="opacity-80">Impressions</span>
                        <span className="font-semibold">2.4M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-80">Engagement</span>
                        <span className="font-semibold text-green-300">+34%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-80">ROI</span>
                        <span className="font-semibold text-green-300">287%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;