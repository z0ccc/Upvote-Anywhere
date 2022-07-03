import logo from './assets/logo.png';
import chrome from './assets/chrome.png';
import firefox from './assets/firefox.png';
import github from './assets/github.png';
import upvoteAnywhere from './assets/upvoteAnywhere.mp4';

import './App.css';
const { detect } = require('detect-browser');
const browser = detect();

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <div className="header">
            <img src={logo} alt="Upvote Anywhere Logo" className="logo" />
            <div className="title">Upvote Anywhere</div>
          </div>
          <div className="subTitle">
            View Reddit comments of any YouTube video or webpage
          </div>
          <div className="buttons">
            <a
              href={
                browser.name === 'firefox'
                  ? 'https://addons.mozilla.org/en-US/firefox/addon/upvote-anywhere'
                  : 'https://chrome.google.com/webstore/detail/upvote-anywhere/amlfbbehleledmbphnielafhieceggal'
              }
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={browser.name === 'firefox' ? firefox : chrome}
                alt="chrome download"
                className="buttonImg"
              />
              Download Extension
            </a>
            <a
              href="https://github.com/z0ccc/Upvote-Anywhere"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="buttonImg" />
              Source Code
            </a>
          </div>
          <video controls playsInline autoPlay muted loop>
            <source src={upvoteAnywhere} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;
