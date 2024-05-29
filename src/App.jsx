import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

useEffect(() => {
  if(message !== '') {
    setLoading(false);
  }
}, [message]);

  const handleGetRequest = () => {
    axios.get('http://192.168.0.116:3010/v1/tasks/6634022bb65162345132f0c7')
      .then(response => {
        setMessage(response.data);
        console.log('GET Response:', response.data);
      })
      .catch(error => {
        setError(error.response.data);
      });
  };

  const handlePostRequest = () => {
    axios.post('http://localhost:3010/v1', {
      message: 'hello server'
    })
      .then(response => {
        setMessage(response.data);
        console.log('POST Response:', response.data);
      })
      .catch(error => {
        console.error('POST Error:', error);
      });
  };

  if(loading) {
    return (
      <h2>Loading...</h2>
    )
  }

  return (
    <div>
      <button onClick={handleGetRequest}>GET</button>
      <button onClick={handlePostRequest}>POST</button>
      {!loading && <h1>{message}</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default App;


