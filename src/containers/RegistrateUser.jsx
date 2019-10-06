import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../components/Account/RegisterForm';
import EmailInput from '../components/Account/EmailInput';
import PasswordInput from '../components/Account/PasswordInput';

class RegistrateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: '',
        password: '',
        repeatPassword: '',
        agreeWithPolicies: false
      },
      submitted: false
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ form: { [name]: value } });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });

    // @todo dispatch action
  }

  render() {
    const { submitted, form } = this.state;
    return (
      <RegisterForm onSubmit={this.handleSubmit}>
        <EmailInput onChange={this.handleChange} submitted={submitted} value={form.email} />
        <PasswordInput
          onChange={this.handleChange}
          submitted={submitted}
          value={form.password}
          name="password"
        />
        <PasswordInput
          onChange={this.handleChange}
          submitted={submitted}
          value={form.repeatPassword}
          name="repeatPassword"
        />
      </RegisterForm>
    );
  }
}

export default connect()(RegistrateUser);
