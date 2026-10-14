const bullets = [
  {
    title: "Data Mining Pipelines",
    body: "Built pipelines that mined over 11,000 Unreal Engine and Unity repositories, extracting Blueprint graphs alongside C++, C#, and Unity Visual Scripting source code.",
  },
  {
    title: "Custom Parser",
    body: "Developed a parser for text, binary, and mixed-format Unity Visual Scripting assets, including nested structures, and built Python metric calculators tested with pytest.",
  },
  {
    title: "Adapted Metrics",
    body: "Proposed and validated three adapted software metrics for visual code and compared metric magnitudes across visual and textual code.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Research</h2>
        <div className="w-12 h-1 bg-red-600 rounded mb-10" />

        <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                University of Alberta
              </h3>
              <p className="text-red-600 font-medium mt-0.5">
                Master&apos;s Thesis Research
              </p>
            </div>
            <span className="text-sm text-gray-500 shrink-0">
              Sep 2024 – Sep 2026 · Edmonton, Canada
            </span>
          </div>

          <h4 className="text-base font-semibold text-gray-800 mb-3">
            Software Metrics for Visual Programming Languages
          </h4>

          <p className="text-gray-600 leading-relaxed mb-6">
            Visual Programming Languages (VPLs) such as Unreal Engine Blueprints
            and Unity Visual Scripting express logic as interconnected nodes
            rather than text, so classical software metrics don&apos;t transfer
            directly. My thesis adapts those metrics to visual code and measures
            how visual and textual code compare at scale.
          </p>

          <ul className="space-y-4">
            {bullets.map((b) => (
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
      </div>
    </section>
  );
}
