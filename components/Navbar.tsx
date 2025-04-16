"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = ["About", "Features", "Contact"];
const authButtons = [
  {
    label: "Sign in",
    style:
      "border border-primary-500 px-4 py-1 rounded-full text-primary-500 hover:bg-primary-50",
  },
  {
    label: "Sign up",
    style:
      "px-4 py-1 rounded-full bg-primary-600 text-white hover:bg-primary-700",
  },
];

const fadeDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.5 },
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 md:px-10 py-4 bg-white">
      <motion.nav
        className="flex justify-between items-center"
        initial="initial"
        animate="animate"
        variants={fadeDown}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div className="flex gap-2 items-center" {...fadeIn(0.2)}>
          <Image src="/images/logo.png" alt="logo" width={34} height={34} />
          <p className="font-semibold text-lg text-primary-600">Paytron</p>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <motion.ul
            className="flex gap-6 items-center text-primary-700"
            {...fadeIn(0.4)}
          >
            {navLinks.map((item) => (
              <li
                key={item}
                className="hover:text-primary-500 cursor-pointer"
              >
                {item}
              </li>
            ))}
            {authButtons.map((btn) => (
              <li
                key={btn.label}
                className={`${btn.style} cursor-pointer`}
              >
                {btn.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 text-primary-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-4 text-primary-700">
            {navLinks.map((item) => (
              <li
                key={item}
                className="hover:text-primary-500 cursor-pointer py-2"
              >
                {item}
              </li>
            ))}
            {authButtons.map((btn) => (
              <li
                key={btn.label}
                className={`${btn.style} cursor-pointer text-center my-1 py-2`}
              >
                {btn.label}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
