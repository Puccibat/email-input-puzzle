import React, { useState, useEffect } from 'react';
import InputEmail from './components/InputEmail';
import EmailDisplayed from './components/EmailDisplayed';
import emailList from './provider.json';

function App() {
  const [query, setQuery] = useState('');
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [emailProvider, setEmailProvider] = useState('');

  const handleChange = (e) => {
    const emailValue = e.target.value;
    setEmailProvider(emailValue);
    if (emailValue.includes('@')) {
      const queryFiltered = emailValue.split('@')[1];
      setQuery(queryFiltered);
    }
  };

  useEffect(() => {
    setFilteredEmails(
      emailList.filter((email) => email.startsWith(query)).slice(0, 3)
    );
  }, [query]);

  return (
    <div className='App'>
      <InputEmail handleChange={handleChange} />
      <EmailDisplayed filteredEmails={filteredEmails} />
    </div>
  );
}

export default App;
