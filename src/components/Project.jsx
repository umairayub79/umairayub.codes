import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  const { name, description, type, date, link, linkText, skills } = project;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card group p-8 flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-primary-400 font-bold">
              {type}
            </span>
            <span className="text-xs text-brand-muted">{date}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted group-hover:text-primary-400 group-hover:border-primary-500/30 transition-all duration-300">
            {linkText === "Github" ? (
              <FaGithub size={20} />
            ) : (
              <FaExternalLinkAlt size={16} />
            )}
          </div>
        </div>

        <h3 className="text-2xl font-extrabold mb-4 text-white group-hover:text-primary-400 transition-all duration-300">
          {name}
        </h3>

        <p className="text-brand-muted leading-relaxed mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {skills &&
            skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
        </div>
      </div>

      <div className="pt-6 border-t border-white/5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold hover:text-primary-400 transition-colors group/link"
        >
          {linkText || "View Project"}
          <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">
            <FaExternalLinkAlt size={12} />
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
