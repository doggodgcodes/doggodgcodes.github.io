let isBanned = localStorage.getItem("banned")
    if (isBanned == "1" || isBanned == 1) {
      window.location.href = "/rickroll/"
      document.title = "You are banned!"
      document.body.innerHTML = "<h1>Loading...</h1>"
    } else {
      console.log(isBanned)
    }
