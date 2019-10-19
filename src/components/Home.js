import React, { Component } from 'react'
import Helmet from 'react-helmet'
import '../css/Home.css'

class Home extends Component {
    render() {
        const pageTitle = "Hi, I'm Umair";
        const pageContent = `I'm a self-taught Software Developer Specialized in Android App Development!`;

       return(
            <React.Fragment>
                <Helmet>
                    <title>Umair Ayub - Android App Developer Pakistan</title>
                    <meta name="description" content="{pageContent}" />
                </Helmet>
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
                <h1 className="name">{pageTitle}</h1>
                <p className="description">Student | Maker</p>
                <h4 className="about">{pageContent}</h4>
                <p className="languages">Languages : Java | Kotlin | Python | HTML | CSS | JavaScript</p>
                <div className="btn"><a href="mailto:umairayub79@gmail.com"><strong>Hire me !</strong></a></div>
                <div className="container">
                <a href="https://facebook.com/umairayub28" target="_blank"> <i title="Find me on Facebook" className="fab fa-facebook fa-2x" style={socialStyle}></i></a>
                <a href="https://twitter.com/UmairAyub79" target="_blank"> <i title="Follow me on twitter" className="fab fa-twitter fa-2x" style={socialStyle}></i></a>
                <a href="https://producthunt.com/@umairayub18" target="_blank"> <i title="Find me on Product Hunt" className="fab fa-product-hunt fa-2x" style={socialStyle}></i></a>
                <a href="https://github.com/umairayub79" target="_blank"> <i title="Find me on Github" className="fab fa-github  fa-2x" style={socialStyle}></i></a>
                <a href="mailto:umairayub79@gmail.com" target="_blank"> <i title="Mail me" className="fas fa-envelope fa-2x" style={socialStyle}></i></a>
            </div>


            </React.Fragment>
       )

    }
}
const socialStyle = {
    color: "#ffffff",
    backgroundColor: "#000000"
}
export default Home;