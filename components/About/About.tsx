"use client";
import React from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About" className={styles.conceptSection}>
      <motion.p
        className="text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        An emporium of local goods, all grown / baked / fabricated / assembled /
        crafted / concocted / sewn / stuffed / pickled within 100 miles of NYC.
      </motion.p>
    </section>
  );
};

export default About;
