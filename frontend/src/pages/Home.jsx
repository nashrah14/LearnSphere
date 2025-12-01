import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";


export default function Home() {
  const [message, setMessage] = useState("Checking backend status...");
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [lastChecked, setLastChecked] = useState(null);

  // Called when user clicks "Re-check API"
  const handleRecheck = () => {
    setLoading(true);
    fetch(`${API_BASE_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => {
        setIsOnline(true);
        setMessage(data.message || "Backend responded successfully.");
        setLastChecked(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(() => {
        setIsOnline(false);
        setMessage("Unable to reach the backend API.");
        setLastChecked(new Date().toLocaleTimeString());
        setLoading(false);
      });
  };

  // Initial API check when page loads
  useEffect(() => {
    let isMounted = true;

    fetch(`${API_BASE_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setIsOnline(true);
        setMessage(data.message || "Backend responded successfully.");
        setLastChecked(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setIsOnline(false);
        setMessage("Unable to reach the backend API.");
        setLastChecked(new Date().toLocaleTimeString());
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Hero section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
              Full-Stack Project • React + Flask
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              A modern student-centric platform for{" "}
              <span className="text-indigo-700">learning & tech exploration</span>.
            </h1>
            <p className="text-slate-600 text-base md:text-lg mb-6">
              This site demonstrates how a clean React frontend integrates with a
              Flask backend and is structured to be deployed on AWS. It’s built
              to showcase practical skills in frontend design, API integration,
              and cloud-ready architecture.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/resources"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition"
              >
                Browse Student Resources
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-indigo-200 bg-white/60 text-indigo-700 text-sm font-semibold hover:bg-white transition"
              >
                Learn About This Project
              </Link>
            </div>
          </div>

          {/* System status card */}
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-indigo-100 p-6 md:p-7">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">
                System Status
              </h2>
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  isOnline
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "bg-rose-50 text-rose-700 border border-rose-100"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isOnline ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                />
                {isOnline ? "API Online" : "API Offline"}
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-2">
              {loading ? "Checking backend health..." : message}
            </p>

            <p className="text-xs text-slate-500 mb-4">
              {lastChecked
                ? `Last checked at ${lastChecked}.`
                : "Status will appear after the first check."}
            </p>

            <button
              onClick={handleRecheck}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
            >
              Re-check API
              <span className="text-[10px]">⟳</span>
            </button>

            <div className="mt-5 border-t border-slate-100 pt-4 grid grid-cols-2 gap-3 text-xs text-slate-500">
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  Frontend
                </p>
                <p>React SPA with Tailwind UI and React Router.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  Backend
                </p>
                <p>Flask REST API, ready for AWS Elastic Beanstalk.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature highlights */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            What this project showcases
          </h2>
          <p className="text-slate-600 text-sm mb-5 max-w-2xl">
            The goal is not just to display data, but to present a well-structured,
            full-stack project that reflects real-world practices.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <article className="bg-white rounded-2xl shadow-md border border-slate-100 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Modern Frontend
              </h3>
              <p className="text-xs text-slate-600">
                Component-based React UI, responsive layout using Tailwind, and
                clean navigation with React Router.
              </p>
            </article>
            <article className="bg-white rounded-2xl shadow-md border border-slate-100 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                API Integration
              </h3>
              <p className="text-xs text-slate-600">
                Live health check against a Flask backend, demonstrating how the
                frontend consumes REST APIs safely and clearly.
              </p>
            </article>
            <article className="bg-white rounded-2xl shadow-md border border-slate-100 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Cloud-Ready Design
              </h3>
              <p className="text-xs text-slate-600">
                Architecture that can be easily deployed with React on S3 and
                Flask on AWS Elastic Beanstalk or similar services.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
