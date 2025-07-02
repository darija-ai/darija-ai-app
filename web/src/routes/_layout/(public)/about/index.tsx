import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/(public)/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex py-32 min-h-screen max-w-7xl m-auto">
      <AboutPage />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="container flex flex-col lg:px-16">
      {/* Hero Section */}
      <div className="mb-20">
        <h1 className="text-5xl md:text-6xl font-semibold text-black leading-tight mb-8">
          How it's all started.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          We're on a mission to transform financial services by harnessing vast
          amounts of untapped financial data.
        </p>
      </div>

      {/* Stats Section */}
      <div className="mb-20">
        <p className="text-sm font-medium text-black mb-8 tracking-wider uppercase">
          By the numbers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              $150M
            </div>
            <div className="text-gray-500 text-sm">Raised</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              20K
            </div>
            <div className="text-gray-500 text-sm">Companies</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              1.3B
            </div>
            <div className="text-gray-500 text-sm">Monthly transactions</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              1.5K
            </div>
            <div className="text-gray-500 text-sm">Connections per minute</div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Financial services have changed, are changing, and will continue to
            change — for the better. Now is the time for finance to be
            developer-first and API-driven. But in order to do this — it needs a
            new foundation.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            We were always told that banks can't be platforms.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Everyone tried fixing the problem by layering APIs on legacy
            systems, creating abstractions and inefficiencies. We have spent
            years building and scaling companies like Plaid, Stripe, and Affirm,
            confronting these limitations firsthand. The current solutions
            aren't good enough. We believe that banking infrastructure must be
            reimagined as an API platform. But we had to start from ground zero.
          </p>
        </div>
      </div>
    </div>
  );
}
