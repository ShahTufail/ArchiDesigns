import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolioPage}>
      <section className={styles.section}>
        <h2>About Me</h2>
        <p>
          I'm a passionate civil engineer with over 7 years of experience in structural design,
          site supervision, and project coordination. I specialize in sustainable and cost-efficient
          solutions for residential and infrastructure projects. My work bridges the gap between 
          creativity and precision.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Expertise</h2>
        <ul className={styles.skillsList}>
          <li>Structural Design & Analysis (ETABS, STAAD.Pro)</li>
          <li>AutoCAD Drafting & BIM Modeling</li>
          <li>Site Supervision & Construction Management</li>
          <li>Soil Mechanics & Foundation Engineering</li>
          <li>Urban Drainage & Planning</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Highlighted Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3>Hilltop Eco Villas</h3>
            <p>Led the structural design and site execution for a sustainable residential complex in hilly terrain.</p>
          </div>
          <div className={styles.projectCard}>
            <h3>Smart Bridge Retrofit</h3>
            <p>Managed a retrofitting project involving traffic optimization and seismic resilience upgrades.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
