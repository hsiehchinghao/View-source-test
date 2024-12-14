// OurBrands.tsx
"use client";
import React from "react";
import styles from "./OurBrands.module.scss";
import { useQuery } from "@tanstack/react-query";
import brandList from "@/utils/mock_brand.json";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

interface Brand {
  prefix: string;
  brands: string[];
}
interface BrandList {
  brandsData: Brand[];
}

const OurBrands = () => {
  //   const {
  //     data: brandList,
  //     isLoading, //未處理
  //     isError, //未處理
  //   } = useQuery({
  //     queryKey: ["brands"],
  //     queryFn: async () => {
  //       return brands;
  //     },
  //   });

  // 將列表分成三等份的fn
  const createColumns = (data: BrandList) => {
    if (!data?.brandsData) return [[], [], []];

    const items = data.brandsData;
    const totalItems = items.length;
    const itemsPerColumn = Math.ceil(totalItems / 3);

    return [
      items.slice(0, itemsPerColumn),
      items.slice(itemsPerColumn, itemsPerColumn * 2),
      items.slice(itemsPerColumn * 2),
    ];
  };

  const columns = brandList ? createColumns(brandList) : [[], [], []];

  return (
    <section id="ourBrands" className={styles.ourBrandsSection}>
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Our Brands
      </motion.h3>
      <div className={styles.brandList}>
        {columns.map((column, columnIndex) => (
          <motion.div
            key={columnIndex}
            className={styles.column}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.5 * columnIndex }}
          >
            {column.map((category: Brand) => (
              <div key={uuidv4()} className={styles.brandCategory}>
                <h4>{category.prefix}</h4>
                <ul>
                  {category.brands.map((brand) => (
                    <li key={uuidv4()}>{brand}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurBrands;
