import React from 'react';

import Navbar from "../Children/Navbar";
import Footer from "../Children/Footer";
import SignupFields from "./SignupFields";

class SignupForm extends React.Component{
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