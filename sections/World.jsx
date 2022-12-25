"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import mapImg from "../public/map.png";
import styles from "../styles";
import { TypingText, TitleText } from "../components";
import { staggerContainer, fadeIn, hoverableGestures } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`} id="new">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-full"
      >
        <Image
          src={mapImg}
          alt="map"
          className="w-full h-full object-contain"
        />
        <motion.img
          {...hoverableGestures}
          className="absolute lg:bottom-20 bottom-6 lg:right-28 right-4 lg:w-[200px] w-[40px]"
          src="people-01.png"
          alt="people"
        />
        <motion.img
          {...hoverableGestures}
          className="absolute lg:top-0 top-4 lg:left-[48px] left-8 lg:w-[200px] w-[40px]"
          src="people-02.png"
          alt="people"
        />
        <motion.img
          {...hoverableGestures}
          className="absolute lg:bottom-40 bottom-14 right-[45%] lg:w-[200px] w-[40px]"
          src="people-03.png"
          alt="people"
        />
        <motion.img
          {...hoverableGestures}
          className="absolute lg:bottom-16 bottom-8 left-[12%] lg:w-[400px] w-[80px]"
          src="group-01.png"
          alt="group"
        />
        <motion.img
          {...hoverableGestures}
          className="absolute lg:bottom-52 bottom-20 right-[16%] lg:w-[440px] w-[100px]"
          src="group-02.png"
          alt="group"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
