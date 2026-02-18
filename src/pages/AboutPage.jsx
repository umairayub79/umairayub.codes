import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ExperienceData from "../data/Experience.json";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <div className="section-container">
      <Helmet>
        <title>About | Umair Ayub</title>
      </Helmet>

      <div className="grid lg:grid-cols-12 gap-16">
        {/* Left Column - Intro */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              The Story <span className="solid-text-accent">So Far</span>
            </h1>
            <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
              <p>
                Hi, I'm{" "}
                <span className="text-white font-medium">Umair Ayub</span>, a
                self-taught developer and student driven by the desire to build
                things that solve real-world problems.
              </p>
              <p>
                My journey began in <span className="text-white">2019</span>{" "}
                with a simple curiosity about how things work on the web. Since
                then, I've expanded my expertise across
                <span className="text-white"> Web and Mobile development</span>,
                always aiming for perfection in both code and design.
              </p>
              <p>My identity is deeply connected to cultural technology. With projects like TheBalochi, I work to protect and strengthen the Balochi language and culture, ensuring that our traditions don’t fade but evolve in the digital age.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FaCode className="text-primary-500" /> Technical Arsenal
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Flutter",
                "Tailwind CSS",
                "Node.js",
                "Kotlin",
                "JavaScript",
                "TypeScript",
                "PHP",
                "SQLite",
                "MySQL",
              ].map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Experience & Visual */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FaBriefcase className="text-primary-500" /> Experience
            </h2>
            <div className="mt-8 space-y-2">
              {ExperienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="experience-card"
                >
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-primary-400 font-medium">
                      {exp.company}
                    </p>
                    <span className="text-xs text-brand-muted bg-white/5 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] uppercase tracking-wider text-brand-muted/70 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
