import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="section-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl md:text-[12rem] font-extrabold text-primary-500 mb-4">
          404
        </h1>
        <h2 className="text-4xl font-bold mb-8 text-white">Lost in Space?</h2>
        <p className="text-xl text-brand-muted max-w-md mb-12">
          The page you are looking for doesn't exist or has been moved to
          another dimension.
        </p>
        <Link to="/" className="solid-button text-lg group">
          Back to Reality
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
