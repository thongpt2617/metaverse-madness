"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import searchImg from "../public/search.svg";
import menuImg from "../public/menu.svg";
import styles from "../styles";
import { navVariants, ctaGestures } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative z-10`}
  >
    <div className="absolute top-0 w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <motion.div {...ctaGestures} className="cursor-pointer z-10">
        <Image
          src={searchImg}
          alt="Search"
          className="w-[24px] h-[24px] object-contain "
        />
      </motion.div>
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>
      <motion.div {...ctaGestures} className="cursor-pointer">
        <Image
          src={menuImg}
          alt="Search"
          className="w-[24px] h-[24px] object-contain"
        />
      </motion.div>
    </div>
  </motion.nav>
);

export default Navbar;
