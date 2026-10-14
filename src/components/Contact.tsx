export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <div className="w-12 h-1 bg-red-600 rounded mb-6 mx-auto" />

        <p className="text-gray-600 leading-relaxed mb-10">
          I&apos;m open to software engineering and research opportunities.
          Whether you have a question, a collaboration idea, or just want to
          connect — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:bruce.guo.ca@gmail.com"
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            bruce.guo.ca@gmail.com
          </a>

          <a
            href="/Guo_Resume.pdf"
            download
            className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-400 hover:text-red-600 transition-colors w-full sm:w-auto justify-center"
          >
            <svg
              className="w-5 h-5"
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

        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Edmonton, Canada
        </div>
      </div>
    </section>
  );
}
