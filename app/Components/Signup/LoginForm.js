import React from 'react';

import Navbar from "../Children/Navbar";
import Footer from "../Children/Footer";
import LoginFields from "./LoginFields";

class LoginForm extends React.Component{
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