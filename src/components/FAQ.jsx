import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 2–4 weeks depending on project requirements.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer ongoing maintenance, updates, security, and technical support.",
  },
  {
    question: "Will my website be mobile friendly?",
    answer:
      "Absolutely. Every website we build is fully responsive for mobile, tablet, and desktop.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign your current website with a modern UI and improved performance.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            FAQ
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 mt-5">
            Find answers to the most common questions.
          </p>
        </div>

        <div className="space-y-5">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-white font-medium text-lg">
                  {faq.question}
                </span>

                {active === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-blue-500" />
                )}
              </button>

              {active === index && (
                <div className="px-6 pb-5 text-slate-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;