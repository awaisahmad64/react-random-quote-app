import React, { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchNewQuote=()=>{
    setLoading(true);
    setError(null);
    // Generate random number between 0 to 99
    const random = Math.floor(Math.random() * 100);
    fetch(url)
      .then((res) => {
        if (!res) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then((responseData) => {
        if (responseData.quotes && responseData.quotes[random]) {
          setDate(responseData.quotes[random]);
        } else {
          setError('Data not found');
        }
      })
      .catch((err) => {
        setError(err.message || 'An error occured');
      })
      .finally(() => {
        setLoading(false);
      });}
      useEffect(() => {
        fetchNewQuote();
    }, [url]);
 
  return { data, loading, error,fetchNewQuote};
}

export default useFetch;
