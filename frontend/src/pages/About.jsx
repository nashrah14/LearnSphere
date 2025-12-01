export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 pt-24 px-4 pb-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
          About This Website
        </h1>

        <p className="text-slate-600 mb-4">
          This website is a{" "}
          <span className="font-semibold">
            full-stack React + Flask application
          </span>{" "}
          built to demonstrate how I design, develop, and structure a modern
          tech product for a student-centric platform. It showcases
          my ability to build clean user interfaces, integrate with backend
          APIs, and structure the project for cloud deployment.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-4 mb-2">
          What This Site Demonstrates
        </h2>
        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1 mb-2">
          <li>
            A <span className="font-semibold">Home</span> page that talks to a
            live Flask API and displays dynamic content.
          </li>
          <li>
            A <span className="font-semibold">Student Resources</span> section
            with structured, reusable UI components.
          </li>
          <li>
            A clear <span className="font-semibold">architecture</span> that
            separates concerns between frontend and backend.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-4 mb-2">
          Tech Stack & Architecture
        </h2>
        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
          <li>
            <span className="font-semibold">Frontend:</span> React (Vite) with
            Tailwind CSS for a fast, responsive UI.
          </li>
          <li>
            <span className="font-semibold">Backend:</span> Flask REST API
            exposing clean JSON endpoints.
          </li>
          <li>
            <span className="font-semibold">Integration:</span> Frontend
            consumes backend APIs using fetch and CORS.
          </li>
          <li>
            <span className="font-semibold">Cloud-ready:</span> Designed to be
            deployed with React on S3 and Flask on AWS Elastic Beanstalk.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          How This Can Grow Further
        </h2>
        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
          <li>
            Moving resources and content into the backend and serving them via
            database-driven APIs.
          </li>
          <li>
            Adding authentication and role-based access for students,
            coordinators, and mentors.
          </li>
          <li>
            Building dashboards for events, registrations, and learning
            progress.
          </li>
          <li>
            Fully deploying the stack on AWS and using it as a live product
            showcase.
          </li>
        </ul>

        <p className="text-xs text-slate-500 mt-6">
          This project is intentionally structured to reflect real-world
          practices in full-stack and cloud development, and to demonstrate my
          readiness for hands-on tech intern roles.
        </p>
      </div>
    </main>
  );
}
