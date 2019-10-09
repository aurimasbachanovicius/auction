import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import RegisterForm from '../components/Account/RegisterForm';
import EmailInput from '../components/Account/EmailInput';
import PasswordInput from '../components/Account/PasswordInput';
import { userActions } from '../actions';
import AgreeWithPoliciesCheckbox from '../components/Account/AgreeWithPoliciesCheckbox';
import WizardPage from '../components/Wizard/WizardPage';
import SimpleTextField from '../components/Account/SimpleTextField';

// @todo clean this file. Requires a little bit of refactor.
// @todo show errors on clicking next (if there are some in the first page).
// @todo probably remove RegisterForm component (cuz it doesn't handle anything and is useless).
class RegisterUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
      repeatPassword: '',
      agreeWithPolicies: false,
      submitted: false,
      currentPage: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePolicies = this.handlePolicies.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  nextPage() {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  }

  prevPage() {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage - 1 });
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

    this.nextPage();
  }

  render() {
    const {
      submitted,
      email,
      password,
      repeatPassword,
      agreeWithPolicies,
      currentPage,
      name,
      surname
    } = this.state;
    const { processing, error, success } = this.props;

    return (
      <RegisterForm onSubmit={this.handleSubmit}>
        Form state status:
        {(processing && <span>Processing</span>) ||
          (error && <span>Error</span>) ||
          (success && <span>Success</span>)}
        <WizardPage currentId={currentPage} pageId={1}>
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
          <br />
          <Button type="button" onClick={this.nextPage} variant="contained" color="primary">
            Tęsti
          </Button>
        </WizardPage>
        <WizardPage currentId={currentPage} pageId={2}>
          <SimpleTextField
            onChange={this.handleChange}
            label="Vardas"
            submitted={submitted}
            name="name"
            value={name}
          />
          <SimpleTextField
            onChange={this.handleChange}
            submitted={submitted}
            label="Pavardė"
            name="surname"
            value={surname}
          />
          <Button type="button" onClick={this.prevPage} variant="contained" color="primary">
            Atgal
          </Button>
          <Button style={{ marginLeft: 15 }} type="submit" variant="contained" color="secondary">
            Registruotis
          </Button>
        </WizardPage>
        <WizardPage currentId={currentPage} pageId={3}>
          Ačiū už registracija. Išsiuntėme el. laišką su patvirtinimu. Patvirtinę el. laišką galite
          prisijungti prie sistemos.
        </WizardPage>
      </RegisterForm>
    );
  }
}

const mapStateToProps = state => {
  const { processing, success, error, nextPage } = state.userRegistration;

  return { processing, success, error, nextPage };
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
