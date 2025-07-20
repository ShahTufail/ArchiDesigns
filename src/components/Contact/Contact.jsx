import React from "react";
import { Contact as me, MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-start gap-4 mb-6">
    <Icon className="text-rose-400 bg-rose-50 rounded-full p-2 shadow" size={28} />
    <div>
      <h3 className="font-bold text-rose-700">{title}</h3>
      <p className="text-gray-600">{content}</p>
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
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-6 mt-10">Get in Touch</h2>
      <p className="text-lg text-rose-500 mb-10 text-center max-w-2xl mx-auto">
        Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1 mb-8 md:mb-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-rose-700 font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-rose-700 font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-rose-700 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 min-h-[120px]"
                placeholder="Tell us about your project"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-rose-700 focus:ring-2 focus:ring-rose-400 transition">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-1">
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