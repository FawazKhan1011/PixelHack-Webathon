// import React, { useEffect, useRef } from 'react';

// export default function RippleCanvas() {
//   const canvasRef = useRef(null);
//   const ripples = useRef([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     canvas.width = width;
//     canvas.height = height;

//     function handleResize() {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//     }

//     function handleMouseMove(e) {
//       ripples.current.push({
//         x: e.clientX,
//         y: e.clientY,
//         radius: 0,
//         maxRadius: 160 + Math.random() * 40,
//         opacity: 0.65 + Math.random() * 0.2,
//         expansion: 2.4 + Math.random() * 1.1,
//       });
//     }

//     window.addEventListener('resize', handleResize);
//     window.addEventListener('mousemove', handleMouseMove);

//     function animate() {
//       ctx.clearRect(0, 0, width, height);

//       ripples.current.forEach((ripple, i) => {
//         ripple.radius += ripple.expansion;
//         ripple.opacity *= 0.97;

//         // Remove faded ripples
//         if (ripple.opacity < 0.05) {
//           ripples.current.splice(i, 1);
//         } else {
//           const grad = ctx.createRadialGradient(
//             ripple.x, ripple.y, ripple.radius * 0.7,
//             ripple.x, ripple.y, ripple.radius
//           );
//           grad.addColorStop(0, `rgba(230, 230, 255, ${ripple.opacity * 0.7})`);
//           grad.addColorStop(0.5, `rgba(220,220,250,${ripple.opacity * 0.28})`);
//           grad.addColorStop(0.9, 'rgba(150,200,255,0.12)');
//           grad.addColorStop(1, 'rgba(180,210,255,0)');

//           ctx.beginPath();
//           ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
//           ctx.fillStyle = grad;
//           ctx.filter = 'blur(2.7px)';
//           ctx.fill();
//           ctx.filter = 'none';
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         pointerEvents: 'none',
//         zIndex: 0,
//         background: '#0D0D0D',
//       }}
//     />
//   );
// }
