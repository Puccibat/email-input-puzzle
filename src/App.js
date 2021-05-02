import React, { useState, useEffect } from 'react';
import InputEmail from './components/InputEmail';
import EmailDisplayed from './components/EmailDisplayed';
import emailList from './provider.json';

function App() {
  const [query, setQuery] = useState('');
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [emailProvider, setEmailProvider] = useState('');
  const [inputValue, setInputValue] = useState('');

  const inputFocus = document.querySelector('input');

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
    console.log(inputValue);
    setEmailProvider(inputValue);
    if (inputValue.includes('@')) {
      const queryFiltered = inputValue.split('@')[1];
      setQuery(queryFiltered);
    }
  };

  const addToInput = (e) => {
    const beforeAt = emailProvider.split('@')[0];
    const inputComplete = beforeAt + e.target.innerText;
    setInputValue(inputComplete);
    inputFocus.focus();
  };

  useEffect(() => {
    setFilteredEmails(
      emailList.filter((email) => email.startsWith(query)).slice(0, 3)
    );
  }, [query]);

  return (
    <div className='App'>
      <InputEmail handleChange={handleChange} inputValue={inputValue} />
      <EmailDisplayed filteredEmails={filteredEmails} addToInput={addToInput} />
    </div>
  );
}

export default App;
