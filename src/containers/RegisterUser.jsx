import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import RegisterForm from '../components/Account/RegisterForm';
import EmailInput from '../components/Account/EmailInput';
import PasswordInput from '../components/Account/PasswordInput';
import { userActions } from '../actions';
import AgreeWithPoliciesCheckbox from '../components/Account/AgreeWithPoliciesCheckbox';

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
      agreeWithPolicies: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePolicies = this.handlePolicies.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handlePolicies() {
    const { agreeWithPolicies } = this.state;

    this.setState({
      agreeWithPolicies: !agreeWithPolicies
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(userActions.register(email, password));
  }

  render() {
    const { submitted, email, password, repeatPassword, agreeWithPolicies } = this.state;
    const { processing, error, success } = this.props;

    return (
      <RegisterForm onSubmit={this.handleSubmit}>
        Form state status:
        {(processing && <span>Processing</span>) ||
          (error && <span>Error</span>) ||
          (success && <span>Success</span>)}
        <EmailInput onChange={this.handleChange} submitted={submitted} value={email} />
        <PasswordInput
          onChange={this.handleChange}
          submitted={submitted}
          value={password}
          name="password"
        />
        <PasswordInput
          onChange={this.handleChange}
          submitted={submitted}
          value={repeatPassword}
          name="repeatPassword"
        />
        <AgreeWithPoliciesCheckbox onChange={this.handlePolicies} checked={agreeWithPolicies} />
      </RegisterForm>
    );
  }
}

const mapStateToProps = state => {
  const { processing, success, error } = state.userRegistration;

  return { processing, success, error };
};

RegisterUser.defaultProps = {
  processing: false,
  error: null,
  success: false
};

RegisterUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  processing: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.bool
};

export default connect(mapStateToProps)(RegisterUser);
