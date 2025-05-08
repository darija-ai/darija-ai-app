import { useNavigate } from "@tanstack/react-router";

const LandingPage = () => {

  const navigate = useNavigate()

  return (
    <div className=" bg-orange-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/herosection2.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute bg-black/40 inset-0"></div>
        </div>

        <div className="container mx-auto px-4 py-16 flex flex-col items-center relative z-20 text-center">
          <div className="w-full max-w-2xl text-orange-50 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Seamless Arabic Translation
              <span className="block">Powered by AI.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-cream-100 mx-auto">
              Experience the most accurate and contextually relevant English to
              Arabic translations, using state-of-the-art AI language models
              optimized for Arabic dialects.
            </p>

            <div className="flex flex-col items-center space-y-4 mb-8">
              <button onClick={() => navigate({ to: '/sign-in' })} className="px-6 py-3 bg-cream-50 border-1 font-semibold rounded-lg hover:bg-orange-50 hover:text-black transition-colors whitespace-nowrap cursor-pointer">
                Start Now
              </button>
            </div>

            <div className="flex items-center justify-center text-cream-100">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No API key required. Try it instantly.</span>
            </div>
          </div>
        </div>

        {/* Abstract shapes for visual interest */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-burgundy-500/20 rounded-full filter blur-3xl z-10"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cream-100/10 rounded-full filter blur-2xl z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy-800 mb-4">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Discover our comprehensive suite of Arabic language AI services
              designed for businesses and individuals alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-cream-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-burgundy-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-burgundy-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-700 mb-3">
                Model 1
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-burgundy-600 font-medium hover:text-burgundy-700"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-cream-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-burgundy-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-burgundy-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-700 mb-3">
                Model 2
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

              </p>
              <a
                href="#"
                className="inline-flex items-center text-burgundy-600 font-medium hover:text-burgundy-700"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-cream-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-burgundy-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-burgundy-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7.001 7.001 0 01-7-7m7 7v4m0-11V3m0 0a7 7 0 017 7m-7-7a7 7 0 00-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-700 mb-3">
                Model 3
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-burgundy-600 font-medium hover:text-burgundy-700"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-orange-50 text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center ">
            <div>
              <h3 className="text-4xl font-bold mb-2">99.8%</h3>
              <p >Translation Accuracy</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10M+</h3>
              <p>Words Translated Daily</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p>Availability</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p>Business Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-50 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cream-50">
            Ready to bridge the language gap?
          </h2>
          <p className="max-w-2xl mx-auto text-cream-100 text-lg mb-8">
            Start translating your content with industry-leading accuracy today.
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={() => navigate({ to: '/sign-in' })} className="px-8 py-3 bg-black text-orange-50 font-semibold rounded-lg hover:bg-teal-800 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
