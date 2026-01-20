import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import projectData from "../data/Projects.json";
import Project from "../components/Project";

const ProjectsPage = () => {
  return (
    <div className="section-container">
      <Helmet>
        <title>Projects | Umair Ayub</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Selected <span className="solid-text-accent">Works</span>
        </h1>
        <p className="text-xl text-brand-muted max-w-2xl leading-relaxed">
          A collection of digital products, cultural initiatives, and academic
          experiments that showcase my journey as a developer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projectData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Project project={project} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-12 glass-card text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Have an idea in mind?</h3>
        <p className="text-brand-muted mb-8 max-w-lg mx-auto">
          I'm always looking for interesting projects to collaborate on. If
          you're building something impactful, let's talk.
        </p>
        <a
          href="mailto:umairayub79@gmail.com"
          className="solid-button inline-flex"
        >
          Start a Conversation
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
