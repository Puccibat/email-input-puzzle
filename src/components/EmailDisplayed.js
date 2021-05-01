import React from 'react';

const EmailDisplayed = ({ filteredEmails }) => {
  return <div>{filteredEmails.map((email) => email)}</div>;
};

export default EmailDisplayed;
