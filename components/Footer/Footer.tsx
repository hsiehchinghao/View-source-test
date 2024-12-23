"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  const [uploadFile, setUploadFile] = useState<string>("");
  const uploadInputRef = useRef<HTMLInputElement | null>(null);
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("file:", e.target.files);
    setUploadFile(e.target.files![0].name);
  };
  return (
    <section className={styles.footerSection}>
      <motion.div
        className={styles.inviteSection}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.storeWrapper} style={{ position: "relative" }}>
          <Image src="/images/Vector.svg" alt="store" priority fill />
        </div>
        <h3>Want to be on our shelves?</h3>
        <p>
          Have questions, want recommendations, or want to tell us about a small
          business you love? Reach out! If you’re a business owner featured in
          our directory, reach out with bios, images, etc. below.{" "}
        </p>
      </motion.div>
      <motion.div
        className={styles.formSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <form id="submitForm">
          <input type="text" placeholder="First and Last Name*" />
          <input type="mail" placeholder="Email*" />
          <input type="text" placeholder="Brand Name*" />
          <input type="text" placeholder="Location*" />
          <label htmlFor="">Sell Sheet or Product Catalog*</label>
          <input ref={uploadInputRef} type="file" onChange={handleUpload} />
          <div
            className={styles.fileConfirm}
            onClick={() => {
              uploadInputRef.current!.click();
            }}
          >
            <Image
              className="me-3"
              src="/svg/uoload.svg"
              alt="upload"
              width={20}
              height={20}
              priority
            />
            <span>{uploadFile || "Upload a file "}</span>
          </div>
          <label htmlFor="">Message*</label>
          <textarea name="" id=""></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Footer;
