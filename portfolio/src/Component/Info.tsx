'use client'
import Image from "next/image";
import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <Container>
      <div className="relative mx-10 my-32 rounded-md overflow-hidden shadow-orange-300 shadow-2xl">
        <div className="absolute inset-0 backdrop-blur-xl bg-white/10" />

        <div className="relative grid grid-cols-12 shadow-2xl shadow-[0_0_300px] shadow-amber-300 rounded-md">
          <div className="col-span-6 flex flex-col justify-center items-end p-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-5xl mb-4 text-amber-300"
            >
              Hello, I'm Hossein
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-3xl"
            >
              Front-end developer
            </motion.p>
          </div>

          <div className="col-span-6 flex justify-end">
            <video
              className="mr-0"
              width={300}
              height={100}
              autoPlay
              muted
              playsInline
              src="/Untitled design (online-video-cutter.com).mp4"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
