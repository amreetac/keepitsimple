import React from 'react';
class SignupFields extends React.Component{
	constructor(props){
		super(props);
    }


render(){
	return (
	   <div className="container">
    
	       <div className = "fld-box">
		       <form id = "form-sign" className="form-signin" action = "/signup/" method="post">
		            
			       <fieldset className="box-it">
				        <legend> Signup/Login</legend>
				        <label for="inputusername" className="sr-only">User Name</label>
				        <input type="user" name = "username" id="inputUser" className="form-control" placeholder="User Name" required autofocus />
				        <label for="inputPassword" className="sr-only">Password</label>
				        <input type="password" id="inputPassword" name = "password" className="form-control" placeholder="Password" required />
				        <button id = "updPass" className="btn btn-lg btn-primary btn-block" type="submit" >Sign up</button>
				        <a href="login.html" id="haver">Already signed up!</a>
			       </fieldset>
		       
		      </form>

		      </div>
	     </div>
		)
	}
}
export default SignupFields;