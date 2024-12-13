import React from "react";
import styles from "./Header.module.scss";
import Hero from "./Hero/Hero";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <section className={styles.headerSection}>
      <Hero />
      <NavBar />
    </section>
  );
};

export default Header;
