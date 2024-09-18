
document.getElementById("titlebtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const title = tabs[0].title;  
      document.getElementById("title").innerText = title;  
    });
  });
  