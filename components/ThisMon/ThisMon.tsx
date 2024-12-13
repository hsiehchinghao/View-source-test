"use client";
import React from "react";
import styles from "./ThisMon.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const ThisMon = () => {
  return (
    <>
      <section id="thisMon" className={styles.thisMonSection}>
        <motion.div
          className={styles.thisMonTitle}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <p>This Month: Local Grill Gear, Our Favorite Sunscreen</p>
          <button>Download the Circular</button>
        </motion.div>
        <motion.div
          className={styles.thisMonPaper}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.paperWrapper}>
            <Image src="/images/paper.svg" alt="paper" fill />
          </div>
          <div className={styles.alertText}>
            <p>
              flip <br />
              over <br />
              FOR <br />
              MORE!
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ThisMon;
