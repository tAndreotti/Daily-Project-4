"use client";
import styles from "./page.module.scss";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { disperse } from "../anim";
import gsap from "gsap";

export default function Home() {
  const background = useRef(null);

  const setBackground = (isActive) => {
    gsap.to(background.current, { opacity: isActive ? 0.8 : 0 });
  };

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <TextDipserse setBackground={setBackground}>
          <p>ULTRAJANTE</p>
        </TextDipserse>

        {/* <div className={styles.introLine}>
          <p>T</p>
          <p>Andreotti</p>
        </div>

        <div className={styles.introLine}>
          <p>Designer</p>
          <p>&</p>
        </div>

        <div className={styles.introLine}>
          <p>Frontend</p>
          <p>Dev</p>
        </div> */}

        <TextDipserse setBackground={setBackground}>
          <p>+19996071518</p>
        </TextDipserse>

        <TextDipserse setBackground={setBackground}>
          <p>→Email</p>
        </TextDipserse>

        <TextDipserse setBackground={setBackground}>
          <p>→Insta</p>
        </TextDipserse>
      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  );
}

function TextDipserse(props) {
  const { children, setBackground } = props;

  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element) => {
    let chars = [];
    if (children.length) {
      children.forEach((el, i) => {
        chars.push(splitWord(el.props.children, i));
      });
    } else {
      chars.push(splitWord(element.props.children, 1));
    }
    return chars;
  };

  const splitWord = (word, indexOfWord) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={indexOfWord * i}
          variants={disperse}
          animate={isAnimated ? "open" : "closed"}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const manageMouseEnter = () => {
    setBackground(true);
    setIsAnimated(true);
  };
  const manageMouseLeave = () => {
    setBackground(false);
    setIsAnimated(false);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave(false);
      }}
      className={styles.introLine}
    >
      {getChars(children)}
    </div>
  );
}