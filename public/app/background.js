(function () {
  const tabStorage = {};
  const networkFilters = {
    urls: [
      "*://Alliedcourierlogisticsmovers.com/*",
      "*://Adorablecavapoopuppy.com/*",
      "*://Adorablepuppiespot.com/*",
      "*://Alexbeagles.com /*",
      "*://Amazingcavoodlehome.com/*",
      "*://Americanstaffyhome.com/*",
      "*://Adorablecavapoopuppy.com/*",
      "*://Adorablecavapoopuppy.com/*",
      "*://Adorablecavapoopuppy.com/*",
      "*://Adorablecavapoopuppy.com/*",
      "*://Adorablecavapoopuppy.com/*",
      "*://Adorablecavapoopuppy.com/*",
      "*://Adorablecavapoopuppy.com/*",
      "*://Adorablecavapoopuppy.com/*",
    ],
  };

  chrome.webRequest.onBeforeRequest.addListener((details) => {
    const { tabId, requestId } = details;
    chrome.browserAction.setIcon({
      path: "../img/alert.png",
      tabId: tabId,
    });
    console.log("details", details.url);
    chrome.browserAction.setPopup({ tabId: tabId, popup: "../popup.html" });
    // alert("this is a scam website");
    // break;
    // if (!tabStorage.hasOwnProperty(tabId)) {
    //   return;
    // }

    // tabStorage[tabId].requests[requestId] = {
    //   requestId: requestId,
    //   url: details.url,
    //   startTime: details.timeStamp,
    //   status: "pending",
    // };
    // console.log(tabStorage[tabId].requests[requestId]);
  }, networkFilters);

  //   chrome.webRequest.onCompleted.addListener((details) => {
  //     console.log("onCompleted", details);
  //     const { tabId, requestId } = details;
  //     if (
  //       !tabStorage.hasOwnProperty(tabId) ||
  //       !tabStorage[tabId].requests.hasOwnProperty(requestId)
  //     ) {
  //       return;
  //     }

  //     const request = tabStorage[tabId].requests[requestId];

  //     Object.assign(request, {
  //       endTime: details.timeStamp,
  //       requestDuration: details.timeStamp - request.startTime,
  //       status: "complete",
  //     });
  //     console.log(tabStorage[tabId].requests[details.requestId]);
  //   }, networkFilters);

  //   chrome.webRequest.onErrorOccurred.addListener((details) => {
  //     const { tabId, requestId } = details;
  //     if (
  //       !tabStorage.hasOwnProperty(tabId) ||
  //       !tabStorage[tabId].requests.hasOwnProperty(requestId)
  //     ) {
  //       return;
  //     }

  //     const request = tabStorage[tabId].requests[requestId];
  //     Object.assign(request, {
  //       endTime: details.timeStamp,
  //       status: "error",
  //     });
  //     console.log(tabStorage[tabId].requests[requestId]);
  //   }, networkFilters);

  //   chrome.tabs.onActivated.addListener((tab) => {
  //     console.log("onActivated", tab);
  //     const tabId = tab ? tab.tabId : chrome.tabs.TAB_ID_NONE;
  //     if (!tabStorage.hasOwnProperty(tabId)) {
  //       tabStorage[tabId] = {
  //         id: tabId,
  //         requests: {},
  //         registerTime: new Date().getTime(),
  //       };
  //     }
  //   });
  //   chrome.tabs.onRemoved.addListener((tab) => {
  //     const tabId = tab.tabId;
  //     if (!tabStorage.hasOwnProperty(tabId)) {
  //       return;
  //     }
  //     tabStorage[tabId] = null;
  //   });
})();
