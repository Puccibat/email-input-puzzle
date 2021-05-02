import React from 'react';

const EmailDisplayed = ({ filteredEmails, addToInput }) => {
  return (
    <div>
      {filteredEmails.map((email) => (
        <span key={email} value={email} onClick={addToInput}>
          @{email}{' '}
        </span>
      ))}
    </div>
  );
};

export default EmailDisplayed;
