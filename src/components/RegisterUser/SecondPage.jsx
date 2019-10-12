import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SimpleTextField from '../Account/SimpleTextField';

class SecondPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const { name, surname } = this.props;

    return name !== '' && surname !== '';
  }

  handleSubmit(e) {
    const { onSubmit } = this.props;

    this.setState({ submitted: true });

    return this.validate() ? onSubmit(e) : () => {};
  }

  render() {
    const { onChange, name, surname, previousPage } = this.props;
    const { submitted } = this.state;

    return (
      <div>
        <SimpleTextField
          onChange={onChange}
          label="Vardas"
          submitted={submitted}
          name="name"
          value={name}
        />
        <SimpleTextField
          onChange={onChange}
          submitted={submitted}
          label="Pavardė"
          name="surname"
          value={surname}
        />
        <Button type="button" onClick={previousPage} variant="contained" color="primary">
          Atgal
        </Button>
        <Button
          style={{ marginLeft: 15 }}
          onClick={this.handleSubmit}
          variant="contained"
          color="secondary"
        >
          Registruotis
        </Button>
      </div>
    );
  }
}

SecondPage.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
};

export default SecondPage;
