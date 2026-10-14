const experiences = [
  {
    company: "Electronic Arts (EA)",
    role: "Graduate Research Intern (Mitacs)",
    location: "Edmonton, Canada",
    period: "May 2025 – Present",
    bullets: [
      {
        title: "Agentic RAG & LLM Orchestration",
        body: "Architected and implemented distributed LLM agent strategies in Go to automate complex report generation. Developed Agentic RAG workflows with autonomous tool-calling to synthesize natural language prompts into actionable developer metrics.",
      },
      {
        title: "Data Pipeline Engineering",
        body: "Designed an enrichment pipeline to ingest high-dimensional data into Elasticsearch via a multi-stage lookup process — extracting key identifiers, retrieving metadata, and merging disparate datasets into a unified, real-time searchable index.",
      },
      {
        title: "High-Performance Tooling",
        body: "Built a proprietary binary-to-textual conversion engine for Unreal Engine Blueprints, enabling high-speed HTML rendering of visual logic from SQL databases without requiring engine compilation.",
      },
    ],
  },
  {
    company: "University of Alberta",
    role: "Teaching Assistant",
    location: "Edmonton, Canada",
    period: "Sep 2024 – Apr 2025",
    bullets: [
      {
        title: "Technical Instruction",
        body: "Led weekly labs and office hours for CMPUT 301 (Software Engineering) and CMPUT 404 (Web Development), guiding students through full-stack system design and debugging.",
      },
      {
        title: "Code Assessment",
        body: "Evaluated programming assignments with code reviews focused on design patterns, RESTful APIs, and Git version control best practices.",
      },
      {
        title: "Student Support",
        body: "Provided hands-on troubleshooting for frontend frameworks, backend database integrations, and object-oriented design patterns in student-led projects.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
        <div className="w-12 h-1 bg-red-600 rounded mb-10" />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.company}
                  </h3>
                  <p className="text-red-600 font-medium">{exp.role}</p>
                </div>
                <div className="text-sm text-gray-500 text-right shrink-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.bullets.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <span className="text-red-500 mt-1 shrink-0">▸</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-semibold text-gray-900">
                        {b.title}:{" "}
                      </span>
                      {b.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
