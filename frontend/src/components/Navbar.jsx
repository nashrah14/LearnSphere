import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseClasses =
    "px-4 py-2 rounded-full text-sm font-medium transition hover:bg-white/70 hover:text-blue-700";
  const activeClasses = "bg-white text-blue-700 shadow";

  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-white font-extrabold text-xl tracking-tight">
          LearnSphere
        </div>
        <div className="flex gap-2 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : "text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : "text-white"}`
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : "text-white"}`
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
