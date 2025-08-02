import { useEffect, useState } from "react";
import "../components/loader.css";
import tire from "../assets/tire.png"; // adjust path as needed

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  const texts = [
    "HYPERDRIVE INITIATING",
    "ENGINE CALIBRATION",
    "AERODYNAMICS CHECK",
    "SYSTEMS ONLINE",
    "READY FOR LAUNCH",
  ];

  useEffect(() => {
    let delay = 40;

    if (progress >= 45 && progress <= 65) {
      delay = 80;
    }

    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      } else {
        onComplete();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => {
        const next = (prev + 1) % texts.length;
        setAnimateKey((k) => k + 1); // force animation re-trigger
        return next;
      });
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-wrapper">
      <div className="loader-inner">
        <div className="loader-percent">{progress}%</div>
        <div key={animateKey} className="loader-text">
          {texts[currentTextIndex]}
        </div>
      </div>
      {/* Spinning Tire */}
    <img src={tire} alt="Tire" className="spinning-tire" />
    </div>
  );
}

export default Loader;
