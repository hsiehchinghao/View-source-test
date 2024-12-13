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
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* 添加翻轉類名和點擊事件 */}

        <div
          className={`${styles.paperWrapper} ${
            isFlipped ? styles.flipped : ""
          }`}
          onClick={handleFlip}
        >
          {/* 正面 */}
          <div className={styles.paperFront}>
            <Image src="/images/paper.svg" alt="paper" fill />
          </div>
          {/* 背面 */}
          <div className={styles.paperBack}>
            <Image
              src="/images/paper-back.svg"
              alt="paper"
              fill
              // style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <div className={styles.gooseIcon}></div>
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
  );
};

export default ThisMon;