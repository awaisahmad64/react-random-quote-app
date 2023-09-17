import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './css/App.css';
import usefetch from './customhooks/usefetch';
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
function App() {
  const [color, setColor] = useState('#E7B10A');
  const [tweetUrl, setTweetUrl] = useState(null);
  const { data, loading, fetchNewQuote } = usefetch(
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  );
  const handleRandomColor = () => {
    const randomColor = Math.floor(Math.random() * bgColor.length);
    setColor(bgColor[randomColor]);
    fetchNewQuote();
  };
  useEffect(() => {
    if (!loading) {
      const hashtags = 'quotes';
      const tweetText = `"${data.quote}" ${data.author}`;
      const relatedAccounts = 'freecodecamp';
      const url = `https://twitter.com/intent/tweet?hashtags=${hashtags}&related=${relatedAccounts}&text=${encodeURIComponent(
        tweetText
      )}`;
      setTweetUrl(url);
    }
  }, [data]);
  return (
    <>
      <div id="wrapper" style={{ backgroundColor: color }}>
        <div id="quote-box">
          <div id="text" style={{ color: color }}>
            <FontAwesomeIcon id="fa-ml" icon={faQuoteLeft} />
            {loading ? 'Loading...' : data.quote}
          </div>
          <p id="author" style={{ color: color }}>
            - {loading ? 'Loading...' : data.author}
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
              disabled={loading}
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
