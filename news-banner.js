// credits to google gemini for coding almost all of this one script

function checkNewsUpdate(targetMonthDay, newMessage) {
    const today = new Date();
    const currentYear = today.getFullYear(); // This fetches 2026 (or whatever year it is!)
    const elementId = "news-banner";
    
    // We combine the current year with your Month-Day to make a real date
    // Your input should be "MM-DD" (Example: "12-25")
    const switchDate = new Date(`${currentYear}-${targetMonthDay}T00:00:00`);

    // If today is equal to the switch date, update the banner!
    if (today == switchDate) {
        const banner = document.getElementById(elementId);
        if (banner) {
            banner.textContent = newMessage; 
            console.log("News updated for " + targetMonthDay);
        }
    }
    else {
        if (banner) {
            banner.textContent = "No news today"; 
            console.log("Nothing new");
        }
    }
}

// HOW TO USE THE MAGIC:
// Just put the Month and the Day. The script handles the year!
// checkNewsUpdate("MM-DD", "Your Epic Message");
checkNewsUpdate("01-01", "NEW YEAR");
// Example: Updates for the banner test!
checkNewsUpdate("01-30", "🚀 News banner testing! 🚀");

checkNewsUpdate("02-14", "happy valentine's day");

checkNewsUpdate("03-14", "3.14159265 this is PI π");

checkNewsUpdate("03-17", "the leprechauns are hiding");

checkNewsUpdate("04-01", "APRIL FOOLS MAN AHHAHAHAHAHHAHAHAHAHHAHAHAHHAHAHAHHAHAHAHAHA IM LAUGHING AT YOU BECAUSE THIS PRANK IS SO FUNNY I CANNOT STOP LAUGHING HAHAHAHHAHAHAHAHHAHAHAHHAHAHAHAHAHAHHAHAHHAHAHAH GET RICKROLLED");

checkNewsUpdate("04-19", "Today is when we hit 1000 commits!");


checkNewsUpdate("08-06", "another year of this site");
// Example: Updates the banner on Christmas Day!

// Example: Updates the banner for Halloween!
checkNewsUpdate("10-31", "🎃 Halloween time! 🎃");

checkNewsUpdate("12-25", "🌲 Christmas time! 🌲");

checkNewsUpdate("12-31", "NEW YEAR");
