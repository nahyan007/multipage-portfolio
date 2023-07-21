import React from "react";
import "./Home.css";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="profile" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Al Ashraful Islam Shorif.</span> React Web Developer
          </h1>

          <p className="home__description">
            A React website developer. Crafting dynamic web experiences is my
            passion. With an eye for design and expertise in React, I create
            captivating and seamless interfaces that leave a lasting impact.
            Let's bring our vision to life with the power of React! Explore my
            work and let's collaborate.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

    <div className="color__block"></div>

    </section>
  );
};

export default Home;
