import React from 'react';

class NavUserForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'Name',
			password: 'password'
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.login(this.state);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.logout();
	}

	render() {

		if (this.props.sessionType === '/') {
			return (
				<div className= 'user-form-container'>
					<form onSubmit= {this.handleSubmit} className= 'user-form'>
						<input
							type= 'text'
							value= {this.state.username}
							onChange= { this.handleChange('username') } />
						<input
							type= 'password'
							value= {this.state.password}
							onChange= { this.handleChange('password') } />

						<button value= 'Submit'>Submit</button>
					</form> 
				</div>
			)
		} else {
			return (
				<div className= 'user-form-container'>
					<div className= 'nav-links'>
						<i className= "fa fa-bell fa-lg" aria-hidden="true"></i>
						<i className= "fa fa-weixin fa-lg" aria-hidden="true"></i>
						<i className= "fa fa-envelope-open fa-lg" aria-hidden="true"></i>
						<i className= "fa fa-user-plus fa-lg" aria-hidden="true"></i>
						<i className= "fa fa-user-circle-o fa-lg" aria-hidden="true" onClick= {this.handleClick}></i>
					</div>
				</div>
			)
		}
	}
};

export default NavUserForm;