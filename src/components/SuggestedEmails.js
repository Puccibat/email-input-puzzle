import React from 'react';
import emailList from '../provider.json';

const SuggestedEmails = () => {
  return (
    <div>
      {emailList.map((email) => (
        <p>{email}</p>
      ))}
    </div>
  );
};

export default SuggestedEmails;
