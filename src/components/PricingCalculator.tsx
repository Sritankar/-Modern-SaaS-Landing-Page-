import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Calculator } from 'lucide-react';
import Button from './Button';
import Card from './Card';

const PricingCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [users, setUsers] = useState(5);
  const [campaigns, setCampaigns] = useState(10);
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      basePrice: 29,
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 users',
        '5 campaigns per month',
        'Basic analytics',
        'Email support',
        'Standard templates'
      ],
      limitations: [
        'No custom branding',
        'Limited integrations'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      basePrice: 99,
      description: 'For growing marketing teams',
      features: [
        'Up to 10 users',
        'Unlimited campaigns',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'API access',
        'Team collaboration'
      ],
      limitations: [
        'Limited white-label options'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      basePrice: 299,
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Unlimited campaigns',
        'Enterprise analytics',
        'Dedicated support',
        'Full customization',
        'Advanced API',
        'SSO integration',
        'White-label solution'
      ],
      limitations: []
    }
  ];

  const calculatePrice = (plan: any) => {
    let price = plan.basePrice;
    
    if (plan.id === 'professional') {
      price += Math.max(0, users - 10) * 15;
      price += Math.max(0, campaigns - 20) * 5;
    } else if (plan.id === 'enterprise') {
      price += Math.max(0, users - 50) * 10;
    }

    return isAnnual ? Math.round(price * 12 * 0.8) : price;
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <span className="text-gradient block">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include our core AI features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 4 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              />
            </motion.button>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card glass className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-gray-900">Calculate Your Price</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Users: {users}
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={users}
                  onChange={(e) => setUsers(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaigns per Month: {campaigns}
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={campaigns}
                  onChange={(e) => setCampaigns(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                hover 
                className={`relative h-full ${
                  plan.popular ? 'ring-2 ring-blue-600 shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${calculatePrice(plan)}
                    </span>
                    <span className="text-gray-600">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>

                  {isAnnual && (
                    <p className="text-sm text-green-600 font-medium">
                      Save ${Math.round(calculatePrice(plan) * 0.25)} per year
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center opacity-60">
                      <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  size="lg"
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need a custom solution? Have questions about our pricing?
          </p>
          <Button variant="ghost" size="lg">
            Contact Our Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCalculator;