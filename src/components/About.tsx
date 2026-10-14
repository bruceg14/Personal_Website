export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About</h2>
        <div className="w-12 h-1 bg-red-600 rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              I&apos;m a M.Sc. Computing Science student at the University of
              Alberta and a{" "}
              <span className="font-semibold text-gray-800">Mitacs Fellow</span>{" "}
              embedded at Electronic Arts, where I focus on{" "}
              <span className="font-semibold text-gray-800">
                Developer Productivity
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-800">
                Scalable AI Systems
              </span>
              .
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              My research develops static analysis frameworks for Visual
              Programming Languages — adapting classical code complexity metrics
              like Cyclomatic Complexity and Halstead Volume to node-based
              systems such as Unreal Engine Blueprints and Unity Visual
              Scripting.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In industry, I&apos;ve designed distributed LLM agent
              architectures in Go, built Elasticsearch data pipelines for
              real-time developer analytics, and engineered a binary-to-textual
              conversion engine for Unreal Engine. I bridge complex data
              infrastructure with actionable engineering workflows.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  M.Sc. Computing Science, University of Alberta (2024–Present)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  B.Sc. Computer Science, Vanderbilt University (2021–2023)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  Graduate Research Intern at Electronic Arts via Mitacs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  Teaching Assistant for CMPUT 301 & 404 at UAlberta
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  Based in Edmonton, Canada
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-2">
                Research Interest
              </h3>
              <p className="text-sm text-gray-700">
                Static analysis of Visual Programming Languages (VPLs) —
                quantifying software complexity in node-based environments like
                Unreal Engine Blueprints and Unity Visual Scripting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
