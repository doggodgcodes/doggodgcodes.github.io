// Credits to ChatGPT for writing the redirect code
// Fetch the list of URLs from the given site
fetch('https://doggodgcodes.github.io/random/')
  .then(response => response.text())
  .then(data => {
    // Use a regular expression to extract URLs from the page content
    const urlPattern = /https?:\/\/[^\s"]+/g;
    const urls = data.match(urlPattern);

    if (urls && urls.length > 0) {
      // Redirect to each URL one by one
      let currentIndex = 0;

      function redirectToNextURL() {
        if (currentIndex < urls.length) {
          window.location.href = urls[currentIndex];
          currentIndex++;
        }
      }

      // Start the redirection process
      redirectToNextURL();

      // Set a timeout to wait for the page to load before redirecting to the next URL
      setInterval(redirectToNextURL, 5000); // 5 seconds delay between redirects
    }
  })
  .catch(error => {
    console.error('Error fetching the list of URLs:', error);
  });
