const CORS_PROXY = "https://cors-anywhere.followalong.com/";
const CHANNEL_RSS =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCoDdAhc_ve3qtimWFFblNTw"; // DoggoWing21 channel
const CHANNEL_ID = "UCzHeWI-gvnXPf7JpbRXCW_g";
const YOUTUBE_API_KEY = "AIzaSyB7YDdZSX4CLxCU02fy5tDCW21GnCLDF5U"; // Use MineChicken API key - he gave me permission to use it
// Use the actual YouTube channel avatar - this URL format works for any channel
const channelAvatar =
  "https://yt3.ggpht.com/ERio1I1-viDXodzrvSgS_7ooGyD6UpAimGgQkUha23WTAl1oYfOqIqdcjI48yNtJ1b8t_9Fh=s176-c-k-c0x00ffffff-no-rj-mo";
let videos = [];
let subscriberCount = "283";

async function fetchSubscriberCount() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`,
    );
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const subCount = parseInt(data.items[0].statistics.subscriberCount);
      const vCount = parseInt(data.items[0].statistics.viewCount);
      if (subCount >= 1000000) {
        subscriberCount = (subCount / 1000000).toFixed(2) + "M";
      } else if (subCount >= 1000) {
        subscriberCount = (subCount / 1000).toFixed(2) + "K";
      } else {
        subscriberCount = subCount.toString();
      }
      if (subCount >= 1000000) {
        viewCount = (vCount / 1000000).toFixed(2) + "M";
      } else if (subCount >= 1000) {
        viewCount = (vCount / 1000).toFixed(2) + "K";
      } else {
        viewCount = vCount.toString();
      }
    }
  } catch (error) {
    console.error("Error fetching subscriber count:", error);
  }
}

async function fetchVideos() {
  try {
    const response = await fetch(`${CORS_PROXY}${CHANNEL_RSS}`);
    const text = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");

    const entries = xmlDoc.querySelectorAll("entry");
    videos = Array.from(entries).map((entry) => {
      const videoId =
        entry.querySelector("videoId")?.textContent ||
        entry.querySelector("id")?.textContent?.split(":").pop();
      const title = entry.querySelector("title")?.textContent;
      const published = entry.querySelector("published")?.textContent;

      // Get view count from media:statistics
      const statsElement = entry.querySelector(
        "media\\:statistics, statistics",
      );
      const views = statsElement?.getAttribute("views") || "0";

      return {
        id: videoId,
        title: title,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        published: published,
        views: formatViews(parseInt(views)),
      };
    });

    displayVideos();
    updateChannelStats();
    updateChannelAvatar();
  } catch (error) {
    console.error("Error fetching videos:", error);
    document.getElementById("videoGrid").innerHTML =
      '<div class="error">404 Not Found</div>';
  }
}

function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  }
  return views.toString();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

function displayVideos() {
  const grid = document.getElementById("videoGrid");
  grid.innerHTML = "";

  // Show only the first 15 videos
  const displayedVideos = videos.slice(0, 15);

  displayedVideos.forEach((video) => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.onclick = () => openVideo(video);

    const avatarImg = channelAvatar
      ? `<img src="${channelAvatar}" alt="DoggoWing21 Profile" style="width: 36px; height: 36px; border-radius: 50%;">`
      : "";

    card.innerHTML = `
            <div class="thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
            </div>
            <div class="video-info">
                <div class="video-avatar">${avatarImg}</div>
                <div class="video-details">
                    <h3>${video.title}</h3>
                    <div class="video-meta">
                        <div>DoggoWing21</div>
                        <div>${video.views} views • ${formatDate(video.published)}</div>
                    </div>
                </div>
            </div>
        `;

    grid.appendChild(card);
  });

  // Add message at the bottom
  const moreContent = document.createElement("div");
  moreContent.className = "more-videos-message";
  moreContent.innerHTML = `
    <p>Want more funny dog content?</p>
    <a href="https://youtube.com/@flyingdogwithapencil" target="_blank" class="channel-link">
      Visit DoggoWing21's channel on YouTube →
    </a>
  `;
  grid.appendChild(moreContent);
}

function updateChannelStats() {
  const statsElement = document.querySelector(".channel-stats");
  if (statsElement) {
    statsElement.textContent = `@flyingdogwithapencil • ${subscriberCount} subscribers • ${videos.length} videos • ${viewCount} views`;
  }
}

function updateChannelAvatar() {
  const headerAvatar = document.querySelector(".channel-avatar");
  if (headerAvatar && channelAvatar) {
    headerAvatar.innerHTML = `<img src="${channelAvatar}" alt="DoggoWing21" style="width: 80px; height: 80px; border-radius: 50%;">`;
  }
}

function openVideo(video) {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");
  const title = document.getElementById("modalVideoTitle");

  player.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.id}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  title.textContent = video.title;

  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");

  player.innerHTML = "";
  modal.classList.remove("active");
}

// Close modal when clicking outside
document.getElementById("videoModal")?.addEventListener("click", (e) => {
  if (e.target.id === "videoModal") {
    closeModal();
  }
});

// Load videos and subscriber count on page load
document.addEventListener("DOMContentLoaded", async () => {
  await fetchSubscriberCount();
  await fetchVideos();
});
