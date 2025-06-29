import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="/hero-bg3.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <div className="w-full flex flex-col items-center justify-center max-w-5xl text-orange-50 text-center px-4 mt-12">
            <div className="flex flex-col items-center space-y-4 mb-8">
              <button
                onClick={() => navigate({ to: "/sign-in" })}
                className="bg-white/30 backdrop-blur-none rounded-full px-6 py-1 flex items-center gap-2"
              >
                make everlasting impact
                <ArrowRight size={16} />
              </button>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6">
              The All in one
              <span className="block">Moroccan Arabic Annotator</span>
            </h1>
            <p className="text-xl md:text-xl mb-8 text-amber-150">
              Experience the most accurate and contextually relevant <br />{" "}
              English to Arabic translations, using state-of-the-art AI language
              models
              <br /> optimized for Arabic dialects.
            </p>

            <div className="flex space-x-2 pt-4">
              <button
                onClick={() => navigate({ to: "/sign-in" })}
                className="bg-white/10 backdrop-blur-none text-white px-8 py-3 bg-cream-50 font-semibold rounded-full hover:bg-orange-50 hover:text-black transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                Open App
                <ExternalLink size={18} />
              </button>
              <button
                onClick={() => navigate({ to: "/sign-in" })}
                className="bg-white text-black px-6 py-3 bg-cream-50 border-1 font-semibold rounded-full hover:bg-orange-50 hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              <p>Translation Accuracy</p>
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
            <button
              onClick={() => navigate({ to: "/sign-in" })}
              className="px-8 py-3 bg-black text-orange-50 font-semibold rounded-lg hover:bg-teal-800 transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
