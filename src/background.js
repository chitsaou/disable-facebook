var listener = function(details) {
  return {
    cancel: true
  };
};

var urls = [
  "https://www.facebook.com/plugins/*"
];

chrome.webRequest.onBeforeRequest.addListener(listener, { urls: urls }, [ "blocking" ]);
