"use client";
import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <motion.div
        className={styles.info}
        initial={{ scale: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5, type: "spring" }}
      >
        <span>434 6th ST</span>
        <span>GREENWICH</span>
        <span>VILLAGE</span>
      </motion.div>
      <motion.div
        className={styles.logoSection}
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className={styles.brandWrapper} style={{ position: "relative" }}>
          <Image
            src="/images/the-locavore-logo.svg"
            alt="brand"
            style={{ objectFit: "contain" }}
            priority
            fill
          />
        </div>
        <div className={styles.logoWrapper} style={{ position: "relative" }}>
          <Image src="/images/locavore-logo.svg" alt="Hero" priority fill />
        </div>
        <div
          className={styles.logoSubtitleWrapper}
          style={{ position: "relative" }}
        >
          <Image
            src="/images/logo-subtitle.svg"
            alt="logo-subtitle"
            style={{ objectFit: "contain" }}
            priority
            fill
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.info}
        initial={{ scale: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7, type: "spring" }}
      >
        <span>OPEN DAILY</span>
        <span>10am-7pm</span>
      </motion.div>
    </div>
  );
};

export default Hero;
