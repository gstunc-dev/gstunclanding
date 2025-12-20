"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Testimonial slider state
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      name: "Darlene Robertson",
      role: "Marketing Manager",
      text: "Consistent quality and excellent communication throughout.",
      avatar: "https://i.pravatar.cc/60?img=2",
      isDark: true,
    },
    {
      name: "John Smith",
      role: "CEO, Company A",
      text: "Reliable team delivering scalable solutions with clarity and speed.",
      avatar: "https://i.pravatar.cc/60?img=1",
      isDark: false,
    },
    {
      name: "Darlene Robertson",
      role: "Marketing Manager",
      text: "Consistent quality and excellent communication throughout.",
      avatar: "https://i.pravatar.cc/60?img=2",
      isDark: true,
    },
    {
      name: "John Smith",
      role: "CEO, Company A",
      text: "Reliable team delivering scalable solutions with clarity and speed.",
      avatar: "https://i.pravatar.cc/60?img=1",
      isDark: false,
    },
    {
      name: "Darlene Robertson",
      role: "Marketing Manager",
      text: "Consistent quality and excellent communication throughout.",
      avatar: "https://i.pravatar.cc/60?img=2",
      isDark: true,
    },
  ];

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w < 640) return 1; // mobile
    if (w < 1024) return 2; // tablet
    return 3; // desktop
  };

  useEffect(() => {
    const updateVisible = () => {
      const count = getVisibleCount();
      setVisibleCount(count);
      setStartIndex((prev) =>
        prev + count > testimonials.length
          ? Math.max(0, testimonials.length - count)
          : prev
      );
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, [testimonials.length]);

  const nextSlide = () => {
    if (startIndex + visibleCount < testimonials.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  // Motion variants
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#F9FFFC] min-h-screen">
      {/* HEADER */}
      <motion.header
        className="w-full bg-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image src="/logo.png" alt="Logo" width={160} height={160} />
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop nav */}
          <motion.nav
            className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.3 },
              },
            }}
          >
            {["Home", "Services", "About Us"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-gray-900"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#"
              className="rounded-xl bg-[#14DA8E] px-4 py-2 text-white text-sm font-semibold hover:bg-emerald-600 transition hover:text-black"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
            </motion.a>
          </motion.nav>
        </div>

        {/* Mobile nav menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden flex flex-col gap-2 px-4 pb-4 text-sm font-medium text-gray-700 bg-white shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {["Home", "Services", "About Us"].map((item) => (
                <a key={item} href="#" className="py-1">
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 rounded-xl bg-[#14DA8E] px-4 py-2 text-white text-sm font-semibold text-center hover:bg-emerald-600 transition hover:text-black"
              >
                Schedule Free Consultation
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HERO */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex pt-6 sm:pt-10 items-center justify-center">
          <div className="text-center w-full max-w-4xl">
            <motion.div
              className="w-full max-w-[840px] h-[420px] sm:h-[480px] bg-cover bg-center rounded-2xl p-6 sm:p-10 mx-auto flex items-center"
              style={{ backgroundImage: "url('/bg.png')" }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative z-10 max-w-2xl mx-auto">
                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
                    },
                  }}
                >
                  {["Powering", "Business with", "Cloud & Innovation"].map(
                    (line, i) => (
                      <motion.span
                        key={i}
                        className="block"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        {line}
                      </motion.span>
                    )
                  )}
                </motion.h1>

                <motion.p
                  className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  We help businesses scale with cloud,
                  <br className="hidden sm:block" /> DevOps, marketing, and
                  design.
                </motion.p>

                <motion.div
                  className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    className="w-full sm:w-auto rounded-xl bg-[#14DA8E] px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-600 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Free Consultation
                  </motion.button>

                  <motion.button
                    className="w-full sm:w-auto rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <img src="black.png" className="slanted-img w-full" />

      {/* SERVICES */}
      <motion.section
        className="pb-12 sm:pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="mb-6 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-3"
            variants={container}
          >
            <motion.div
              variants={card}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-emerald-50 p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black">
                  Cloud Solutions
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-700">
                  Secure, reliable cloud services built for scale.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex justify-end">
                <Image src="/cloud.png" alt="Cloud" width={60} height={60} />
              </div>
            </motion.div>

            <motion.div
              variants={card}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-emerald-50 p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black">
                  DevOps & Automation
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-700">
                  Efficient, dependable automation services.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex justify-end">
                <Image src="/auto.png" alt="DevOps" width={60} height={60} />
              </div>
            </motion.div>

            <motion.div
              variants={card}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-emerald-50 p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black">
                  Digital Marketing
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-700">
                  Result-driven marketing services.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex justify-end">
                <Image
                  src="/market.png"
                  alt="Marketing"
                  width={60}
                  height={60}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-6 sm:mt-8 flex justify-center"
            variants={container}
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full md:w-auto">
              <motion.div
                variants={card}
                whileHover={{ y: -8 }}
                className="flex-1 rounded-3xl bg-emerald-50 p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black">
                    Branding
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-700">
                    Strategic branding services building trust and recognition.
                  </p>
                </div>
                <div className="mt-4 sm:mt-6 flex justify-end">
                  <Image
                    src="/brand.png"
                    alt="Branding"
                    width={60}
                    height={60}
                  />
                </div>
              </motion.div>

              <motion.div
                variants={card}
                whileHover={{ y: -8 }}
                className="flex-1 rounded-3xl bg-emerald-50 p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black">
                    UI/UX Design
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-700">
                    High-quality design services for engaging digital
                    experiences.
                  </p>
                </div>
                <div className="mt-4 sm:mt-6 flex justify-end">
                  <Image src="/ui.png" alt="UI/UX" width={60} height={60} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <img src="black.png" className="slanted-img w-full" />

      {/* ABOUT US */}
      <motion.section
        className="w-full bg-white pb-12 sm:pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14"
          >
            About Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              variants={slideLeft}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-green-100 -z-10" />
                <Image src="/about.png" alt="About" width={260} height={260} />
              </div>
              <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">
                Divjot Singh Sikand
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">CEO-Founder</p>
            </motion.div>

            <motion.div
              variants={slideRight}
              className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base"
            >
              <p>
                We are a digital services team building reliable, scalable, and
                well-designed solutions for modern businesses.
              </p>
              <p>
                Our work spans cloud infrastructure, DevOps automation, digital
                marketing, branding, and creative design—combining technology
                and creativity to solve real business challenges.
              </p>
              <p>
                We focus on clear thinking, strong processes, and attention to
                detail, ensuring every project delivers performance, security,
                usability, and long-term value.
              </p>
              <p>
                From strategy to execution, we work closely with our clients to
                create practical, future-ready solutions built to scale.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <img src="black.png" className="slanted-img2 w-full" />

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 mb-18 sm:mb-16">
        <motion.h2
          className="mb-6 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Voices of Our
          <br className="hidden sm:block" /> Clients
        </motion.h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 px-4 py-2 bg-gray-200 rounded-full"
          >
            {"<"}
          </button>

          <div className="flex overflow-hidden w-full max-w-4xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 w-full sm:w-1/2 lg:w-1/3"
                >
                  <div
                    className={`p-6 rounded-xl shadow-lg ${
                      item.isDark
                        ? "bg-[#096743] text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={item.avatar}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-xs opacity-80">{item.role}</p>
                      </div>
                    </div>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 px-4 py-2 bg-gray-200 rounded-full"
          >
            {">"}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <motion.footer
        className="mt-12 sm:mt-16 pb-10 sm:pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center px-4"
        >
          <Image src="/logo.png" alt="Logo" width={260} height={260} />
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <motion.div
            variants={stagger}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-gray-700 mb-4"
          >
            {["Services", "About Us", "Contact Us"].map((item) => (
              <motion.a
                key={item}
                href="#"
                variants={fadeUp}
                whileHover={{ y: -2 }}
                className="hover:text-green-600"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-500 gap-3 sm:gap-4 border-t border-gray-200 pt-3"
          >
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <span>© Copyright 2023. All Rights Reserved</span>
              <a href="#" className="hover:text-green-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-600">
                Terms & Condition
              </a>
            </div>

            <div className="flex items-center gap-3 mt-2 md:mt-0">
              <motion.div whileHover={{ scale: 1.15 }}>
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={22}
                  height={22}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }}>
                <Image src="/link.png" alt="LinkedIn" width={22} height={22} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
