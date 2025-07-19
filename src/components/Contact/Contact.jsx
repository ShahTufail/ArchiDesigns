import React from "react";
import { Contact as me, MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./Contact.module.css";

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className={styles["info-group"]}>
    <Icon className={styles["info-icon"]} size={24} />
    <div className={styles["info-content"]}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Create email link with pre-filled content
    const mailtoLink = `mailto:support@archidesigns.co.in?subject=Inquiry from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles["contact-container"]}>
      <h2 className={styles["contact-title"]}>Get in Touch</h2>
      <p className={styles["contact-description"]}>
        Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      
      <div className={styles["contact-content"]}>
        <div className={styles["contact-form"]}>
          <form onSubmit={handleSubmit}>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]} htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles["form-input"]}
                placeholder="Your name"
                required
              />
            </div>
            
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles["form-input"]}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className={styles["form-textarea"]}
                placeholder="Tell us about your project"
                required
              ></textarea>
            </div>
            
            <button type="submit" className={styles["submit-button"]}>
              Send Message
            </button>
          </form>
        </div>
        
        <div className={styles["contact-info"]}>
          <ContactInfo
            icon={me}
            title="Er. Tabish Geelani"
            content="Principal Architect & Founder"
          />

          <ContactInfo
            icon={MapPin}
            title="Office Address"
            content="1000, Street 97, Nowpora, Munawarabad, Srinagar, Jammu & Kashmir, 190018"
          />
          
          <ContactInfo
            icon={Phone}
            title="Phone"
            content="+91 9018381436  | +91 9797290692"
          />
          
          <ContactInfo
            icon={Mail}
            title="Email"
            content="support@archidesigns.co.in | asminfratech24@gmail.com"
          />
          
          <ContactInfo
            icon={Clock}
            title="Working Hours"
            content="Monday - Saturday: 9:00 AM - 7:00 PM"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;