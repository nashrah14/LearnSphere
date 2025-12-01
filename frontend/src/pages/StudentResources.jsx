const resources = [
  {
    title: "DSA & Problem Solving",
    type: "Coding",
    level: "Intermediate",
    link: "https://www.geeksforgeeks.org/",
    description: "Practice patterns, contests, and company-level problems.",
    tag: "Must-have for placements",
  },
  {
    title: "Frontend Roadmap",
    type: "Web Dev",
    level: "Beginner → Advanced",
    link: "https://roadmap.sh/frontend",
    description:
      "A structured path to master HTML, CSS, JS, React and modern tooling.",
    tag: "Web Dev",
  },
  {
    title: "AWS Free Tier Labs",
    type: "Cloud",
    level: "Beginner",
    link: "https://aws.amazon.com/training/",
    description:
      "Hands-on labs to learn EC2, S3, Lambda and other core services.",
    tag: "Cloud Intern Focus",
  },
  {
    title: "Selenium with Python",
    type: "Automation",
    level: "Intermediate",
    link: "https://selenium-python.readthedocs.io/",
    description:
      "Official documentation to build web automation & testing workflows.",
    tag: "Automation Intern Focus",
  },
];

export default function StudentResources() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 px-4 pb-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900">
          Student Resources
        </h1>
        <p className="text-slate-600 mb-8">
          Curated links for{" "}
          <span className="font-semibold">coding, web development, cloud</span>{" "}
          and <span className="font-semibold">automation</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((res) => (
            <article
              key={res.title}
              className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold">
                  {res.type}
                </span>
                <span className="text-xs text-slate-500">{res.level}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                {res.title}
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                {res.description}
              </p>
              <p className="text-xs text-emerald-700 bg-emerald-50 inline-block px-2 py-1 rounded-full mb-3">
                {res.tag}
              </p>
              <div>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Open resource ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
