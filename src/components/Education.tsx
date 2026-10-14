const education = [
  {
    school: "University of Alberta",
    degree: "Master of Science (With Thesis)",
    area: "Computing Science",
    location: "Edmonton, Canada",
    period: "Sep 2024 – Sep 2026 (requirements completed)",
    detail:
      "Thesis research on software metrics for Visual Programming Languages (VPLs). Proposed and validated three adapted software metrics for node-based code such as Unreal Engine Blueprints and Unity Visual Scripting, and compared metric magnitudes across visual and textual code.",
  },
  {
    school: "Vanderbilt University",
    degree: "Bachelor of Science",
    area: "Computer Science",
    location: "Nashville, United States",
    period: "Sep 2021 – Dec 2023",
    detail: null,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Education</h2>
        <div className="w-12 h-1 bg-red-600 rounded mb-10" />

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.school + edu.degree}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.school}
                  </h3>
                  <p className="text-red-600 font-medium">
                    {edu.degree} · {edu.area}
                  </p>
                </div>
                <div className="text-sm text-gray-500 text-right shrink-0">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
              {edu.detail && (
                <p className="text-gray-600 text-sm leading-relaxed mt-3 border-t border-gray-50 pt-3">
                  {edu.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
