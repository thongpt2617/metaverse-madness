"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import coverImg from "../public/cover.png";
import stampImg from "../public/stamp.png";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          {/* Utilize border to create D */}
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] rounded-tr-[2rem] z-0 -top-[30px]" />
        <Image
          src={coverImg}
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] rounded-b-[2rem] rounded-tr-[2rem] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[120px] -mt-[70px] sm:pr-[40px] pr-0 relative z-10">
            <Image
              src={stampImg}
              alt="stamp"
              className="sm:w-[255px] w-[155px] sm:h-[255px] h-[155px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
