import { Card } from "@/shared/components/ui/card";
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
      <section>
            <div className="bg-white py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">Effortless Task Management</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Automate your tasks and workflows by connecting your favorite tools like Notion, Todoist, and more. AI-powered scheduling helps you stay on track and adapt to changing priorities.</p>
                    </div>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
                        <div className="space-y-4">
                            <Card
                                className="aspect-video overflow-hidden px-6"
                                variant="soft">
                                <Card className="h-full translate-y-6" />
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">Marketing Campaigns</h3>
                                <p className="text-muted-foreground my-4 text-lg">Effortlessly book and manage your meetings. Stay on top of your schedule.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card
                                className="aspect-video overflow-hidden p-6"
                                variant="soft">
                                <Card className="h-full" />
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">AI Meeting Scheduler</h3>
                                <p className="text-muted-foreground my-4 text-lg">Effortlessly book and manage your meetings. Stay on top of your schedule.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card
                                className="aspect-video overflow-hidden"
                                variant="soft">
                                <Card className="translate-6 h-full" />
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">AI Meeting Scheduler</h3>
                                <p className="text-muted-foreground my-4 text-lg">Effortlessly book and manage your meetings. Stay on top of your schedule.</p>
                            </div>
                        </div>
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
