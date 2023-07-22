import React from "react";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedinIn } from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { PiGithubLogoFill } from "react-icons/pi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Let's Connect </h3>
          <p className="contact__description">
            Fell free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of our
            visions.
          </p>

          <div className="contact__info ">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">alashrafulislamshorif@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">01814458638</h4>
              </div>
            </div>
          </div>

          <div className="contact__social">
            <a
              target="_blank"
              href="https://github.com/nahyan007"
              className="contact__social-link"
              rel="noreferrer"
            >
              <PiGithubLogoFill />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/al-ashraful-islam-shorif-707845212/"
              className="contact__social-link"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-div">
            <input
              type="text"
              placeholder="Your Name"
              className="form__control"
            />
          </div>

          <div className="form__input-div">
            <input
              type="email"
              placeholder="Your Mail"
              className="form__control"
            />
          </div>

          <div className="form__input-div">
            <input
              type="subject"
              placeholder="Your Subject"
              className="form__control"
            />
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button type="button" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
