import React from "react";
import Socials from "../Socials";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pb-12 overflow-hidden">
      {/* Decorative background element - solid line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-primary-500/20" />

      <div className="max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center gap-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          <Socials />

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
            <p className="text-sm text-brand-muted">
              &copy; {year}{" "}
              <span className="text-white font-medium">Umair Ayub</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
