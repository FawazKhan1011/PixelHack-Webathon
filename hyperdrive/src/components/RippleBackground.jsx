// // src/components/RippleBackground.jsx
// import { useEffect, useState } from "react";
// import {motion, AnimatePresence } from "framer-motion";

// export default function RippleBackground() {
//   const [ripples, setRipples] = useState([]);

//   const addRipple = (e) => {
//     const { clientX, clientY } = e;
//     const newRipple = {
//       id: Date.now() + Math.random(),
//       x: clientX,
//       y: clientY,
//     };
//     setRipples((prev) => [...prev.slice(-10), newRipple]); // Keep max 10 ripples for performance
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", addRipple);
//     return () => window.removeEventListener("mousemove", addRipple);
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//       <AnimatePresence>
//         {ripples.map((ripple) => (
//           <motion.div
//             key={ripple.id}
//             className="absolute w-12 h-12 rounded-full border border-[#E6E6E6]/40 shadow-[0_0_30px_10px_rgba(230,230,230,0.1)]"
//             style={{
//               left: ripple.x - 24,
//               top: ripple.y - 24,
//             }}
//             initial={{ scale: 0.2, opacity: 0.4 }}
//             animate={{ scale: 3.5, opacity: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//           />
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }
