import React from 'react';
class Navbar extends React.Component{
	constructor(props){
		super(props);
    }


render(){

		return(
<nav className="navbar navbar-default" role="navigation">
        <div className="container">
           {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
              {/*  <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed --> */}
                <a className="navbar-brand" href="index.html">Keep it Simple</a>
            </div>
           {/*} <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="landing.html">Home</a>
                    </li>
                    <li>
                        <a href="pantry.html">Your Pantry</a>
                    </li>
                    <li>
                        <a href="about.html">About Us</a>
                    </li>
                    <li>
                        <a href="recipe.html">Recipe Maker</a>
                    </li>
                    <li>
                        <a href="signin.html">Sign-in</a>
                    </li>
                </ul>
            </div>
       
        </div>
        
    </nav>
  )};
}

export default Navbar;