const experiences = [
  {
    company: "Electronic Arts (EA)",
    role: "Graduate Research Intern (Mitacs)",
    location: "Edmonton, Canada",
    period: "May 2025 – Aug 2026",
    bullets: [
      {
        title: "Blueprint Diff Tooling",
        body: "Reverse-engineered the Unreal Engine Blueprint text format through black-box analysis and implemented text generation from SQL records for a Blueprint diff tool.",
      },
      {
        title: "RAG Agent Query Generation",
        body: "Developed Go query-generation tools for an internal RAG agent used by 315 users, translating LLM-extracted intent into valid Elasticsearch aggregation queries for summaries and reports.",
      },
      {
        title: "Agent Reliability",
        body: "Analyzed user conversations to identify agent failures and debugged issues in internal data retrieval and analysis workflows.",
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
