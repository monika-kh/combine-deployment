import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8001/api/hello/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default Test;
