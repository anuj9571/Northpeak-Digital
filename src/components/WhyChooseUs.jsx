import {
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    desc: "Optimized websites that load quickly and improve user experience.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    desc: "Built with security best practices and reliable technologies.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "We complete every project within the promised timeline.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Modern Technology",
    desc: "React, Node.js and modern tools to build scalable websites.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div>

          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            WHY CHOOSE US
          </p>

          <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
            We Build Digital
            <span className="text-blue-500"> Experiences </span>
            That Drive Results.
          </h2>

          <p className="text-slate-400 mt-6 leading-8">
            Our team creates fast, secure and modern websites
            designed to help businesses attract more customers,
            improve online presence and grow faster.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl text-white font-semibold transition">
            Learn More
          </button>

        </div>

        {/* Right Side */}

        <div className="grid sm:grid-cols-2 gap-6">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >

              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-5">

                {item.icon}

              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;