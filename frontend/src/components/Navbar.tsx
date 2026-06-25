import { Link, NavLink } from "react-router-dom";
import brandMark from "../assets/brand-mark.svg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/predict", label: "Predict" },
  { to: "/health", label: "Health" },
];

export const Navbar = () => (
  <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link to="/" className="text-sm font-semibold tracking-wide text-slate-100">
        <span className="flex items-center gap-2">
          <img src={brandMark} alt="Loan Risk Intelligence" className="h-8 w-8 rounded-md" />
          <span>Loan Risk Intelligence</span>
        </span>
      </Link>
      <div className="flex items-center gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-slate-800 text-white"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  </header>
);
