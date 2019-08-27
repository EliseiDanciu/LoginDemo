import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'

class Auth extends Component {

	state = {
		email: '',
		password: ''
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = e => {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					{
						this.props.isAuth ?
							<button onClick={this.props.onLogout}>Logout</button> :
							<>
								<input name="email" type="email" placeholder="Email" onChange={this.onChange} /> <br />
								<input name="password" type="password" placeholder="Password" onChange={this.onChange} /><br />
								<button onClick={() => (this.props.onLogin(this.state.email, this.state.password))}>Login</button>
							</>
					}
					<br />
					<p>{this.props.isAuth ? "You've logged in!" : "Not logged in."}</p>
				</form>
			</div>
		)
	}
}

const mapState = (state) => {
	return {
		isAuth: state.auth.token !== '',
		token: state.auth.token
	}
}

const mapDispatch = dispatch => ({
	onLogin: (email, password) => dispatch(actions.authRequest(email, password)),
	onLogout: () => dispatch(actions.logout())
})

export default connect(mapState, mapDispatch)(Auth);