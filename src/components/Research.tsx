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
                M.Sc. Thesis Research
              </p>
            </div>
            <span className="text-sm text-gray-500 shrink-0">
              Sep 2024 – Present
            </span>
          </div>

          <h4 className="text-base font-semibold text-gray-800 mb-3">
            Static Analysis Frameworks for Visual Programming Languages
          </h4>

          <p className="text-gray-600 leading-relaxed mb-6">
            Developing novel static analysis methodologies for Visual
            Programming Languages (VPLs) — graph-based environments where logic
            is expressed through interconnected nodes rather than text. The core
            challenge is that classical software metrics like{" "}
            <span className="font-medium text-gray-800">
              Lines of Code (LOC)
            </span>
            ,{" "}
            <span className="font-medium text-gray-800">Halstead Volume</span>,
            and{" "}
            <span className="font-medium text-gray-800">
              Cyclomatic Complexity
            </span>{" "}
            were designed for textual code and do not directly transfer to
            node-based systems.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">
                Target Environments
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  Unreal Engine Blueprint
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  Unity Visual Scripting
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">
                Adapted Metrics
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  Lines of Code (LOC) → Node Count
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  Cyclomatic Complexity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  Halstead Volume
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
