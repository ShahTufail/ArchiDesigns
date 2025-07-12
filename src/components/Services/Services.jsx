import React from "react";
import { Building2, Ruler, HardHat, PenTool } from "lucide-react";
import styles from "./Services.module.css";

const ServiceCard = ({ icon: Icon, title, description, variant }) => (
  <div className={`${styles["service-card"]} ${styles[`service-card-${variant}`]}`}>
    <Icon className={styles["service-icon"]} />
    <h3 className={styles["service-title"]}>{title}</h3>
    <p className={styles["service-description"]}>{description}</p>
  </div>
);

const Services = () => (
  <div className={styles["services-container"]}>
    <h2 className={styles["services-title"]}>Our Services</h2>
    <p className={styles["services-description"]}>
      We provide comprehensive architectural and engineering solutions, blending innovation with precision to create spaces that inspire and endure.
    </p>
    
    <div className={styles["services-grid"]}>
      <ServiceCard
        icon={Building2}
        title="Interior Design"
        description="Transform spaces with our innovative interior design solutions. We create functional, aesthetically pleasing environments that reflect your unique style and needs."
        variant="interior"
      />
      
      <ServiceCard
        icon={HardHat}
        title="Structural Engineering"
        description="Expert structural engineering services ensuring safety and stability. We handle everything from analysis and design to renovation and retrofitting."
        variant="structural"
      />
      
      <ServiceCard
        icon={Ruler}
        title="Draftsmanship"
        description="Precise technical drawings and detailed documentation. Our drafting services provide clear, accurate blueprints for successful project execution."
        variant="drafting"
      />
      
      <ServiceCard
        icon={PenTool}
        title="Architectural Design"
        description="Innovative architectural design solutions that combine form and function. We create sustainable, beautiful spaces that enhance lives and communities."
        variant="design"
      />
    </div>
  </div>
);

export default Services;