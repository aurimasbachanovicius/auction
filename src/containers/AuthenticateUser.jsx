import React from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { userActions } from '../actions/user.actions';
import Login from '../components/Account/Login';

class AuthenticateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    const { dispatch } = this.props;

    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { email, password } = this.state;

    return (
      <React.Fragment>
        User ID:
        <Login
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          email={email}
          password={password}
          loggingIn={loggingIn}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.userAuthentication;

  return {
    loggingIn
  };
}

AuthenticateUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(AuthenticateUser);
