import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    review:
      "NorthPeak Digital completely transformed our online presence. The team delivered a fast, modern website that exceeded our expectations.",
  },
  {
    name: "Michael Brown",
    role: "Founder, GrowFast",
    review:
      "Professional communication, clean code, and an outstanding design. Highly recommended for any business looking to grow online.",
  },
  {
    name: "Emily Wilson",
    role: "Marketing Head, ShopEase",
    review:
      "Our website is now faster, mobile-friendly and has significantly improved customer engagement.",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Trusted by startups and businesses worldwide.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-slate-300 leading-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-white font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;