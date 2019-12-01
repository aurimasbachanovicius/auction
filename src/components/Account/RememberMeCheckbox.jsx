import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';

const RememberMeCheckbox = () => (
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    style={{ marginTop: 10, marginBottom: 10 }}
    label="Prisiminti mane "
  />
);

export default RememberMeCheckbox;
