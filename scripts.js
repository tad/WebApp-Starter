// VANILLA ES6 JAVASCRIPT OR GTFO
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('message').textContent = 'Hello World!';
});

// Example GET call - Don't forget CORS!
function getMessage() {
  let xhr = new XMLHttpRequest(),
      method = "GET",
      url = "https://uuv0etmjga.execute-api.us-east-1.amazonaws.com/dev/test";

  xhr.open(method, url, true);
  xhr.onreadystatechange = () => {
          if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            setMessage(xhr.responseText);
          };
      };
  xhr.send();
}
