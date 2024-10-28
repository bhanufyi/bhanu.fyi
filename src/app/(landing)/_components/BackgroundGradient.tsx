"use client";

import { motion } from "framer-motion";
import React from "react";
export const BackgroundGradient = ({ scrollY }: { scrollY: number }) => (
  <motion.div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      background: `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0) ${50 + scrollY * 0.1}%)`,
    }}
    animate={{
      scale: 1 + scrollY * 0.001,
    }}
  />
);
