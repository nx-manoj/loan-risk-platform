import { Outlet } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const AppLayout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <Navbar />
    <main className="mx-auto w-full max-w-7xl px-6 py-8">
      <Outlet />
    </main>
    <Footer />
  </div>
);
