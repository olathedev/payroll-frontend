"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen px-4 md:px-10">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-7xl mx-auto py-8">
        <motion.div 
          className="self-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Simple, transparent, and Affordable Global Transactions
          </h1>
          <motion.p 
            className="text-base md:text-lg mt-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Say goodbye to long wait times and expensive fees. Our hassle-free
            platform lets you send money to loved ones, pay bills and make
            purchases from anywhere in the world. Trust us to handle your
            transfers securely and efficiently.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button 
              className="px-5 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-blue-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Money
            </motion.button>
            <motion.button 
              className="px-5 py-3 rounded-lg border border-gray-600 text-gray-600 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open an account
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative w-full max-w-lg">
            <Image 
              src="/images/hero-image.png" 
              alt="Global transactions illustration" 
              width={538} 
              height={539.2}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}