// Credits to ChatGPT for writing the redirect code
fetch('https://doggodgcodes.github.io/random/')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    // Extract all anchor tags and get their href attributes
    const links = Array.from(doc.querySelectorAll('a'))
      .map(a => a.href)
      .filter(href => href); // Only take links that are non-empty

    if (links.length > 0) {
      // Choose a random link
      let randomLink = links[Math.floor(Math.random() * links.length)];

      // Check if the link starts with "https://" or "http://"
      if (!/^https?:\/\//i.test(randomLink)) {
        randomLink = 'https://doggodgcodes.github.io/random/' + randomLink;
      }

      // Redirect to the random link (now guaranteed to have "https://")
      window.location.href = randomLink;
    } else {
      console.error("No links found on the page.");
    }
  })
  .catch(error => {
    console.error('Error fetching the page:', error);
  });
