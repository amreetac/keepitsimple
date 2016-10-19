import React from 'react';
import Navbar from '../Children/Navbar';
import Footer from '../Children/Footer';
class about extends React.Component{
    componentWillUnmount() {
        $('.carousel').carousel({
        interval: false //changes the speed
    });
    }
    render(){
        
        return(
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12">
                                <hr />
                                <h2 className="intro-text text-center">About
                                    <strong>Keep It Simple</strong>
                                </h2>
                                <hr />
                            </div>
                            <div className="col-md-6">
                                <img className="img-responsive img-border-left" src="img/slide-2.jpg" alt="" />
                            </div>
                            <div className="col-md-6">
                                <p>Do you have only a few items in your fridge?</p>
                                <p>Don't know what to do with them? </p>
                                <p>Let's Keep It Simple and let us make your menu!</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12">
                                <hr />
                                <h2 className="intro-text text-center">Our
                                    <strong>Team</strong>
                                </h2>
                                <hr />
                            </div>
                            <div className="col-sm-3 text-center">
                                <img className="img-responsive team" src="img/padma.jpg" alt="padma"  />
                                <h3>Padmaja Kondeti
                                    <small>Full Stack Developer and API Specialist</small>
                                </h3>
                            </div>
                            <div className="col-sm-3 text-center">
                                <img className="img-responsive team" src="img/amreeta.jpg" alt="amreeta"  />
                                <h3>Amreeta Choudhury
                                    <br />
                                    <small>Project Manager and Front-end Designer</small>
                                </h3>
                            </div>
                            <div className="col-sm-3 text-center">
                                <img className="img-responsive team" src="img/stef2.jpg"  alt="stef" />
                                <h3> Stefanie Centi
                                    <br />
                                    <small>API Specialist and Back-end Expert</small>
                                </h3>
                            </div>
                            <div className="col-sm-3 text-center">
                                <img className="img-responsive team" src="img/suda2.jpg"  alt="suda" />
                                <h3> Sudharshana Chavan
                                    <br />
                                    <small>Full Stack Developer and Authentication Specialist</small>
                                </h3>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

                <div className="container">

                <div className="row">
                    <div className="box">
                        <div className="col-sm-6 text-center">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel" >
                                { /* Indicators  */}
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                    <li data-target="#myCarousel" data-slide-to="4"></li>
                                </ol>

                                {/* Wrapper for slides  */}
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <img src="img/pic1.jpg" alt="Image 1" id="center" />
                                    </div>

                                    <div className="item">
                                        <img src="img/picture2.jpg" alt="Image 2" id="center" />
                                    </div>

                                    <div className="item">
                                        <img src="img/pic3.jpg" alt="Image 3" id="center" />
                                    </div>

                                    <div className="item">
                                        <img src="img/pic4.jpg" alt="Image 4" id="center" />
                                    </div>
                                    <div className="item">
                                        <img src="img/group.jpg" alt="Image 5"id="center" />
                                    </div>
                                </div>

                                {/*  Left and right controls */}
                                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev" >
                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        )
    }
}
export default about;