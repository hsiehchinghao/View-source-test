"use client";
import React, { useState } from "react";
import styles from "./ThisMon.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const ThisMon = () => {
  // 創建狀態來控制是否翻轉
  const [isFlipped, setIsFlipped] = useState(false);

  // 處理翻轉的點擊事件
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* 添加翻轉類名和點擊事件 */}
        <div className={styles.flipCardContainer}>
          <div
            onClick={handleFlip}
            className={`${styles.flipCard} ${isFlipped ? styles.flip : ""}`}
          >
            {/* 正面 */}
            <div
              className={styles.paperWrapperFront}
              style={{ position: "absolute" }}
              onClick={handleFlip}
            >
              <Image src="/images/paper.svg" alt="paper" priority fill />
            </div>
            {/* 背面 */}
            <div
              className={styles.paperWrapperBack}
              style={{ position: "absolute" }}
            >
              <Image src="/images/paper-back.svg" alt="paper" priority fill />
            </div>
          </div>
        </div>
        <div className={styles.gooseIcon}></div>
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
  );
};

export default ThisMon;
