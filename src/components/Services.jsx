import {
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaMobileAlt,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Modern and high-performance websites built with the latest technologies.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    desc: "Clean, user-friendly and visually appealing interfaces.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Improve search rankings and grow your online visibility.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Perfect experience across desktop, tablet and mobile devices.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    desc: "Scalable online stores with secure payment integration.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    desc: "Reach more customers and increase business growth.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            What We Offer
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            We build modern digital solutions that help
            businesses grow faster and stand out online.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition">

                {service.icon}

              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {service.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {service.desc}
              </p>

              <button
                className="mt-6 text-blue-500 font-semibold hover:text-white transition"
              >
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;