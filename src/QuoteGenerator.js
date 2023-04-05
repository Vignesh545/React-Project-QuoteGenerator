import React, { useState } from 'react';
import './QuoteGenerator.css';
function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  function generateQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <h1>Quote Generator</h1>
      <br/><br/>
      <button onClick={generateQuote}>Generate Quote</button>
    
      <div className='container'>
      {quote && <p>"{quote}"</p>}
      {author && <p>- {author}</p>}
      </div>
    </div>
  );
}

export default QuoteGenerator;
