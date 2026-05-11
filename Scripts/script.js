// Audio Player code

function createPlayer(container) {
  const src = container.dataset.src;
  const description = container.dataset.description || "";
  const caption = container.dataset.caption || "";

  container.innerHTML = `
    <div class="${description ? "audio-player-with-desc" : ""}">
      <div class="audio-player">
        <button class="play-btn" aria-label="Play">
          <span class="play-icon">&#9654;</span>
          <span class="pause-icon" style="display:none">&#10074;&#10074;</span>
        </button>
        <div class="player-right">
          <div class="waveform-wrap">
            <canvas></canvas>
          </div>
          <div class="time-row">
            <span class="time-label elapsed">0:00</span>
            <span class="time-label duration">0:00</span>
          </div>
        </div>
      </div>
      ${description ? `<p class="audio-description">${description}</p>` : ""}
    </div>
    ${caption ? `<p class="figure-caption">${caption}</p>` : ""}
  `;

  const playBtn = container.querySelector(".play-btn");
  const playIcon = container.querySelector(".play-icon");
  const pauseIcon = container.querySelector(".pause-icon");
  const canvas = container.querySelector("canvas");
  const wrap = container.querySelector(".waveform-wrap");
  const elapsedEl = container.querySelector(".elapsed");
  const durationEl = container.querySelector(".duration");
  const ctx = canvas.getContext("2d");

  const PLAYED_COLOR = "#888888";
  const UNPLAYED_COLOR = "#cccccc";
  const BAR_W = 3;
  const BAR_GAP = 2;

  let bars = [];
  let progress = 0;
  let audioBuffer = null;
  const audio = new Audio(src);
  const audioCtx = new AudioContext();

  function formatTime(s) {
    s = Math.floor(s || 0);
    return Math.floor(s / 60) + ":" + (s % 60 < 10 ? "0" : "") + (s % 60);
  }

  function resize() {
    const rect = wrap.getBoundingClientRect();
    canvas.width = rect.width || 600;
    canvas.height = rect.height || 80;
    bars = [];
    if (audioBuffer) buildBarsFromBuffer(audioBuffer);
    drawWave();
  }

  function buildBarsFromBuffer(buffer) {
    audioBuffer = buffer;
    const n = Math.floor(canvas.width / (BAR_W + BAR_GAP));
    const data = buffer.getChannelData(0);
    const blockSize = Math.floor(data.length / n);
    bars = [];
    for (let i = 0; i < n; i++) {
      let sum = 0;
      const start = i * blockSize;
      for (let j = 0; j < blockSize; j++) sum += Math.abs(data[start + j] || 0);
      bars.push(sum / blockSize);
    }
    const max = Math.max(...bars) || 1;
    bars = bars.map((v) => v / max);
    drawWave();
  }

  function drawWave() {
    const W = canvas.width,
      H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    if (!bars.length) {
      const n = Math.floor(W / (BAR_W + BAR_GAP));
      for (let i = 0; i < n; i++)
        bars.push(0.1 + Math.random() * 0.6 + Math.sin(i * 0.3) * 0.2);
    }
    const cutoff = progress * W;
    for (let i = 0; i < bars.length; i++) {
      const x = i * (BAR_W + BAR_GAP);
      const h = Math.max(4, bars[i] * H);
      const y = (H - h) / 2;
      ctx.fillStyle = x < cutoff ? PLAYED_COLOR : UNPLAYED_COLOR;
      ctx.fillRect(x, y, BAR_W, h);
    }
  }

  audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    progress = audio.currentTime / (audio.duration || 1);
    elapsedEl.textContent = formatTime(audio.currentTime);
    drawWave();
  });

  audio.addEventListener("ended", () => {
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
    progress = 0;
    elapsedEl.textContent = "0:00";
    drawWave();
  });

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline";
    } else {
      audio.pause();
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
    }
  });

  wrap.addEventListener("click", (e) => {
    if (!audio.duration) return;
    const rect = wrap.getBoundingClientRect();
    progress = (e.clientX - rect.left) / rect.width;
    audio.currentTime = progress * audio.duration;
    drawWave();
  });

  fetch(src)
    .then((r) => r.arrayBuffer())
    .then((ab) => audioCtx.decodeAudioData(ab))
    .then((buf) => buildBarsFromBuffer(buf))
    .catch(() => {
      bars = [];
      drawWave();
    });

  window.addEventListener("resize", resize);
  setTimeout(resize, 100);
}

document.querySelectorAll(".audio-player-container").forEach(createPlayer);

// Blog Code

fetch("../Blog/blog.html")
  .then((response) => response.text())
  .then((data) => {
    // Parse blog.html
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    // Get all blog posts
    const posts = Array.from(doc.querySelectorAll(".blog-post-block"));

    if (posts.length > 0) {
      // Sort by data-date
      posts.sort(
        (a, b) =>
          new Date(b.getAttribute("data-date")) -
          new Date(a.getAttribute("data-date")),
      );

      // Grab the latest post
      const latestPost = posts[0];
      const latestTitle = latestPost.querySelector(".post-title").textContent;
      const latestDate = latestPost.querySelector(".date").textContent;

      // Update homepage elements
      const link = document.getElementById("latest-title-link");
      link.textContent = latestTitle;

      const dateElement = document.getElementById("latest-date");
      dateElement.textContent = latestDate;
    }
  })
  .catch((error) => console.error("Error fetching blog posts:", error));
