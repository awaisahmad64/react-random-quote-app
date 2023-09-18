import { useEffect, useState } from 'react';
import data from './quote.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './css/App.css';
const bgColor = [
  '#E7B10A',
  '#609966',
  '#FF5403',
  '#BE6DB7',
  '#00F5FF',
  '#D62AD0',
  '#28DF99',
  '#81B214',
  '#91D18B',
  '#006A71',
  '#A8DF65',
];
console.log(data.quotes[1].quote);
console.log(data.quotes.length)
function App() {
  const [color, setColor] = useState('#E7B10A');
  const random = Math.floor(Math.random() * data.quotes.length);
  const hashtags = 'quotes';
      const tweetText = `"${data.quotes[random].quote}" ${data.quotes[random].author}`;
      const relatedAccounts = 'freecodecamp';
      const tweetUrl = `https://twitter.com/intent/tweet?hashtags=${hashtags}&related=${relatedAccounts}&text=${encodeURIComponent(
        tweetText
      )}`;
    
  const handleRandomColor = () => {
    const randomColor = Math.floor(Math.random() * bgColor.length);
    
    setColor(bgColor[randomColor]);
  };
  useEffect(() => {
  
      
     
    }
  ,[]);
  return (
    <>
      <div id="wrapper" style={{ backgroundColor: color }}>
        <div id="quote-box">
          <div id="text" style={{ color: color }}>
            <FontAwesomeIcon id="fa-ml" icon={faQuoteLeft} />
            { data.quotes[random].quote}
          </div>
          <p id="author" style={{ color: color }}>
            - {data.quotes[random].author}
          </p>
          <div id="new_quote_btn_row">
            <a
              title="Tweet this quote!"
              id="tweet-quote"
              href={tweetUrl}
              target="_blank"
              style={{ backgroundColor: color }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <span
              id="new-quote"
              style={{ backgroundColor: color }}
              onClick={handleRandomColor}
              
            >
              New Quote
            </span>
          </div>
        </div>
        <p id="developed_by">
          Developed by <a href="https://github.com/awaisahmad64">Awais Ahmad</a>
        </p>
      </div>
    </>
  );
}

export default App;
