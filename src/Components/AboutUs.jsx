import React from "react";
import "./AboutUs.css";
import trainer1 from "../Asset/trainer1.png";
import trainer2 from "../Asset/trainer2.png";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Transforming Lives, One Workout at a Time</h1>
          {/* <p>Your fitness journey begins here. Join us today!</p> */}
          <Link to={"/"} className="cta-button">
            Join Us Now
          </Link>
        </div>
      </div>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <b>Your Gym Name</b>, we are dedicated to empowering individuals
          through fitness, creating a supportive environment where everyone can
          thrive.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-card">
            <i className="fa fa-dumbbell icon"></i>
            <h3>Expert Trainers</h3>
            <p>Certified and experienced fitness professionals.</p>
          </div>
          <div className="feature-card">
            <i className="fa fa-heartbeat icon"></i>
            <h3>Modern Facilities</h3>
            <p>Top-of-the-line equipment and amenities.</p>
          </div>
          <div className="feature-card">
            <i className="fa fa-bullseye icon"></i>
            <h3>Personalized Plans</h3>
            <p>Workouts tailored to your goals and needs.</p>
          </div>
        </div>
      </section>

      <section className="trainers-section">
        <h2>Meet Our Trainers</h2>
        <div className="trainer-cards">
          <div className="trainer-card">
            <img src={trainer1} alt="Trainer 1" />
            <h3>Amar Hissal</h3>
            <p>Strength Training Specialist</p>
          </div>
          <div className="trainer-card">
            <img src={trainer2} alt="Trainer 2" />
            <h3>Yash Dharmal</h3>
            <p>Yoga and Flexibility Coach</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
