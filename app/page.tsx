"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#7165E3] to-white min-h-screen">
      <Navbar />
      <div className="min-h-screen flex items-center px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8 py-12 lg:py-0 text-primary-950">
          <motion.div 
            className="flex flex-col gap-5 self-center lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Shows your real-time credit score.
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              All your money in one place
            </motion.h1>
            <motion.p 
              className="mb-3"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              This app tracks your credit and debit card purchases and rounds
              them up to the nearest dollar then it invests the difference for
              you in safe exchange-traded funds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/signup"
                  className="inline-block bg-[#3AD9B2] px-7 py-3 rounded-lg text-white font-semibold transition-all"
                >
                  Get started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mx-auto lg:mx-0 max-w-sm sm:max-w-md lg:max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="/images/homeimage.png"
              alt="Phone application interface"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}