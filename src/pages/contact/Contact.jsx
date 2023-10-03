import "./contact.css";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )};

  return (
    <>
      <section id="contact">
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdAlternateEmail className="contact_option-icon" />
              <h4>Email</h4>
              <h5>ihkraiyan@gmail.com</h5>
              <a href="mailto:info@btcn-bd.com">Send a Message</a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact_option-icon" />
              <h4>Whats App</h4>
              <h5>SavorHub</h5>
              <a href="https://api.whatsapp.com/send?phone=+8801714346346">
                Send a Message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="8"
              required
            ></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
