import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    /* eslint-disable no-undef */
    // chrome.tabs.onHighlighted.addListener((tab) => {
    //   console.log("tab", tab);
    //   setUrl(tab.url);
    // });
    // chrome.tabs.onActivated.addListener((activeInfo) => {
    //   console.log("activeInfo", activeInfo);
    // });
    // // chrome.tabs..addListener((activeInfo) => {
    // //   console.log("activeInfo", activeInfo);
    // // });
    // /* eslint-disable no-undef */
    // chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    //   console.log("tab", tab);
    //   setUrl(tab.url);
    //   // if (tab.url.match(/lendi/)) {
    //   //   alert("browing lendi");
    //   // }
    // });
  }, []);
  return (
    <div className="App">
      <div className="desc">
        This extension will change its icon when you are browsing a scammers
        website. So please beware. We'll try to make continous improvements in
        the future to make it more obvious.
      </div>
      <div className="linkContainer">
        <a
          className="link"
          href="https://www.puppyscamawarenessaustralia.com.au"
          onClick={() => {
            chrome.tabs.create({
              url: "https://www.puppyscamawarenessaustralia.com.au",
            });
          }}
        >
          Scammers list
        </a>
      </div>
      <div className="linkContainer">
        <a
          className="link"
          href="https://www.puppyscamawarenessaustralia.com.au/scamreportform"
          onClick={() => {
            chrome.tabs.create({
              url: "https://www.puppyscamawarenessaustralia.com.au/scamreportform",
            });
          }}
        >
          Report a new site
        </a>
      </div>
      <div className="linkContainer">
        <a
          className="link"
          href="https://www.linkedin.com/in/bharadwajsampath/"
          onClick={() => {
            chrome.tabs.create({
              url: "https://www.linkedin.com/in/bharadwajsampath/",
            });
          }}
        >
          Contact the developer
        </a>
      </div>
    </div>
  );
}

export default App;
