import { useState } from 'react';

const LandingPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-cream-50 text-gray-900">

      {/* Hero Section */}
      <section className="relative pt-24 bg-red-950 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-900 via-burgundy-800/90 to-transparent z-10"></div>
          
          {/* Left content */}
          <div className="relative z-20 w-full md:w-1/2 text-white mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Seamless Arabic Translation
              <span className="block">Powered by AI.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-cream-100 max-w-lg">
              Experience the most accurate and contextually relevant English to Arabic translations, using state-of-the-art AI language models optimized for Arabic dialects.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <div className="relative flex-grow max-w-md">
                <input 
                  type="text" 
                  placeholder="Enter a phrase to translate..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cream-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="px-6 py-3 bg-cream-50 text-burgundy-800 font-semibold rounded-lg hover:bg-cream-100 transition-colors whitespace-nowrap">
                Translate Now
              </button>
            </div>

            <div className="flex items-center text-cream-100">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No API key required. Try it instantly.</span>
            </div>
          </div>
          
          {/* Right content - Illustration */}
          <div className="relative z-20 w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-64 md:h-96">
              <div className="absolute inset-0 bg-burgundy-600/30 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-burgundy-700/60 rounded-3xl transform -rotate-3"></div>
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl overflow-hidden">
                <img src="../../../public/herosection.jpg" alt="Arabic AI Translation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes for visual interest */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-burgundy-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cream-100/10 rounded-full filter blur-2xl"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy-800 mb-4">Our Translation Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">Discover our comprehensive suite of Arabic language AI services designed for businesses and individuals alike.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-cream-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-burgundy-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-burgundy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-700 mb-3">Text Translation</h3>
              <p className="text-gray-600 mb-4">Instant and accurate translations between English and Arabic for any text content with cultural nuance preservation.</p>
              <a href="#" className="inline-flex items-center text-burgundy-600 font-medium hover:text-burgundy-700">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-cream-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-burgundy-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-burgundy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-700 mb-3">Document Translation</h3>
              <p className="text-gray-600 mb-4">Full document translation with formatting preservation for business reports, legal documents, and academic papers.</p>
              <a href="#" className="inline-flex items-center text-burgundy-600 font-medium hover:text-burgundy-700">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-cream-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-burgundy-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-burgundy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7.001 7.001 0 01-7-7m7 7v4m0-11V3m0 0a7 7 0 017 7m-7-7a7 7 0 00-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-700 mb-3">Content Optimization</h3>
              <p className="text-gray-600 mb-4">AI-powered content optimization for Arabic-speaking audiences, ensuring cultural relevance and engagement.</p>
              <a href="#" className="inline-flex items-center text-burgundy-600 font-medium hover:text-burgundy-700">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-burgundy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2 text-cream-50">99.8%</h3>
              <p className="text-cream-100">Translation Accuracy</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-cream-50">10M+</h3>
              <p className="text-cream-100">Words Translated Daily</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-cream-50">24/7</h3>
              <p className="text-cream-100">Availability</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-cream-50">5,000+</h3>
              <p className="text-cream-100">Business Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy-800 mb-4">What Our Users Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">Hear from businesses and individuals who've transformed their Arabic communication with our AI.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-burgundy-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Ahmed Hassan</h4>
                  <p className="text-gray-500">Marketing Director, Global Tech</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg italic">
                "ArabicAI has revolutionized our marketing campaigns in the Middle East. The translations are not just accurate but culturally appropriate, which has significantly increased our engagement and conversion rates."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-burgundy-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cream-50">Ready to bridge the language gap?</h2>
          <p className="max-w-2xl mx-auto text-cream-100 text-lg mb-8">Start translating your content with industry-leading accuracy today. No credit card required.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 bg-white text-burgundy-700 font-semibold rounded-lg hover:bg-cream-100 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-burgundy-900 text-cream-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">ArabicAI</h3>
              <p className="mb-4">Advanced AI translation services optimized for Arabic language and culture.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-cream-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-cream-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-cream-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-burgundy-700 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} ArabicAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;