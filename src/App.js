import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    /* eslint-disable no-undef */
    chrome.tabs.onHighlighted.addListener((tab) => {
      console.log("tab", tab);
      setUrl(tab.url);
    });
    chrome.tabs.onActivated.addListener((activeInfo) => {
      console.log("activeInfo", activeInfo);
    });
    // chrome.tabs..addListener((activeInfo) => {
    //   console.log("activeInfo", activeInfo);
    // });
    /* eslint-disable no-undef */
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      console.log("tab", tab);
      setUrl(tab.url);
      // if (tab.url.match(/lendi/)) {
      //   alert("browing lendi");
      // }
    });
  }, []);
  return (
    <div className="App">{url ? <div>{url}</div> : <div>...loading</div>}</div>
  );
}

export default App;
