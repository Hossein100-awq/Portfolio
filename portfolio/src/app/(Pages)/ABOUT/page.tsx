'use client'
import Container from "@/Component/Container";
import React from "react";
import { motion } from "framer-motion";

const ABOUT = () => {
  return (
    <Container>
      <section className="flex flex-col items-center justify-center py-8 text-center">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:1}}>
          <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-amber-300">Hello — I&apos;m Hossein</h2>
          <p className="mb-6 text-lg">
            I am a front-end developer with hands-on experience building modern
            web and mobile applications. I focus on clean, maintainable code and
            creating user-friendly interfaces that scale.
          </p>

          <h3 className="text-2xl font-semibold mb-3 text-amber-300">My skills</h3>
          <ul className="space-y-3 text-left">
            <li>
              <strong className="text-amber-300">React:</strong> Building reusable components, managing
              state with hooks and context, and optimizing performance for fast
              single-page applications.
            </li>
            <li>
              <strong className="text-amber-300">Next.js:</strong> Server-side rendering and static site
              generation, routing, and API routes to build robust, SEO-friendly
              React applications.
            </li>
            <li>
              <strong className="text-amber-300">Bootstrap:</strong> Rapidly prototyping responsive layouts
              using the Bootstrap grid and component library.
            </li>
            <li>
              <strong className="text-amber-300">Tailwind CSS:</strong> Utility-first styling for precise,
              consistent UI design and fast iteration.
            </li>
            <li>
              <strong className="text-amber-300">React Native:</strong> Developing cross-platform mobile
              apps for iOS and Android with a native look-and-feel, including
              experience with navigation and native modules.
            </li>
          </ul>

          <p className="mt-6">
            I enjoy turning ideas into polished interfaces. If you have a
            project in mind, let&apos;s build it together.
          </p>
        </div>
      </motion.div>
      </section>
    </Container>
  );
};

export default ABOUT;
