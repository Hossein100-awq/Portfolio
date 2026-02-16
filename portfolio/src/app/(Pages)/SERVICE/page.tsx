'use client'
import Container from "@/Component/Container";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const SERVICE = () => {
  return (
    <Container>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8, delay:1}} className="grid grid-col-1 md:grid-cols-2 my-5 0mt-20">
        <div className="col-span-1 flex items-center justify-between">
          <Image className="h-auto object-cover rounded-4xl" width={300} height={100}
            src="/ChatGPT Image Feb 16, 2026, 10_44_52 AM.png"
            alt="image"
          />
          <strong className="text-amber-300 text-4xl">WHY ME</strong>
        </div>
        <div className="col-span-1 flex flex-col items-end">
          <div className="col-span-6">
            <Image className="h-auto object-cover rounded-4xl" width={300} height={100}
              src="/ChatGPT Image Feb 16, 2026, 10_40_14 AM.png"
              alt="image"
            />
            <Image className="h-auto object-cover mt-12 rounded-4xl" width={300} height={100}
              src="/rmartinr-phone-8594571_1280.jpg"
              alt="image"
            />
            
          </div>
        
        </div>
      </motion.div>
    </Container>
  );
};

export default SERVICE;
