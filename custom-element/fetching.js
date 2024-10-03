fetch('response-from-server.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(` Network response was not ok: ${response.statusText} `);
    }
    return response.text();
  })
  .then(text => {

    function updateSpan() {
      document.getElementById('incoming').setHTMLUnsafe(text)
    }
    setTimeout(updateSpan, 2000)

  })
  .catch(error => {
    console.error(' Fetch error: ', error);
  });
