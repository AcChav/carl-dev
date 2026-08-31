import React from "react";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 md:p-8 selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
