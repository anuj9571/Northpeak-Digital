import { FaProjectDiagram, FaUsers, FaStar, FaHeadset } from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram size={30} />,
    number: "120+",
    title: "Projects Completed",
  },
  {
    icon: <FaUsers size={30} />,
    number: "80+",
    title: "Happy Clients",
  },
  {
    icon: <FaStar size={30} />,
    number: "98%",
    title: "Client Satisfaction",
  },
  {
    icon: <FaHeadset size={30} />,
    number: "24/7",
    title: "Support",
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto text-blue-500 mb-5">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-white">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-400">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;