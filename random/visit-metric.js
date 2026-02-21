function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

console.log("Credits to Bro Code on YouTube for making the cookie functions!");

let visits = 0;

// Check if the 'timesVisited' cookie exists
let cookieVisits = getCookie("timesVisited");

if (cookieVisits != null) {
    console.log("cookie exists");
    visits = parseInt(cookieVisits) + 1;  // Convert the cookie value to an integer and add 1
    setCookie("timesVisited", visits, 365);  // Update the cookie with the new visit count
} else {
    console.log("cookie does not exist");
    setCookie("timesVisited", 1, 365);  // Set the cookie with an initial visit count of 1
    visits = 1;
}

// Display the number of visits
document.getElementById("visitCount").innerText = `You have visited this site ${visits} times.`;
