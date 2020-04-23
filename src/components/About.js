import React, { Fragment } from 'react';
import '../css/About.css';

export default function About() {
  return (
    <Fragment>
      <h1>About</h1>
      <div className="about-container">
        <div className="inner-container">
          <p>
            Umair Ayub is a student and a self-taught developer specializing
            in Android.
          </p>
          <p>His key interests lie in Mobile and Web development.</p>
          <p>
            He now wants to help other students maker like him and improve his
            other skills.
          </p>
          <p>
            He's a creator at heart, he enjoys taking a raw thought and
            building it to completion. Currently he's working on Web /
            Frontend projects.
          </p>

          <p className="info">
            This website was built using React and other tools. Hosted on
            Netlify.
          </p>
        </div>
        <img
          src="https://pbs.twimg.com/profile_images/1151451316213952513/9V_3OVYQ_400x400.jpg"
          className="myImage"
          alt="Umair Ayub"
        ></img>
      </div>
    </Fragment>
  );
}
