import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import Button from './Button';
import Card from './Card';

const DemoVideoSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      time: '0:15',
      title: 'AI Content Generation',
      description: 'Watch how our AI creates compelling marketing copy in seconds'
    },
    {
      time: '0:45',
      title: 'Campaign Analytics',
      description: 'See real-time performance metrics and insights'
    },
    {
      time: '1:20',
      title: 'Multi-Channel Distribution',
      description: 'Deploy campaigns across all channels simultaneously'
    },
    {
      time: '1:55',
      title: 'Performance Optimization',
      description: 'Automatic A/B testing and campaign optimization'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See ADmyBRAND AI
            <span className="text-gradient block">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our AI-powered marketing suite transforms your workflow 
            and delivers exceptional results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden relative group">
              <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <motion.button
                    onClick={() => setIsVideoOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-opacity-100 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </motion.button>
                </div>

                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full"
                      animate={{
                        x: [0, Math.random() * 400],
                        y: [0, Math.random() * 300],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                    />
                  ))}
                </div>

                {/* Demo UI Elements */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">Campaign Dashboard</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white">
                        <span>Active Campaigns</span>
                        <span>24</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-1">
                        <motion.div
                          className="bg-gradient-to-r from-green-400 to-blue-400 h-1 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '75%' }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-white text-xs mb-1">ROI Increase</div>
                    <div className="text-green-400 text-lg font-bold">+287%</div>
                  </div>
                </div>
              </div>

              {/* Video Duration */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                2:30
              </div>
            </Card>

            {/* Video Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Demo Views', value: '50K+' },
                { label: 'Conversion Rate', value: '23%' },
                { label: 'User Rating', value: '4.9/5' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What You'll See in the Demo
              </h3>
              <p className="text-gray-600">
                A complete walkthrough of ADmyBRAND AI Suite's key features 
                and how they work together to transform your marketing.
              </p>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold group-hover:scale-105 transition-transform">
                  {feature.time}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-6">
              <Button
                size="lg"
                onClick={() => setIsVideoOpen(true)}
                leftIcon={<Play className="w-5 h-5" />}
              >
                Watch Full Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isVideoOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
                onClick={() => setIsVideoOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-4xl mx-4"
              >
                <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                  {/* Video Controls */}
                  <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <button className="p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsVideoOpen(false)}
                      className="p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Video Player Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
                    {/* Simulated Video Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-white text-center"
                      >
                        <Play className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-xl font-semibold">Demo Video Playing</p>
                        <p className="text-blue-200">ADmyBRAND AI Suite Walkthrough</p>
                      </motion.div>
                    </div>

                    {/* Animated Elements */}
                    <div className="absolute top-8 left-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-2">Live Demo</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-white">
                          <span>Campaigns Generated</span>
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            127
                          </motion.span>
                        </div>
                        <div className="flex justify-between text-sm text-white">
                          <span>ROI Improvement</span>
                          <span className="text-green-400">+234%</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                      <div className="flex items-center space-x-4 text-white">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="p-1 hover:bg-white hover:bg-opacity-20 rounded"
                        >
                          <Play className="w-4 h-4" />
                        </button>
                        <div className="flex-1 bg-white bg-opacity-20 rounded-full h-1">
                          <motion.div
                            className="bg-blue-500 h-1 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '45%' }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          />
                        </div>
                        <span className="text-sm">1:15 / 2:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DemoVideoSection;