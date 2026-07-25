import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$299",
    desc: "Perfect for startups.",
    popular: false,
    features: [
      "1 Landing Page",
      "Responsive Design",
      "Basic SEO",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    price: "$699",
    desc: "Best for growing businesses.",
    popular: true,
    features: [
      "Up to 5 Pages",
      "Premium UI Design",
      "Advanced SEO",
      "Performance Optimization",
      "3 Months Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large businesses.",
    popular: false,
    features: [
      "Unlimited Pages",
      "Custom Features",
      "Dedicated Developer",
      "Priority Support",
    ],
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            PRICING
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Flexible Pricing
          </h2>

          <p className="text-slate-400 mt-5">
            Choose the perfect plan for your business.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-3xl border transition duration-300 hover:-translate-y-2
              ${
                plan.popular
                  ? "border-blue-500 bg-slate-900 shadow-[0_0_35px_rgba(37,99,235,.35)]"
                  : "border-slate-800 bg-slate-900"
              }`}
            >

              {plan.popular && (
                <span className="absolute top-5 right-5 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="p-8">

                <h3 className="text-3xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="text-slate-400 mt-2">
                  {plan.desc}
                </p>

                <h1 className="text-5xl font-bold text-blue-500 my-8">
                  {plan.price}
                </h1>

                <div className="space-y-5">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >

                      <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
                        <FaCheck />
                      </div>

                      <span className="text-slate-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  className={`w-full mt-10 py-4 rounded-xl font-semibold transition
                  ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-800 hover:bg-blue-600 text-white"
                  }`}
                >
                  Get Started
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;