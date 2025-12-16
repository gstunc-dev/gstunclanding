"use client";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function LandingPage() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const container = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };
   
    const stagger = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
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
    <div className="bg-[#F9FFFC]">
      <motion.header
        className="w-full bg-white px-40"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700"
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

            {/* CTA Button */}
            <motion.a
              href="#"
              className="rounded-xl bg-[#14DA8E] px-5 py-2 text-white font-semibold hover:bg-emerald-600 transition hover:text-black"
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
      </motion.header>

      <motion.section
        className="items-center justify-center px-6 mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex pt-10 items-center justify-center px-50">
          <div className="text-center">
            <motion.div
              className="w-[840px] max-w-full h-[580px] sm:h-[500px]
                   bg-cover bg-center rounded-2xl p-10"
              style={{ backgroundImage: "url('/bg.png')" }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative z-10 max-w-3xl mx-auto">
                {/* Heading (staggered lines) */}
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight"
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

                {/* Paragraph */}
                <motion.p
                  className="mt-6 text-base sm:text-lg text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  We help businesses scale with cloud,
                  <br /> DevOps, marketing, and design.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    className="rounded-xl bg-[#14DA8E] px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-600 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Free Consultation
                  </motion.button>

                  <motion.button
                    className="rounded-xl border border-gray-400 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
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

      <img src="black.png" className="slanted-img" />

      <motion.section
        className="pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Title */}
          <motion.h2
            className="mb-6 text-center text-5xl font-extrabold text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          {/* Services Grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={container}
          >
            {/* Card 1 */}
            <motion.div
              variants={card}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-emerald-50 p-8 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <h3 className="text-lg font-bold text-black">
                  Cloud Solutions
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  Secure, reliable cloud services built for scale
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <Image src="/cloud.png" alt="Logo" width={70} height={70} />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={card}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-emerald-50 p-8 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <h3 className="text-lg font-bold text-black">
                  DevOps & Automation
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  Efficient, dependable automation services
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <Image src="/auto.png" alt="Logo" width={70} height={70} />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={card}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-emerald-50 p-8 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <h3 className="text-lg font-bold text-black">
                  Digital Marketing
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  Result-driven marketing services
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <Image src="/market.png" alt="Logo" width={70} height={70} />
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Cards */}
          <motion.div
            className="max-w-[1800px] mt-8 flex justify-center"
            variants={container}
          >
            <div className="flex gap-8">
              <motion.div
                variants={card}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-emerald-50 p-8 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <h3 className="text-lg font-bold text-black">Branding</h3>
                  <p className="mt-3 text-sm text-gray-700">
                    Strategic branding services building trust and recognition
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <Image src="/brand.png" alt="Logo" width={70} height={70} />
                </div>
              </motion.div>

              <motion.div
                variants={card}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-emerald-50 p-8 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <h3 className="text-lg font-bold text-black">UI/UX Design</h3>
                  <p className="mt-3 text-sm text-gray-700">
                    High-quality design services for engaging digital
                    experiences
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <Image src="/ui.png" alt="Logo" width={70} height={70} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <img src="black.png" className="slanted-img" />

      <motion.section
        className="w-full bg-white pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-5xl font-bold text-center mb-14"
          >
            About Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              variants={slideLeft}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-green-100 -z-10"></div>

                <Image src="/about.png" alt="Logo" width={300} height={300} />
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                Divjot Singh Sikand
              </h3>
              <p className="text-sm text-gray-500">CEO-Founder</p>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              variants={slideRight}
              className="text-gray-700 leading-relaxed space-y-4"
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

      <img src="black.png" className="slanted-img2" />

      <section className="max-w-6xl mx-auto px-6 mt-18">
        <motion.h2
          className="mb-6 text-center text-5xl font-extrabold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Voices of Our
          <br /> Clients
        </motion.h2>
        <Slider {...settings}>
          <div>
            <div className="bg-[#096743] text-white p-6 rounded-xl shadow-lg mr-4">
              <div className="flex items-center gap-4 ">
                <img
                  src="https://i.pravatar.cc/60?img=2"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-semibold text-sm">Darlene Robertson</p>
                  <p className="text-xs opacity-80">Marketing Manager</p>
                </div>
              </div>
              <p className="text-sm mt-2">
                “Consistent quality and excellent communication throughout.”
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-xl shadow mr-4">
              <div className="flex items-center gap-4 ">
                <img
                  src="https://i.pravatar.cc/60?img=1"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-xs text-gray-500">CEO, Company A</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                “Reliable team delivering scalable solutions with clarity and
                speed.”
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#096743] text-white p-6 rounded-xl shadow-lg mr-4">
              <div className="flex items-center gap-4 ">
                <img
                  src="https://i.pravatar.cc/60?img=2"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-semibold text-sm">Darlene Robertson</p>
                  <p className="text-xs opacity-80">Marketing Manager</p>
                </div>
              </div>
              <p className="text-sm mt-2">
                “Consistent quality and excellent communication throughout.”
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-xl shadow mr-4">
              <div className="flex items-center gap-4 ">
                <img
                  src="https://i.pravatar.cc/60?img=1"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-xs text-gray-500">CEO, Company A</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                “Reliable team delivering scalable solutions with clarity and
                speed.”
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#096743] text-white p-6 rounded-xl shadow-lg mr-4">
              <div className="flex items-center gap-4 ">
                <img
                  src="https://i.pravatar.cc/60?img=2"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-semibold text-sm">Darlene Robertson</p>
                  <p className="text-xs opacity-80">Marketing Manager</p>
                </div>
              </div>
              <p className="text-sm mt-2">
                “Consistent quality and excellent communication throughout.”
              </p>
            </div>
          </div>
        </Slider>
      </section>
      <motion.footer
        className="mt-30 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Logo */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center"
        >
          <Image src="/logo.png" alt="Logo" width={400} height={400} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Nav Links */}
          <motion.div
            variants={stagger}
            className="flex justify-center gap-8 text-sm font-medium text-gray-700 mb-4"
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

          {/* Bottom Bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4 border-t border-gray-200 pt-2"
          >
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <span>© Copyright 2023. All Rights Reserved</span>
              <a href="#" className="hover:text-green-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-600">
                Terms & Condition
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.15 }}>
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={25}
                  height={25}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }}>
                <Image src="/link.png" alt="LinkedIn" width={25} height={25} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
