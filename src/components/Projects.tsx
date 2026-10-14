const projects = [
  {
    name: "Oak",
    tagline: "Branching LLM Chat App",
    url: "https://chatwithoak.com",
    summary:
      "A full-stack LLM chat app with persistent branching conversations — open side threads from selected text and merge them back into the main conversation.",
    highlights: [
      {
        label: "Streaming APIs",
        text: "Implemented Next.js APIs for streaming Gemini responses through server-sent events (SSE), with optional context sharing between main and branch conversations.",
      },
      {
        label: "Data Model",
        text: "Modeled conversations, messages, and branch relationships in PostgreSQL, supporting persistent histories, ordered messages, and cascading deletion.",
      },
      {
        label: "Auth & Deployment",
        text: "Integrated Google sign-in through Supabase Auth and deployed the app on a Linux server using Docker and Nginx.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Gemini API",
      "Docker",
    ],
  },
  {
    name: "Atex",
    tagline: "Web LaTeX Editor",
    url: "https://atex.ink",
    summary:
      "A full-stack LaTeX editor with multi-file editing, autosave, and side-by-side PDF previews, built with React and FastAPI.",
    highlights: [
      {
        label: "Async Compilation",
        text: "Moved synchronous compilation to Redis-backed Celery workers, offloading multi-file Tectonic builds from API requests and delivering generated PDFs through signed URLs.",
      },
      {
        label: "AI Rewrites",
        text: "Integrated Gemini for academic rewrites, validating structured responses and designing prompts to preserve LaTeX commands.",
      },
      {
        label: "Infrastructure",
        text: "Orchestrated separate API, compilation worker, Redis, and Nginx services using Docker Compose.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Celery",
      "Redis",
      "Supabase",
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
              <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                  <p className="text-red-600 font-medium text-sm mt-0.5">
                    {p.tagline}
                  </p>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium shrink-0"
                >
                  {p.url.replace("https://", "")} ↗
                </a>
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
