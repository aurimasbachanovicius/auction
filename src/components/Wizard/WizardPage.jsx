import React from 'react';
import PropTypes from 'prop-types';

const WizardPage = ({ currentId, pageId, children }) =>
  currentId === pageId && <div>{children}</div>;

WizardPage.propTypes = {
  currentId: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default WizardPage;
