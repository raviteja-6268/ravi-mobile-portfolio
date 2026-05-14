"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  Code2,
  Trophy,
  Mail,
  Home,
} from "lucide-react";

const sections = [
  {
    title: "About",
    icon: <User size={24} />,
  },
  {
    title: "Skills",
    icon: <Code2 size={24} />,
  },
  {
    title: "Experience",
    icon: <Briefcase size={24} />,
  },
  {
    title: "Achievements",
    icon: <Trophy size={24} />,
  },
  {
    title: "Contact",
    icon: <Mail size={24} />,
  },
];

export default function HomePage() {
  const [active, setActive] = useState("Home");

  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center p-10 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

      {/* LEFT SIDE */}
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-20 items-center relative z-10">

        <div>

          {/* Profile */}
          <div className="flex items-center gap-5">

            {/* Profile Image */}
            <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full scale-110" />
                    <img
    src="/Photo copy.jpg"
    alt="Ravi Teja"
    className="relative w-28 h-28 rounded-full object-cover border-4 border-white/10 shadow-[0_20px_60px_rgba(59,130,246,0.45)]"
  />
</div>

            <div>

              <h1 className="text-5xl font-bold text-white">
                Ravi Teja Attuluri
              </h1>

              <p className="text-xl text-cyan-400 mt-2">
                Mobile Automation Test Engineer
              </p>

              <p className="text-gray-400 mt-4 leading-8 max-w-lg">
                Mobile QA Automation Engineer specializing in
Google Pixel ecosystem testing, Appium automation,
Android platform validation, scalable Python frameworks,
and enterprise CI/CD quality engineering.
              </p>

            </div>

          </div>

          {/* Navigation */}
          <div className="mt-16 space-y-4">

            {sections.map((section) => (

              <motion.button
                key={section.title}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(section.title)}
                className={`w-full flex items-center gap-5 px-6 py-5 rounded-3xl transition-all duration-300
                ${
                  active === section.title
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-[0_10px_40px_rgba(59,130,246,0.35)]"
                    : "bg-white/5 border border-white/10 text-gray-300 backdrop-blur-xl hover:bg-white/10"
                }`}
              >

                {section.icon}

                <span className="text-lg font-medium">
                  {section.title}
                </span>

              </motion.button>

            ))}

          </div>

        </div>

        {/* PHONE */}
        <div className="flex justify-center">

          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-[60px]" />

            {/* Phone Body */}
            <div className="relative w-[380px] h-[780px] rounded-[55px] bg-gradient-to-b from-neutral-700 to-black p-[6px] shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

              {/* Reflection */}
              <div className="absolute left-2 top-10 bottom-10 w-[2px] bg-white/20 rounded-full blur-[1px]" />

              {/* Screen */}
              <div className="w-full h-full rounded-[48px] bg-[#0f1725] overflow-hidden relative">

                {/* Wallpaper Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_40%)]" />

                {/* Camera */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-50 border border-white/10" />

                {/* Status Bar */}
                <div className="h-14 flex items-center justify-between px-6 text-gray-400 relative z-10">

                  <span>9:41</span>

                  <div className="flex items-center gap-2">

                    <div className="w-3 h-3 rounded-full bg-green-500" />

                    <div className="w-6 h-3 border border-gray-500 rounded-sm">
                      <div className="w-4 h-full bg-gray-300 rounded-sm" />
                    </div>

                  </div>

                </div>

                {/* SCREEN CONTENT */}
                <AnimatePresence mode="wait">

                  <motion.div
                    key={active}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 50,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="px-6 pb-10 h-full overflow-y-auto relative z-10"
                  >

                    {/* HOME */}
                    {active === "Home" && (

                      <div className="mt-12">

                        <h2 className="text-3xl font-bold text-white">
                          Welcome 👋
                        </h2>

                        <p className="text-gray-400 mt-4 leading-8">
                          Mobile QA Automation Engineer working
                          on Google Pixel ecosystem using Appium,
                          Python and Android testing frameworks.
                        </p>

                      </div>

                    )}

                    {/* ABOUT */}
                    {active === "About" && (
                      <Card title="About Me">

                        <p className="text-gray-300 leading-8">
                          Mobile Automation Engineer with 3+ years
                          of experience working in Google Pixel ecosystem.
                        </p>

                        <p className="text-gray-300 leading-8 mt-4">
                          Specialized in Appium, Python,
                          Android automation, Jenkins and CI/CD.
                        </p>

                      </Card>
                    )}

                    {/* SKILLS */}
                    {active === "Skills" && (
                      <Card title="Skills">

                        <div className="grid grid-cols-2 gap-4">

                          {[
                            "Appium",
                            "Python",
                            "Android",
                            "PyTest",
                            "Jenkins",
                            "API Testing",
                            "ADB",
                            "Git",
                          ].map((skill) => (

                            <motion.div
                              whileHover={{
                                scale: 1.03,
                              }}
                              key={skill}
                              className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl text-center text-gray-200 font-medium"
                            >
                              {skill}
                            </motion.div>

                          ))}

                        </div>

                      </Card>
                    )}

                    {/* EXPERIENCE */}
                    {active === "Experience" && (
                      <Card title="Experience">

                        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5">

                          <h3 className="text-2xl font-bold text-cyan-400">
                            Wipro — Google Pixel Project
                          </h3>

                          <p className="text-gray-400 mt-2">
                            Mobile QA Automation Engineer
                          </p>

                          <ul className="mt-6 space-y-3 text-gray-300 leading-7">

                            <li>• Built Appium + Python framework</li>
                            <li>• Automated 200+ test cases</li>
                            <li>• 60% automation uplift</li>
                            <li>• CI/CD integration with Jenkins</li>
                            <li>• Android debugging using ADB logs</li>

                          </ul>

                        </div>

                      </Card>
                    )}

                    {/* ACHIEVEMENTS */}
                    {active === "Achievements" && (
                      <Card title="Achievements">

                        <div className="space-y-4">

                          {[
                            "60% Automation Coverage Increase",
                            "200+ Automated Scenarios",
                            "40% Regression Reduction",
                            "Winner's Circle Award",
                          ].map((item) => (

                            <div
                              key={item}
                              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 text-gray-300 font-medium"
                            >
                              {item}
                            </div>

                          ))}

                        </div>

                      </Card>
                    )}

                    {/* CONTACT */}
                    {active === "Contact" && (
                      <Card title="Contact">

                        <div className="space-y-4">

                          <ContactCard
                            title="Email"
                            value="ravitejaattuluri@gmail.com"
                          />

                          <ContactCard
                            title="Phone"
                            value="+91 9248781701"
                          />

                          <ContactCard
                            title="LinkedIn"
                            value="linkedin.com/in/ravitejaattuluri"
                          />

                        </div>

                      </Card>
                    )}

                  </motion.div>

                </AnimatePresence>

                {/* Bottom Home Button */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActive("Home")}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-[0_10px_40px_rgba(59,130,246,0.4)]"
                  >

                    <Home />

                  </motion.button>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold text-white mb-6">
        {title}
      </h2>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6">
        {children}
      </div>

    </div>
  );
}

function ContactCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

      <p className="text-cyan-400 font-semibold">
        {title}
      </p>

      <p className="text-gray-300 mt-2 break-all">
        {value}
      </p>

    </div>
  );
}