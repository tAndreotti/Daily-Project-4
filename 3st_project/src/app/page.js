"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import {
  center,
  diminua,
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
  foque,
} from "../data";

export default function Home() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  const [selectedLink, setSelectedLink] = useState(0);

  const handleMouseOver = (index) => () => {
    setSelectedLink(index);
  };

  const handleMouseLeave = () => {
    setSelectedLink(0);
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
    >
      <div ref={plane1} className={styles.plane}>
        <Image src={floating8} alt="image" width={360} />
        <Image
          onMouseOver={handleMouseOver(2)}
          onMouseLeave={handleMouseLeave}
          src={floating5}
          alt="image 1"
          width={350}
        />
        <Image
          onMouseOver={handleMouseOver(3)}
          onMouseLeave={handleMouseLeave}
          src={floating2}
          alt="image 2"
          width={360}
        />
      </div>
      <div ref={plane2} className={styles.plane}>
        <Image
          onMouseOver={handleMouseOver(4)}
          onMouseLeave={handleMouseLeave}
          src={floating1}
          alt="image 3"
          width={260}
        />
        <Image
          onMouseOver={handleMouseOver(5)}
          onMouseLeave={handleMouseLeave}
          src={floating4}
          alt="image 4"
          width={280}
        />
        <Image
          onMouseOver={handleMouseOver(6)}
          onMouseLeave={handleMouseLeave}
          src={floating7}
          alt="image 5"
          width={300}
        />
      </div>
      <div ref={plane3} className={styles.plane}>
        <Image
          onMouseOver={handleMouseOver(7)}
          onMouseLeave={handleMouseLeave}
          src={floating3}
          alt="image 6"
          width={250}
        />
        <Image
          onMouseOver={handleMouseOver(8)}
          onMouseLeave={handleMouseLeave}
          src={floating6}
          alt="image 7"
          width={300}
        />
      </div>
      <div className={styles.title}>
        <Image src={center} alt="logo" width={100} />
        <Image src={diminua} alt="texto-dinimua" width={100} />
        <Image src={foque} alt="texto-foque" width={300} />
      </div>
      <div alt="background">
        <div className={styles.topLeft1}></div>
        <div className={styles.topLeft2}></div>
        <div className={styles.topLeft3}></div>
        <div className={styles.topLeft4}></div>
        <div className={styles.topLeft5}></div>
        <div className={styles.topLeft6}></div>
        <div className={styles.topLeft7}></div>
        <div className={styles.topLeft8}></div>
      </div>
    </main>
  );
}
