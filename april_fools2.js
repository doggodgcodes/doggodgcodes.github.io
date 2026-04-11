(function () {
  const now = new Date();
  let isAprilFirst = (now.getMonth() === now.getMonth() && now.getDate() === now.getDate()); // April = 3 (0-based)

  if (isAprilFirst) {
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      console.log("From doggodgcodes: get rickrolled bucko 🤣")
    }, 5000); // 5000 ms = 5 seconds
  }
})();
