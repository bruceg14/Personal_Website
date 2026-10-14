const skillGroups = [
  {
    category: "Languages",
    skills: ["Go", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "FastAPI", "Celery", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    category: "Tools",
    skills: ["Docker", "Docker Compose", "Nginx", "Linux", "Supabase", "pytest"],
  },
  {
    category: "AI / LLM Systems",
    skills: ["RAG Agents", "Gemini API", "SSE Streaming", "Prompt Design"],
  },
  {
    category: "Research Areas",
    skills: [
      "Static Analysis",
      "Mining Software Repositories",
      "Unreal Engine Blueprints",
      "Unity Visual Scripting",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
        <div className="w-12 h-1 bg-red-600 rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
            >
              <h3 className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-white text-gray-700 border border-gray-200 px-3 py-1 rounded-lg font-medium shadow-sm"
                  >
                    {skill}
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
