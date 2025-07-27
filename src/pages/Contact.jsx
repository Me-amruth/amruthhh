import React from "react";
import SocialLinks from "../components/SocialLinks";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 h-screen flex flex-col justify-center items-center"
    >
        <SectionTitle text='Contact' stroke='Me' />

      <SocialLinks />
    </section>
  );
};

export default Contact;
