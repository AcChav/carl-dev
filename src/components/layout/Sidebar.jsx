import React, { useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Check,
} from "lucide-react";
import { profileConfig } from "../../config/profileConfig";

export default function Sidebar() {
  const { resumeUrl, socials, education } = profileConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="lg:col-span-4 bg-slate-800/60 border border-slate-700/50 rounded-3xl p-6 flex flex-col justify-between gap-6 shadow-xl backdrop-blur-md">
      {/* Profile Image & Download */}
      <div className="flex flex-col items-center w-full">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-500/20 bg-slate-800 flex items-center justify-center mb-6 shadow-inner ring-4 ring-slate-900/50">
          <span className="text-3xl font-bold tracking-wider text-indigo-400">
            <img
              src="/avatar.webp"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </span>
        </div>

        <a
          href={resumeUrl}
          download="Albrecht_Chavez_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-2xl transition-all shadow-md shadow-indigo-600/20 active:scale-[0.99]"
        >
          <Download size={17} />
          <span>Download CV</span>
        </a>
      </div>

      {/* Info & Social Pills */}
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-between p-3.5 bg-slate-900/70 border border-slate-700/40 rounded-2xl">
          <span className="text-xs font-medium text-slate-300">
            Social Links
          </span>
          <div className="flex items-center gap-1.5">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-800/80 rounded-xl transition"
            >
              <Github size={17} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-800/80 rounded-xl transition"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        {/* Click to Copy Button */}
        <button
          type="button"
          onClick={handleCopyEmail}
          className="w-full flex items-center justify-between p-3.5 bg-slate-900/70 border border-slate-700/40 rounded-2xl hover:border-indigo-500/40 transition group cursor-pointer text-left"
        >
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-300">
              Contact Info
            </span>
            <span className="text-[11px] text-slate-400 transition-colors">
              {copied ? "Copied to clipboard!" : socials.email}
            </span>
          </div>
          {copied ? (
            <Check size={17} className="text-emerald-400 transition" />
          ) : (
            <Mail
              size={17}
              className="text-slate-400 group-hover:text-indigo-400 transition"
            />
          )}
        </button>

        <div className="flex items-center gap-3 p-3.5 bg-slate-900/70 border border-slate-700/40 rounded-2xl">
          <div className="p-2 bg-indigo-950/60 rounded-xl text-indigo-400 border border-indigo-800/40">
            <GraduationCap size={18} />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-slate-200">{education.degree}</p>
            <p className="text-slate-400 text-[11px]">
              {education.institution}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
