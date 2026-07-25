import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-4">
            We'd love to hear about your next project.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-3xl text-white font-bold">
              Contact Information
            </h3>

            <p className="text-slate-400 mt-4">
              Feel free to reach out anytime.
            </p>

            <div className="space-y-8 mt-10">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex justify-center items-center text-blue-500">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Address
                  </h4>

                  <p className="text-slate-400">
                    New Delhi, India
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex justify-center items-center text-blue-500">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <p className="text-slate-400">
                    hello@northpeak.com
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex justify-center items-center text-blue-500">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <p className="text-slate-400">
                    +91 98765 43210
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white outline-none mb-2"
            />

            <p className="text-red-400 text-sm mb-4">
              {errors.name}
            </p>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white outline-none mb-2"
            />

            <p className="text-red-400 text-sm mb-4">
              {errors.email}
            </p>

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white outline-none mb-2"
            />

            <p className="text-red-400 text-sm mb-6">
              {errors.message}
            </p>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl text-white font-semibold">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;