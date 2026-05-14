"use client";

import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Code,
  Mail,
  Smartphone,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,120,0.15),transparent_70%)]" />

      {/* Phone Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-[360px] h-[740px] rounded-[45px] border border-neutral-700 bg-neutral-950 shadow-2xl overflow-hidden"
      >
        
        {/* Top Bar */}
        <div className="h-8 flex items-center justify-center border-b border-neutral-800">
          <div className="w-24 h-2 rounded-full bg-neutral-700" />
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Profile */}
          <div className="flex flex-col items-center mt-4">
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-4xl font-bold">
              RT
            </div>

            <h1 className="text-3xl font-bold mt-4">
              Ravi Teja
            </h1>

            <p className="text-green-400 mt-2 text-center">
              Mobile QA Automation Engineer
            </p>

            <p className="text-neutral-400 text-sm mt-3 text-center">
              Appium • Python • Android • Jenkins • CI/CD
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <Card title="200+" subtitle="Test Cases" />
            <Card title="60%" subtitle="Coverage Uplift" />
            <Card title="40%" subtitle="Manual Effort Reduced" />
            <Card title="150+" subtitle="Bugs Debugged" />

          </div>

          {/* Apps */}
          <div className="mt-10">

            <h2 className="text-lg font-semibold mb-4 text-neutral-300">
              Apps
            </h2>

            <div className="grid grid-cols-3 gap-6">

              <AppIcon icon={<User />} label="About" />
              <AppIcon icon={<Code />} label="Skills" />
              <AppIcon icon={<Briefcase />} label="Projects" />
              <AppIcon icon={<Smartphone />} label="Experience" />
              <AppIcon icon={<Mail />} label="Contact" />

            </div>
          </div>

          {/* Bottom CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full mt-12 bg-green-500 text-black font-semibold py-3 rounded-2xl"
          >
            Run Automation Suite
          </motion.button>

        </div>
      </motion.div>
    </main>
  );
}

function Card({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 text-center"
    >
      <h3 className="text-2xl font-bold text-green-400">
        {title}
      </h3>

      <p className="text-sm text-neutral-400 mt-1">
        {subtitle}
      </p>
    </motion.div>
  );
}

function AppIcon({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-green-400">
        {icon}
      </div>

      <span className="text-sm mt-2 text-neutral-300">
        {label}
      </span>
    </motion.div>
  );
}