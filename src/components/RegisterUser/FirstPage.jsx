import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import EmailInput from '../Account/EmailInput';
import PasswordInput from '../Account/PasswordInput';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const { password, repeatPassword, email } = this.props;

    return password !== '' && repeatPassword !== '' && email !== '';
  }

  handleSubmit(e) {
    const { onSubmit } = this.props;

    this.setState({ submitted: true });

    return this.validate() ? onSubmit(e) : () => {};
  }

  render() {
    const { onChange, password, repeatPassword, email } = this.props;
    const { submitted } = this.state;

    return (
      <React.Fragment>
        <EmailInput onChange={onChange} submitted={submitted} value={email} />
        <PasswordInput onChange={onChange} submitted={submitted} value={password} name="password" />
        <PasswordInput
          onChange={onChange}
          submitted={submitted}
          value={repeatPassword}
          name="repeatPassword"
        />
        <Button type="button" onClick={this.handleSubmit} variant="contained" color="primary">
          Tęsti
        </Button>
      </React.Fragment>
    );
  }
}

FirstPage.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default FirstPage;
