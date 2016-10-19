import React from 'react';

import Navbar from "../Children/Navbar";
import Footer from "../Children/Footer";
import SignupFields from "./SignupFields";

class SignupForm extends React.Component{
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
	        <SignupFields />
	        <Footer />
	   </div>
		)
	}
}
export default SignupForm;