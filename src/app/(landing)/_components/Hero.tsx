"use client";
import { motion } from "framer-motion";
import { Monitor, User, FileText, ArrowRight, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

import { BackgroundGradient } from "./BackgroundGradient";

import { SocialLinks } from "@/lib/components/SocialLinks";
import profileImg from "@/public/bhanu.jpeg";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative flex flex-col justify-between overflow-hidden">
      <div className="container relative mx-auto flex flex-col items-center justify-between px-6 pb-20 pt-32 md:flex-row md:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:w-1/2 md:text-left"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "Hey,",
                  1000,
                  "Bonjour,",
                  1000,
                  "Hola,",
                  1000,
                  "Ciao,",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            <br />
            I&apos;m <span className="text-orange-500">Bhanu!</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl">
            Full Stack Software Engineer from India, passionate about building
            innovative solutions and constantly improving.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 rounded-full bg-orange-500 px-8 py-3 text-white transition-colors hover:bg-orange-600"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="mt-12 flex items-center justify-center md:mt-0 md:w-1/2"
        >
          <div className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
            {/* Inner Image */}
            <Image
              src={profileImg}
              alt="Bhanu Prasad"
              width={320}
              height={320}
              className="rounded-full border-8 border-orange-500 border-opacity-75"
            />

            {/* Outer Circle */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: 1, // Ensures the element remains a perfect circle
              }}
              animate={{
                scale: [1, 1.1, 1], // Slight pulsing effect
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              {/* Outer Circle Shape */}
              <div className="h-full w-full rounded-full border-2 border-orange-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social links */}
      <SocialLinks />
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-4xl font-bold"
          >
            About Me
          </motion.h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: <User className="mb-4 h-10 w-10 text-orange-500" />,
                title: "Full Stack Engineer",
                description:
                  "Currently working remotely for Realadvisor, a Swiss-based appraisal and property platform.",
              },
              {
                icon: <Monitor className="mb-4 h-10 w-10 text-orange-500" />,
                title: "Tech Enthusiast",
                description:
                  "Passionate about the latest technologies and always eager to learn and implement new skills.",
              },
              {
                icon: <Code className="mb-4 h-10 w-10  text-orange-500" />,
                title: "Open Source Contributor",
                description:
                  "Enthusiastic about contributing to open-source projects and fostering collaboration in the developer community.",
              },
              {
                icon: <FileText className="mb-4 h-10 w-10 text-orange-500" />,
                title: "Avid Learner",
                description:
                  "Constantly striving to be a better version of myself every day, both professionally and personally.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-gray-100 p-6 dark:bg-gray-900"
              >
                {item.icon}
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-flex items-center text-orange-500 transition-colors hover:text-orange-600"
            >
              <span className="mr-2">Learn more about me</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <BackgroundGradient scrollY={scrollY} />
    </section>
  );
};
