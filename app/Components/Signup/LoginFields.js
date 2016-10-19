import React from 'react';
class LoginFields extends React.Component{
	render(){
		return (
		   <div className ="fld-box">
    
		       <form className="form-signin" action='/login/' method="POST">
				    <fieldset className="box-it">
				        <legend>Login</legend>
						<label htmlFor="inputusername" className="sr-only">User Name</label>
						<input type="user" name = "username" id="inputUser" className="form-control" placeholder="User Name" required autofocus/>
						<label htmlFor="inputPassword" className="sr-only">Password</label>
						<input type="password" id="inputPassword" className="form-control" placeholder="Password" name = "password" required/>
						<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
				    </fieldset>
		      </form>
           </div>
		)
	}
}
export default LoginFields;