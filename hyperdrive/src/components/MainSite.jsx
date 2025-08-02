import React, { useState, useEffect } from "react";
import "./MainSite.css";
import "./team.css";

const cars = [
  {
    name: "Koenigsegg Jesko",
    image: '/src/assets/jesko.png',
    tagline: "Relentless Power. Limitless Innovation.",
  },
  {
    name: "Pagani Huayra R",
    image: "/src/assets/huayra.png",
    tagline: "Artisan Craft, Unmatched Performance.",
  },
  {
    name: "Bugatti Bolide",
    image: "/src/assets/bolide.png",
    tagline: "Speed Unleashed. Beyond Imagination.",
  },
];

const marqueeCars = [
  {
    name: "Ferrari LaFerrari",
    image: "/src/assets/ferrari.png",
  },
  {
    name: "McLaren P1",
    image: "/src/assets/p1.png",
  },
  {
    name: "Lamborghini Aventador",
    image: "/src/assets/aventador.png",
  },
  {
    name: "Pagani Zonda",
    image: "/src/assets/zonda.png",
  },
  {
    name: "Koenigsegg Agera",
    image: "/src/assets/agera.png",
  },
  {
    name: "Bugatti Chiron",
    image: "/src/assets/chiron.png",
  },
];

export default function MainSite() {
  const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
  const cards = document.querySelectorAll(".car-tech-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    { threshold: 0.25 }
  );

  cards.forEach((card) => observer.observe(card));
  return () => observer.disconnect();
}, []);



  return (
    <main className="hyper-main">
      {/* Header */}
      <header className="hyper-header">
        <div className="hyper-header-left">
          <span className="hyper-logo-dot"></span>
          <h1 className="hyper-title">HyperDrive</h1>
        </div>
        <nav className="hyper-nav">
          <a href="#home">Home</a>
          <a href="#showroom">Showroom</a>
          <a href="#team">Team</a>
          <a href="#info">Info</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hyper-hero">
        <h2 className="hyper-headline">
          Unleash <span className="highlight">Power</span>,
          <br />
          Command <span className="semi-highlight">Elegance</span>
        </h2>
        <p className="hyper-description">
          Where the future of supercars meets untamed innovation.
          Discover the next era of driving at HyperDrive.
        </p>
        <a href="#showroom" className="hyper-btn">
          View Showroom
        </a>
      </section>

      {/* Car Showcase */}
      <section className="hyper-cars" id="showroom">
        {cars.map((car) => (
          <div className="hyper-car-card" key={car.name}>
            <img
              src={car.image}
              alt={car.name}
              className="hyper-car-img"
              style={{ width: "100%", maxHeight: "auto", objectFit: "contain" }}
            />
            <h3 className="hyper-car-name">{car.name}</h3>
            <p className="hyper-car-tag">{car.tagline}</p>
            <button className="hyper-card-btn">Learn More</button>
          </div>
        ))}
      </section>

      {/* Infinite Marquee */}
      <section
        className="hyper-marquee-section"
        aria-label="Featured supercars infinite marquee"
      >
        <h2 className="hyper-marquee-heading">Featured Hypercars</h2>
        <div
          className={`hyper-marquee-content ${isPaused ? "paused" : ""}`}
          aria-live="off"
        >
          {[...marqueeCars, ...marqueeCars].map((car, idx) => (
            <div
              key={`${car.name}-${idx}`}
              className="hyper-marquee-item"
              tabIndex={0}
              aria-label={car.name}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img
                src={car.image}
                alt={car.name}
                className="hyper-marquee-img"
              />
              <p className="hyper-marquee-car-name">{car.name}</p>
            </div>
          ))}
        </div>
      </section >
      {/* === Element 7: Our Team Section === */}
          <section id="team"
            className="hyper-team-section"
            onMouseMove={(e) => {
              const img = document.querySelector(".cursor-preview-img");
              if (img) {
                img.style.left = `${e.clientX + 20}px`;
                img.style.top = `${e.clientY + 20}px`;
              }
            }}
            onMouseLeave={() => {
              const img = document.querySelector(".cursor-preview-img");
              if (img) img.style.opacity = 0;
            }}
          >
            <h2 className="hyper-team-heading">Our Team</h2>

            <div className="hyper-team-members">
              {[
                {
                  name: "Lena Marquez",
                  role: "UI/UX & Animation",
                  image: "/src/assets/pfp/jack.jpeg",
                },
                {
                  name: "Matteo Rinaldi",
                  role: "Frontend Engineer",
                  image: "/src/assets/pfp/meri.jpeg",
                },
                {
                  name: "Jack Holland",
                  role: "3D Artist",
                  image: "/src/assets/pfp/leo.jpeg",
                },
                {
                  name: "Leo Roberts",
                  role: "Performance Optimizer",
                  image: "/src/assets/pfp/p1.jpeg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="hyper-team-member"
                  onMouseEnter={() => {
                    const img = document.querySelector(".cursor-preview-img");
                    if (img) {
                      img.style.backgroundImage = `url(${member.image})`;
                      img.style.opacity = 1;
                    }
                  }}
                  onMouseLeave={() => {
                    const img = document.querySelector(".cursor-preview-img");
                    if (img) img.style.opacity = 0;
                  }}
                >
                  <span className="hyper-team-name">{member.name}</span>
                  <span className="hyper-team-role">{member.role}</span>
                </div>
              ))}
            </div>

            {/* Floating Image Cursor Preview */}
             <div className="cursor-preview-img"></div>
          </section>
            
         {/* Car Tech Highlights Section */}
          <section id="car-tech" className="car-tech-section">
  <h2 className="section-title">Car Tech Glossary</h2>
  <div id="info" className="car-tech-grid">
    {[
     {
    title: "Horsepower",
    info: "Measures engine power. More horsepower means faster acceleration and higher top speed."
  },
  {
    title: "Torque",
    info: "Rotational force from the engine. Crucial for acceleration and towing capacity."
  },
  {
    title: "Transmission",
    info: "System that transfers engine power to wheels. Includes manual, automatic, and CVT types."
  },
  {
    title: "Downforce",
    info: "Aerodynamic force pushing the car down, improving grip and stability at high speeds."
  },
  {
    title: "Turbocharger",
    info: "Forces air into the engine, boosting power without increasing engine size."
  },
  {
    title: "Aerodynamics",
    info: "How air flows around the car. Optimized designs reduce drag and improve fuel efficiency."
  },
  {
    title: "Carbon Fiber",
    info: "Ultra-lightweight and strong material used for body panels to reduce weight and increase speed."
  },
  {
    title: "Suspension",
    info: "System connecting wheels to the body, ensuring smooth ride and better control."
  },
  {
    title: "ABS (Anti-lock Braking System)",
    info: "Prevents wheels from locking up during hard braking to maintain steering control."
  },
  {
    title: "Drivetrain",
    info: "Mechanism transmitting power from engine to wheels. Includes FWD, RWD, AWD, and 4WD systems."
  },
  {
    title: "Exhaust System",
    info: "Directs and filters gases from the engine, improving performance and reducing emissions."
  },
  {
    title: "Fuel Injection",
    info: "Injects fuel into the engine cylinders for combustion. More efficient than carburetors."
  },
  {
    title: "LSD (Limited Slip Differential)",
    info: "Distributes power to wheels with traction, improving handling during cornering."
  },
  {
    title: "Launch Control",
    info: "Optimizes engine output and traction to provide maximum acceleration from a standstill."
  },
  {
    title: "Infotainment System",
    info: "In-car media system combining entertainment, navigation, and connectivity features."
  },
  {
    title: "Active Aerodynamics",
    info: "Moveable components (like spoilers) that adjust in real-time to improve performance."
  }
    ].map((stat, idx) => (
      <div
        key={idx}
        className="car-tech-card"
        style={{ transitionDelay: `${(idx % 4) * 100}ms` }} // creates line-wise wave
      >
        <h3>{stat.title}</h3>
        <p>{stat.info}</p>
      </div>
    ))}
  </div>
</section>
      <footer className="hyper-footer">
        <div className="hyper-footer-brand">
          <span className="hyper-logo-dot-small"></span>
          <span className="hyper-footer-title">HyperDrive &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="hyper-footer-links">
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://instagram.com/">Instagram</a>
          <a href="mailto:info@hyperdrive.com">Contact</a>
        </div>
      </footer>
    </main>
  );
}
