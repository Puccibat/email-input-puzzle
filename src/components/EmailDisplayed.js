import React from 'react';

const EmailDisplayed = ({ filteredEmails }) => {
  return (
    <div>
      {filteredEmails.map((email) => (
        <span key={email}>@{email} </span>
      ))}
    </div>
  );
};

export default EmailDisplayed;
