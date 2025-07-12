import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import {
  Home as HomeIcon,
  Building,
  Coffee,
  Award,
  Ruler,
  HardHat,
  Compass,
  PencilRuler,
  Scale,
  Grid,
  Landmark,
} from "lucide-react";
import Portfolio from "../Portfolio";

const BackgroundIcons = () => (
  <div className={styles["bg-icons"]}>
    {[
      { Icon: HomeIcon, style: { top: '10%', left: '30%', animationDelay: '0s' } },
      { Icon: Building, style: { top: '20%', right: '15%', animationDelay: '-2s' } },
      { Icon: Ruler, style: { bottom: '25%', left: '20%', animationDelay: '-4s' } },
      { Icon: HardHat, style: { top: '40%', left: '80%', animationDelay: '-6s' } },
      { Icon: Compass, style: { bottom: '45%', right: '35%', animationDelay: '-8s' } },
      { Icon: PencilRuler, style: { top: '60%', left: '15%', animationDelay: '-10s' } },
    //   { Icon: Scale, style: { top: '15%', left: '60%', animationDelay: '-12s' } },
      { Icon: Grid, style: { bottom: '30%', right: '10%', animationDelay: '-14s' } },
      { Icon: Landmark, style: { top: '75%', left: '40%', animationDelay: '-16s' } },
    ].map(({ Icon, style }, index) => (
      <Icon
        key={index}
        className={styles["floating-icon"]}
        style={{
          ...style,
          width: Math.random() * 40 + 50 + 'px',
          height: Math.random() * 40 + 50 + 'px'
        }}
      />
    ))}
  </div>
);

const Module = ({ name, role, bio, Icon }) => (
  <div className={styles["team-card"]}>
    <div className={styles["member-image"]}>
      <Icon size={64} className="opacity-25" />
    </div>
    <div className={styles["member-info"]}>
      <h3 className={styles["member-name"]}>{name}</h3>
      <div className={styles["member-role"]}>{role}</div>
      <p className={styles["member-bio"]}>{bio}</p>
    </div>
  </div>
);

const Home = () => (
  <div className={styles["home-container"]}>
    <section className={styles["hero-section"]}>
      <BackgroundIcons />

      <div className={styles.content}>
        <h1 className={styles.title}>Building Dreams with Precision</h1>
        <p className={styles.subtitle}>
          We are a team of experienced civil engineers delivering quality and sustainable structures with innovation and integrity.
        </p>
        <Link to="/contact" className={styles["cta-button"]}>
          Start Your Project
        </Link>
      </div>
    </section>

    <section ><Portfolio /></section>

    <section className={styles["team-section"]}>
      <h2 className={styles["section-title"]}>Visualize your dream home</h2>
      <div className={styles["team-grid"]}>
        <Module
          Icon={Building}
          name="Fusion"
          role="Principal Architect"
          bio="With over 15 years of experience in architectural design and project management, ArchiDesigns leads our team with expertise and innovation."
        />
        <Module
          Icon={Award}
          name="Passion"
          role="Structural Engineer"
          bio="Specializing in sustainable design and structural optimization, Sarah ensures our projects are both elegant and resilient."
        />
        <Module
          Icon={Coffee}
          name="Creativity"
          role="Project Manager"
          bio="David's attention to detail and client-focused approach helps deliver projects that exceed expectations, on time and within budget."
        />
      </div>
    </section>
  </div>
);

export default Home;
