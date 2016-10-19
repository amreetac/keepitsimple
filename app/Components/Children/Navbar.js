import React from 'react';
import { Link } from 'react-router';
class Navbar extends React.Component{
render(){

		return(
        <nav className="navbar navbar-default" role="navigation">
        <div className="container">
           {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
              {/*  <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed --> */}
                <a className="navbar-brand" href="index.html">Keep it Simple</a>
            </div>
           {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/landing">Home</Link>
                    </li>
                    <li>
                        <Link to="/pantry">Your Pantry</Link>
                    </li>
                    <li>
                         <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/findrecipe">Recipe Maker</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign-up</Link>
                    </li>
                    
                </ul>
            </div>
       
        </div>
        
    </nav>
  )};
}

export default Navbar;