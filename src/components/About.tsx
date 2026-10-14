export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About</h2>
        <div className="w-12 h-1 bg-red-600 rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              I&apos;m a software engineer based in Montreal. I recently
              completed my M.Sc. in Computing Science at the University of
              Alberta, and spent over a year as a{" "}
              <span className="font-semibold text-gray-800">
                Mitacs Graduate Research Intern
              </span>{" "}
              at Electronic Arts working on{" "}
              <span className="font-semibold text-gray-800">
                developer tooling
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-800">
                LLM-powered agents
              </span>
              .
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              My thesis adapted classical software metrics to Visual
              Programming Languages — node-based systems such as Unreal Engine
              Blueprints and Unity Visual Scripting — backed by data mined from
              over 11,000 game repositories.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At EA, I built Go query-generation tools for an internal RAG
              agent used by 315 people and reverse-engineered the Unreal
              Engine Blueprint text format for a diff tool. On my own time, I
              build and deploy full-stack apps like Oak and Atex with Next.js,
              FastAPI, PostgreSQL, and Docker.
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
                  M.Sc. Computing Science, University of Alberta (2024–2026)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  B.Sc. Computer Science, Vanderbilt University (2021–2023)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  Graduate Research Intern at Electronic Arts via Mitacs (2025–2026)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  Teaching Assistant for CMPUT 301 & 404 at UAlberta
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">▸</span>
                  Based in Montreal, Canada · Open to relocating anywhere in Canada
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-2">
                Research Interest
              </h3>
              <p className="text-sm text-gray-700">
                Software metrics for Visual Programming Languages (VPLs) —
                measuring node-based code like Unreal Engine Blueprints and
                Unity Visual Scripting, and comparing it with textual code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
