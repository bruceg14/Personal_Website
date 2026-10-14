const projects = [
  {
    name: "ATex",
    tagline: "AI-Assisted Web LaTeX Environment",
    summary:
      "A high-performance, web-based LaTeX environment built to handle real-time document compilation and AI-assisted troubleshooting within a containerized microservices architecture.",
    highlights: [
      {
        label: "Architecture",
        text: "Responsive React + FastAPI application using Tectonic for high-performance containerized LaTeX compilation. Integrated Supabase for relational data storage and authentication.",
      },
      {
        label: "System Design",
        text: "Asynchronous compilation workflow using Redis task queues. Integrated the Gemini API for AI-assisted error diagnostics and troubleshooting suggestions.",
      },
    ],
    stack: [
      "React",
      "FastAPI",
      "Python",
      "Redis",
      "Supabase",
      "Tectonic",
      "Gemini API",
      "Docker",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
        <div className="w-12 h-1 bg-red-600 rounded mb-10" />

        <div className="grid gap-8">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                <p className="text-red-600 font-medium text-sm mt-0.5">
                  {p.tagline}
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {p.summary}
              </p>

              <div className="space-y-3 mb-6">
                {p.highlights.map((h) => (
                  <div key={h.label} className="flex gap-3">
                    <span className="text-red-500 mt-1 shrink-0 text-sm">▸</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-semibold text-gray-900">
                        {h.label}:{" "}
                      </span>
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
