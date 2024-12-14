import React from "react";
import styles from "./NavBar.module.scss";

const Navigation = () => {
  return (
    <ul className={styles.navBar}>
      <li>
        <a href="#About">ABOUT</a>
      </li>
      <li>
        <a href="#ourBrands">OUR BRANDS</a>
      </li>
      <li>
        <a href="#thisMon">THIS MONTH</a>
      </li>
      <li>
        <a href="#submitForm">SUBMIT PRODUCTS</a>
      </li>
    </ul>
  );
};

export default Navigation;
