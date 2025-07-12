import React from "react";
import { Building, Building2, Factory, School } from "lucide-react";
import styles from "./Works.module.css";

const WorkCard = ({ icon: Icon, title, category, description, variant }) => (
  <div className={`${styles["work-card"]} ${styles[`work-${variant}`]}`}>
    <div className={styles["work-image"]}>
      <Icon size={48} className="m-auto h-full opacity-25" />
    </div>
    <div className={styles["work-content"]}>
      <div className={styles["work-category"]}>{category}</div>
      <h3 className={styles["work-title"]}>{title}</h3>
      <p className={styles["work-description"]}>{description}</p>
    </div>
  </div>
);

const Works = () => (
  <div className={styles["works-container"]}>
    <h2 className={styles["works-title"]}>Our Portfolio</h2>
    <p className={styles["works-description"]}>
      Explore our diverse portfolio of successful projects across residential, commercial, industrial, and institutional sectors.
    </p>
    
    <div className={styles["works-grid"]}>
      <WorkCard
        icon={Building}
        category="Residential"
        title="Modern Living Spaces"
        description="Contemporary residential projects featuring innovative designs, sustainable materials, and optimal space utilization."
        variant="residential"
      />
      
      <WorkCard
        icon={Building2}
        category="Commercial"
        title="Business Complexes"
        description="State-of-the-art commercial buildings designed for efficiency, accessibility, and modern business needs."
        variant="commercial"
      />
      
      <WorkCard
        icon={Factory}
        category="Industrial"
        title="Industrial Facilities"
        description="Robust industrial structures engineered for functionality, safety, and seamless operational flow."
        variant="industrial"
      />
      
      <WorkCard
        icon={School}
        category="Institutional"
        title="Educational Campuses"
        description="Purpose-built educational facilities that foster learning through thoughtful design and space planning."
        variant="institutional"
      />
    </div>
  </div>
);

export default Works;