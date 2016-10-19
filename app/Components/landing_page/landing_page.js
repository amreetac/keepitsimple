import React from 'react';
import Navbar from '../Children/Navbar';
import Footer from '../Children/Footer';
class landing_page extends React.Component{
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
                            <div className="col-lg-12 text-center">
                                <div 
                                    id="carousel-example-generic" 
                                    className="carousel slide"
                                    ref={carousel => {
                                        if (carousel) {
                                            $('.carousel').carousel({
                                                interval: 5000 //changes the speed
                                            })
                                        }
                                    }}
                                >
                                    {/* // Indicators */}
                                    <ol className="carousel-indicators hidden-xs">
                                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                    </ol>

                                    {/* <!-- Wrapper for slides --> */}
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img className="img-responsive img-full" src="img/slide-1.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive img-full" src="img/slide-2.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive img-full" src="img/slide-3.jpg" alt="" />
                                        </div>
                                    </div>

                                    {/* <!-- Controls --> */}
                                    <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                        <span className="icon-prev"></span>
                                    </a>
                                    <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                        <span className="icon-next"></span>
                                    </a>
                                </div> {/* carousel */}
                                <h2 className="brand-before">
                                    <small>Welcome to</small>
                                </h2>
                                <h1 className="brand-name">Keep It Simple</h1>
                                <hr className="tagline-divider" />
                                <h2>
                                    <small>By
                                        <strong>Start Bootstrap</strong>
                                    </small>
                                </h2>
                            </div> {/*col-lg-12 */}
                        </div> {/*box */}
                    </div> {/*row */ }
                </div> {/* container end */}
                <Footer />
            </div>  
        )
    }
}
export default landing_page;