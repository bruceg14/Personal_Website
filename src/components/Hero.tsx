export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 pt-20"
    >
      <div className="max-w-3xl text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Seeking Full-Stack & Software Engineering Roles | Available Sept 2026
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          Bruce Guo
        </h1>

        <p className="text-xl sm:text-2xl text-red-600 font-medium mb-6">
          M.Sc. Computing Science · Mitacs Fellow
        </p>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Building scalable AI systems and high-performance developer tooling.
          Currently researching static analysis for Visual Programming Languages
          at the University of Alberta, with industry experience at{" "}
          <span className="font-semibold text-gray-800">Electronic Arts</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-400 hover:text-red-600 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/Guo_Resume.pdf"
            download
            className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors text-sm font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
