import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const HomePage = () => {
  return (
    <section className="section-container min-h-[85vh] flex flex-col justify-center">
      <Helmet>
        <title>Umair Ayub | Developer</title>
      </Helmet>

      <div className="max-w-4xl space-y-16">
        {/* Subtle decorative line */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-4xl text-brand-muted font-light leading-tight max-w-3xl">
            Hi, I’m <span className="text-white font-medium">Umair Ayub</span>.
            I am a software developer focused on creating high-performance,
            functional, and aesthetically driven applications for the modern
            web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-12"
        >
          <Link to="/projects" className="group flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted font-bold group-hover:text-primary-500 transition-colors">
              Project Portfolio
            </span>
            <div className="flex items-center gap-3 text-2xl font-bold text-white">
              Selected Works{" "}
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-2" />
            </div>
          </Link>

          <Link to="/about" className="group flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted font-bold group-hover:text-primary-500 transition-colors">
              Information
            </span>
            <div className="flex items-center gap-3 text-2xl font-bold text-white">
              The Story
            </div>
          </Link>
        </motion.div>

        {/* Technical focus pills - subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-4 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/5"
        >
          {[
            "Frontend Systems",
            "Mobile Architectures",
            "Digital Design",
            "Scalable Software",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500/40"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-muted">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
