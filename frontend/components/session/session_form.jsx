import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: ''
		};


		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.navAction( user );
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	demoButton() {
		if (this.props.navType === '/login') {
			return (
				<button onClick= { this.handleDemo } className= 'demo-button'>Demo
				</button>
			)
		}
	}

	handleDemo(e) {
		e.preventDefault();
		const user = { username: 'Guest', password: 'Password' }
		this.props.navAction( user );
	}

	renderErrors() {
		return (
			<ul>
				{ this.props.errors.map( (error, idx) => (
					<li key= {`error-${idx}`}>{ error }</li>
				))}
			</ul>
		);
	}

  usernameInput() {
    if (this.props.navType != '/login') {
      return (
        <label>Username:
          <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange('username')} />
        </label>
      );
    }
  }

  navSession() {
    if (this.props.navType != '/login') {
      return (
    		<div className= 'session-head'><Link to="/login" className='nav-link'>Log In</Link> | <p>Join</p></div>
    	)
    } else {
    	return (
      	<div className= 'session-head'><p>Log In</p> | <Link to="/" className='nav-link'>Join</Link></div>
    	)
   	}
  }

	render() {
		return (
			<div className= 'landing-page'>
				<div className= 'session-form-container'>

	        <form onSubmit={this.handleSubmit} className= 'session-form'>
	          { this.renderErrors() }

	          <div>
		          { this.navSession() }
		        </div>

	          <div className= 'session-form'>
	          	<div>
	          		{ this.usernameInput() }
	          	</div>
	            
	            <label>Email:
	              <input type="text"
	                value={ this.state.email }
	                onChange={ this.handleChange('email') }/>
	            </label>
	            
	            <label>Password:
	              <input type="password"
	                value={ this.state.password }
	                onChange={ this.handleChange('password') } />
	            </label>
	            
	            <input type="submit" value="Submit" className= 'submit-button'/>
	          </div>
	        </form>

	        { this.demoButton() }
				</div>
			</div>
		)
	}
};

export default SessionForm;