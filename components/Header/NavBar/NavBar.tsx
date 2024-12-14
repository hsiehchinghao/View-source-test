import React from "react";
import styles from "./NavBar.module.scss";

const Navigation = () => {
  return (
    <ul className={styles.navBar}>
      <a href="#About">
        <li>ABOUT</li>
      </a>
      <a href="#ourBrands">
        <li>OUR BRANDS</li>
      </a>
      <a href="#thisMon">
        {" "}
        <li>THIS MONTH</li>
      </a>
      <a href="#submitForm">
        {" "}
        <li>SUBMIT PRODUCTS</li>
      </a>
    </ul>
  );
};

export default Navigation;
