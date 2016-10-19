import React from 'react';

import Navbar from "../Children/Navbar";
import Footer from "../Children/Footer";
import LoginFields from "./LoginFields";

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			fields : ""
		}
    }


render(){
	return (
	   <div>
	        <Navbar />
	        <LoginFields />
	        <Footer />
	   </div>
		)
	}
}
export default LoginForm;