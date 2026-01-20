import React from "react";
import {
  FaTwitter,
  FaProductHunt,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Socials = () => {
  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/umairayub28",
      color: "hover:text-[#1877F2]",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/umairayub79",
      color: "hover:text-[#1DA1F2]",
      label: "Twitter",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/umairayub79",
      color: "hover:text-[#0A66C2]",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/umairayub79",
      color: "hover:text-white",
      label: "GitHub",
    },
    {
      icon: <FaProductHunt />,
      url: "https://producthunt.com/@umairayub18",
      color: "hover:text-[#DA552F]",
      label: "Product Hunt",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:umairayub79@gmail.com",
      color: "hover:text-primary-400",
      label: "Email",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xl text-brand-muted transition-all duration-300 ${link.color} hover:bg-white/10 hover:border-white/20`}
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default Socials;
