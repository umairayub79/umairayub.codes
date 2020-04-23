import React from 'react';
import Helmet from 'react-helmet';
import '../css/Home.css';

export default function Home() {
    const pageTitle = "Hi, I'm Umair";
    const pageContent = `I'm a self-taught Software Developer Specialized in Android App Development!`;
    const socialStyle = {
        color:"black"
    }
   return(
        <React.Fragment>
            <Helmet>
                <title>Umair Ayub - Android App Developer Pakistan</title>
                <meta name="description" content="{pageContent}" />
            </Helmet>
            <h1 className="name">{pageTitle}</h1>
            <p className="description">Student | Maker</p>
            <h4 className="about">{pageContent}</h4>
            <p className="languages">Languages : Java | Kotlin | Python | HTML | CSS | JavaScript</p>
            <div className="btn"><a href="mailto:umairayub79@gmail.com"><strong>Hire me !</strong></a></div>
            <div className="social-container">
            <a href="https://facebook.com/umairayub28" target="_blank" rel="noopener noreferrer"> <i title="Find me on Facebook" className="fab fa-facebook fa-2x" style={socialStyle}></i></a>
            <a href="https://twitter.com/UmairAyub79" target="_blank" rel="noopener noreferrer"> <i title="Follow me on twitter" className="fab fa-twitter fa-2x" style={socialStyle}></i></a>
            <a href="https://producthunt.com/@umairayub18" target="_blank" rel="noopener noreferrer"> <i title="Find me on Product Hunt" className="fab fa-product-hunt fa-2x" style={socialStyle}></i></a>
            <a href="https://www.youtube.com/channel/UC1ybBPjQ-wcvl9kzdhrC9TQ" target="_blank" rel="noopener noreferrer"> <i title="Subscribe on my youtube Channel" className="fab fa-youtube fa-2x" style={socialStyle}></i></a>
            <a href="https://github.com/umairayub79" target="_blank" rel="noopener noreferrer"> <i title="Find me on Github" className="fab fa-github  fa-2x" style={socialStyle}></i></a>
            <a href="mailto:umairayub79@gmail.com" target="_blank" rel="noopener noreferrer"> <i title="Mail me" className="fas fa-envelope fa-2x" style={socialStyle}></i></a>
   

        </div>


        </React.Fragment>
   )
}

