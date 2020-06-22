import React, { Fragment } from 'react';
import Helmet from'react-helmet';
import Project from './Project';
import '../css/Projects.css';

const pageTitle = 'Projects';

export default function Projects() {
  return (
    <Fragment>
      <Helmet>
        <title>{pageTitle} - Umair Ayub</title>
      </Helmet>
      <h1>Projects</h1>
      <div className="projects">
        <div className="projects_list">
          <Project
            name="AppManager"
            description="Manage all your apps"
            type="Android App"
            date="December 2018"
            link="https://ply.gl/umairayub.appmanager"
            linkText="Google Play"
          />
          <Project
            name="BitLauncher"
            description="Minimalist Launcher"
            type="Android App"
            date="July 2019"
            link="https://ply.gl/umairayub.bitlauncher"
            linkText="Google Play"
          />
          <Project
            name="HTML Generator"
            description="Generate Html in a Click"
            type="Android App"
            date="April 2019"
            link="https://ply.gl/umairayub.htmlgenerator"
            linkText="Google Play"
          />
          <Project
            name="ProjectLog"
            description="Project Progress Logger"
            type="Android App"
            date="May 2019"
            link="https://ply.gl/umairayub.projectlog"
            linkText="Google Play"
          />
          <Project
            name="MaDialog"
            description="Material Alert Dialog Library"
            type="Android Library"
            date="July 2019"
            link="https://ply.gl/umairayub.madialogdemoapp"
            linkText="Google Play"
          />
          <Project
            name="Rock.it Launcher"
            description="Simple Launcher and Minimal"
            type="Android App"
            date="March 2019"
            link="https://ply.gl/umairayub.rockitlauncher"
            linkText="Google Play"
          />
          <Project
            name="Github Stars"
            description="Open Source Stars"
            type="Web App"
            date="Nov 2019"
            link="https://githubstars.netlify.com"
            linkText="Visit"
          />
          <Project
            name="FindThatBook"
            description="Find Books easily by searching title, author, publisher or just a keyword"
            type="Android App"
            date="Nov 2019"
            link="https://ply.gl/codes.umair.findthatbook"
            linkText="Google Play"
          />
          <Project
            name="PokeDex"
            description="List of Pokemons with their types and abilities"
            type="Web App"
            date="March 2020"
            link="https://pokidex.netlify.com"
            linkText="Visit"
          />
          <Project
            name="GetMovies"
            description="A movie Downloading site"
            type="Web App"
            date="April 2020"
            link="https://app-movies.netlify.com"
            linkText="Visit"
          />
          <Project
            name="Hit the Pumpkin Man"
            description="A whack a mole like Game"
            type="Android Game"
            date="May 2020"
            link="https://ply.gl/codes.umair.hitandroid"
            linkText="Visit"
          />
          <Project
            name="Quotes"
            description="Best Quotes and Sayings"
            type="Android App"
            date="Jun 2020"
            link="https://ply.gl/codes.umair.quotes"
            linkText="Visit"
          />
        </div>
      </div>
    </Fragment>
  );
}
