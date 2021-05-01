import React, { useState, useEffect } from 'react';
import InputEmail from './components/InputEmail';
import EmailDisplayed from './components/EmailDisplayed';
import emailList from './provider.json';

function App() {
  const [query, setQuery] = useState('');
  const [filteredEmails, setFilteredEmails] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setFilteredEmails(
      emailList.filter((email) => email.includes(query)).slice(0, 3)
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
