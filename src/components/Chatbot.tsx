import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';
import Button from './Button';
import Card from './Card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you learn more about ADmyBRAND AI Suite today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    'pricing': 'Our pricing starts at $29/month for the Starter plan, $99/month for Professional, and $299/month for Enterprise. Each plan includes AI-powered content generation, analytics, and 24/7 support. Would you like to see a detailed comparison?',
    'features': 'ADmyBRAND AI Suite includes AI content generation, advanced analytics, brand consistency tools, precision targeting, multi-channel marketing, enterprise security, workflow automation, and a 24/7 AI assistant. Which feature interests you most?',
    'trial': 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can sign up for your free trial by clicking the "Start Free Trial" button on our homepage.',
    'support': 'We provide 24/7 customer support through live chat, email, and phone. Premium and Enterprise customers also get dedicated account managers and priority support. How can I assist you today?',
    'integration': 'We integrate with 100+ popular tools including Google Analytics, Facebook Ads, Mailchimp, HubSpot, Salesforce, Slack, and many more. Our comprehensive API makes it easy to connect with your existing workflow.',
    'security': 'We use enterprise-grade security with SOC2 compliance, end-to-end encryption, and secure data centers. Your data is never shared with third parties and you maintain full ownership of all content.',
    'demo': 'I\'d be happy to show you a demo! You can watch our product demo video on the homepage, or I can connect you with our sales team for a personalized demonstration. Which would you prefer?',
    'hello': 'Hello! Welcome to ADmyBRAND AI Suite. I\'m here to help you discover how our AI-powered marketing tools can transform your business. What would you like to know?',
    'hi': 'Hi there! Great to meet you. I\'m your AI assistant for ADmyBRAND AI Suite. How can I help you today?',
    'default': 'That\'s a great question! I\'d recommend speaking with our sales team for detailed information. You can also explore our comprehensive help center or schedule a personalized demo. What specific aspect would you like to learn more about?'
  };

  const getQuickReplies = () => [
    'Show me pricing',
    'What features do you offer?',
    'Start free trial',
    'Book a demo',
    'Contact support'
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return botResponses.pricing;
    } else if (message.includes('feature') || message.includes('what') || message.includes('can')) {
      return botResponses.features;
    } else if (message.includes('trial') || message.includes('free')) {
      return botResponses.trial;
    } else if (message.includes('support') || message.includes('help')) {
      return botResponses.support;
    } else if (message.includes('integrate') || message.includes('connect')) {
      return botResponses.integration;
    } else if (message.includes('security') || message.includes('safe')) {
      return botResponses.security;
    } else if (message.includes('demo') || message.includes('show')) {
      return botResponses.demo;
    } else if (message.includes('hello') || message.includes('hi')) {
      return botResponses.hello;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '60px' : '500px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-40 border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs opacity-80">Usually replies instantly</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-xs ${
                        message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.isBot 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>
                        <div className={`p-3 rounded-2xl ${
                          message.isBot 
                            ? 'bg-white text-gray-800 shadow-sm' 
                            : 'bg-blue-600 text-white'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.isBot ? 'text-gray-500' : 'text-blue-100'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-white p-3 rounded-2xl shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="p-2 bg-white border-t">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {getQuickReplies().map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(reply)}
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim()}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;