import styles from "./styles.module.scss";
import Picture1 from "../../../public/images/HAROUNN.png";
import Picture2 from "../../../public/images/2.jpg";
import Picture3 from "../../../public/images/3.jpg";
import Picture4 from "../../../public/images/4.jpg";
import Picture5 from "../../../public/images/5.jpg";
import Picture6 from "../../../public/images/6.jpg";
import Picture7 from "../../../public/images/textPic.jpg";
import Picture8 from "../../../public/images/8.jpg";
import Picture9 from "../../../public/images/9.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// Passos (Findar este | fazer o túnel de imagens | fazer transição com a imagem reduzindo)

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // resize images
  const scale4 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [0, 0.05]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1.2, 60]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [0.2, 4]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);
  const scale11 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const pictures = [
    {
      src: Picture8,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale8,
    },
    {
      src: Picture5,
      scale: scale9,
    },
    {
      src: Picture6,
      scale: scale10,
    },
    {
      src: Picture9,
      scale: scale11,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className={styles.logo}></div>
      <div className={styles.textPositionTwo}>
        There&#x27;s a memory of a cobblestone street, bathed in the golden glow
        of a setting sun. The air carries the sweet scent of blooming flowers,
        and laughter dances like musical notes, echoing through the narrow
        alleyways. I can almost feel the warmth of an embrace, the embrace of a
        friend I&#x27;ve never embraced in this lifetime. It&#x27;s a memory
        that belongs to a realm beyond the tangible, a dance of deja vu in the
        theater of my imagination. Then, there&#x27;s the memory of a quiet
        lakeside, where the moon paints a silver pathway on the water&#x27;s
        surface. A rowboat sways gently, tethered to a weathered dock. I sit
        there, a silhouette against the shimmering reflections, contemplating a
        love story that never unfolded in my reality. The soft rustle of leaves
        and the distant murmur of a nightingale compose a symphony for two
        hearts that never beat in harmony. These memories are like old postcards
        from a parallel existence, stamped with the seal of emotions I&#x27;ve
        never fully experienced. They flutter in the breeze of my subconscious,
        inviting me to decipher their cryptic messages. The images are vivid,
        the emotions palpable, yet the origin remains elusive, as if borrowed
        from the dreams of another soul. In the tapestry of my mind, these
        memories form a mosaic of uncharted territories, painting a portrait of
        a life that might have been, or perhaps, a life that is yet to be. They
        are not echoes of my past, but rather, echoes of a past that chose to
        visit me in the quietude of contemplation, leaving me with a sense of
        nostalgia for a time and a place that exists beyond the boundaries of my
        existence.
      </div>
    </div>
  );
}

// export default function Index() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   // resize images
//   const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
//   const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
//   const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
//   const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
//   const scale9 = useTransform(scrollYProgress, [0, 1], [1, 10]);

//   const pictures = [
//     {
//       src: Picture1,
//       scale: scale4,
//     },
//     {
//       src: Picture2,
//       scale: scale5,
//     },
//     {
//       src: Picture3,
//       scale: scale6,
//     },
//     {
//       src: Picture4,
//       scale: scale5,
//     },
//     {
//       src: Picture5,
//       scale: scale6,
//     },
//     {
//       src: Picture6,
//       scale: scale8,
//     },
//     {
//       src: Picture7,
//       scale: scale9,
//     },
//   ];

//   return (
//     <div ref={container} className={styles.container}>
//       <div className={styles.sticky}>
//         {pictures.map(({ src, scale }, index) => {
//           return (
//             <motion.div key={index} style={{ scale }} className={styles.el}>
//               <div className={styles.imageContainer}>
//                 <Image src={src} fill alt="image" placeholder="blur" />
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//       <div className={styles.secondPic}></div>
//       <div className={styles.textPosition}>
//         There&#x27;s a memory of a cobblestone street, bathed in the golden glow of a
//         setting sun. The air carries the sweet scent of blooming flowers, and
//         laughter dances like musical notes, echoing through the narrow
//         alleyways. I can almost feel the warmth of an embrace, the embrace of a
//         friend I&#x27;ve never embraced in this lifetime. It&#x27;s a memory that belongs
//         to a realm beyond the tangible, a dance of deja vu in the theater of my
//         imagination. Then, there&#x27;s the memory of a quiet lakeside, where the
//         moon paints a silver pathway on the water&#x27;s surface. A rowboat sways
//         gently, tethered to a weathered dock. I sit there, a silhouette against
//         the shimmering reflections, contemplating a love story that never
//         unfolded in my reality. The soft rustle of leaves and the distant murmur
//         of a nightingale compose a symphony for two hearts that never beat in
//         harmony. These memories are like old postcards from a parallel
//         existence, stamped with the seal of emotions I&#x27;ve never fully
//         experienced. They flutter in the breeze of my subconscious, inviting me
//         to decipher their cryptic messages. The images are vivid, the emotions
//         palpable, yet the origin remains elusive, as if borrowed from the dreams
//         of another soul. In the tapestry of my mind, these memories form a
//         mosaic of uncharted territories, painting a portrait of a life that
//         might have been, or perhaps, a life that is yet to be. They are not
//         echoes of my past, but rather, echoes of a past that chose to visit me
//         in the quietude of contemplation, leaving me with a sense of nostalgia
//         for a time and a place that exists beyond the boundaries of my
//         existence.
//       </div>
//     </div>
//   );
// }
