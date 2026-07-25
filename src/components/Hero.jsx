import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div>
          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            Build Faster.
            <br />
            Grow Smarter.
            <br />
            <span className="text-blue-500">
              Stand Out Online.
            </span>
          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
            We design and develop premium websites that help
            businesses increase their online presence,
            generate more leads and grow faster.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button
              aria-label="Get Started"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl text-white font-semibold flex items-center gap-3 transition"
            >
              Get Started
              <FaArrowRight />
            </button>

            <button
              aria-label="Watch Demo"
              className="border border-slate-700 hover:border-blue-500 hover:text-blue-400 px-7 py-4 rounded-xl text-white flex items-center gap-3 transition"
            >
              <FaPlayCircle />
              Watch Demo
            </button>

          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">

            <div>
              <h2 className="text-3xl font-bold text-white">
                120+
              </h2>
              <p className="text-slate-300">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                98%
              </h2>
              <p className="text-slate-300">
                Satisfaction
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                24/7
              </h2>
              <p className="text-slate-300">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* Right Dashboard */}
        <div className="relative">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-600/20">

            <div className="flex gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            <div className="bg-slate-800 rounded-2xl h-44 mb-6 flex items-center justify-center">
              <h2 className="text-blue-500 text-3xl font-bold">
                Analytics
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-slate-800 rounded-xl h-32 flex items-center justify-center text-blue-400 font-semibold">
                Visitors
              </div>

              <div className="bg-blue-600 rounded-xl h-32 flex items-center justify-center text-white font-semibold">
                Growth +84%
              </div>

              <div className="bg-slate-800 rounded-xl h-32 flex items-center justify-center text-blue-400 font-semibold">
                Sales
              </div>

              <div className="bg-slate-800 rounded-xl h-32 flex items-center justify-center text-blue-400 font-semibold">
                Revenue
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;