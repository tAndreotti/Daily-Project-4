import styles from "./styles.module.scss";
import Picture1 from "../../../public/images/1.jpeg";
import Picture2 from "../../../public/images/2.jpeg";
import Picture3 from "../../../public/images/3.jpg";
import Picture4 from "../../../public/images/4.jpg";
import Picture5 from "../../../public/images/5.jpg";
import Picture6 from "../../../public/images/6.jpg";
import Picture7 from "../../../public/images/7.jpeg";
import Floating1 from "../../../public/images/floating_1.jpg";
import Floating2 from "../../../public/images/floating_1.jpg";
import Floating3 from "../../../public/images/floating_1.jpg";
import Floating4 from "../../../public/images/floating_1.jpg";
import Floating5 from "../../../public/images/floating_1.jpg";
import Floating6 from "../../../public/images/floating_1.jpg";
import Floating7 from "../../../public/images/floating_1.jpg";
import Floating8 from "../../../public/images/floating_1.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
} from "../../data";

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
        src: Floating1,
        scale: scale4,
        },
        {
        src: Floating2,
        scale: scale5,
        },
        {
        src: floating3,
        scale: scale6,
        },
        {
        src: floating4,
        scale: scale5,
        },
        {
        src: floating5,
        scale: scale6,
        },
        {
        src: floating6,
        scale: scale8,
        },
        {
        src: floating7,
        scale: scale9,
        },
    ];
    
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

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
      <main
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.main}
      >
        <div ref={plane1} className={styles.plane}>
          <Image src={floating1} alt="image" width={300} />
          <Image src={floating2} alt="image" width={300} />
          <Image src={floating7} alt="image" width={225} />
        </div>
        <div ref={plane2} className={styles.plane}>
          <Image src={floating4} alt="image" width={250} />
          <Image src={floating6} alt="image" width={200} />
          <Image src={floating8} alt="image" width={225} />
        </div>
        <div ref={plane3} className={styles.plane}>
          <Image src={floating3} alt="image" width={150} />
          <Image src={floating5} alt="image" width={200} />
        </div>
        <div className={styles.title}>
          <h1>Floating Images Gallery</h1>
          <p>Next.js and GSAP</p>
        </div>
      </main>
    </div>
  );
}
