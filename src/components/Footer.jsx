import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              NorthPeak
            </h2>
            <p className="text-slate-400 mt-5 leading-7">
              We build fast, modern and scalable websites for startups and
              growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#home" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-blue-500 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Web Development</li>
              <li>UI / UX Design</li>
              <li>SEO Optimization</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-center">
            © 2026 NorthPeak Digital. All Rights Reserved.
          </p>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Digital Heroes website"
            className="text-blue-500 hover:underline mt-4 md:mt-0"
          >
            Built for Digital Heroes Training Task
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;