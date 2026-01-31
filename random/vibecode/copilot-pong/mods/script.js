// Simple Pong (canvas)
(() => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  const leftScoreEl = document.getElementById('leftScore');
  const rightScoreEl = document.getElementById('rightScore');
  const restartBtn = document.getElementById('restartBtn');

  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;

  // Game objects
  const paddleWidth = 12;
  const paddleHeight = 100;
  const paddleInset = 20;

  let leftPaddle = {
    x: paddleInset,
    y: (HEIGHT - paddleHeight) / 2,
    width: paddleWidth,
    height: paddleHeight,
    speed: 6,
    dy: 0
  };

  let rightPaddle = {
    x: WIDTH - paddleInset - paddleWidth,
    y: (HEIGHT - paddleHeight) / 2,
    width: paddleWidth,
    height: paddleHeight,
    speed: 5
  };

  let ball = {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    radius: 9,
    speed: 20,
    vx: 5,
    vy: 0
  };

  let scores = { left: 0, right: 0 };

  // Input
  const keys = { ArrowUp: false, ArrowDown: false };

  // Initialize
  function resetBall(server = 'left') {
    ball.x = WIDTH / 2;
    ball.y = HEIGHT / 2;
    ball.speed = 20;
    // random angle between -30 and 30 degrees
    const angle = (Math.random() * 60 - 30) * (Math.PI / 180);
    const dir = server === 'left' ? 1 : -1;
    ball.vx = dir * ball.speed * Math.cos(angle);
    ball.vy = ball.speed * Math.sin(angle);
  }

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  function drawNet() {
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    const segment = 12;
    for (let y = 0; y < HEIGHT; y += segment * 2) {
      ctx.fillRect(WIDTH / 2 - 1, y, 2, segment);
    }
  }

  function draw() {
    // clear
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // background
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // net
    drawNet();

    // paddles
    ctx.fillStyle = '#19d3da';
    roundRect(ctx, leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height, 6, true, false);
    roundRect(ctx, rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height, 6, true, false);

    // ball
    ctx.beginPath();
    ctx.fillStyle = '#00ff00';
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    // scores are in DOM, so nothing here
  }

  function roundRect(ctx, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
  }

  // Collision detection - paddles
  function checkPaddleCollision(paddle) {
    const closestX = clamp(ball.x, paddle.x, paddle.x + paddle.width);
    const closestY = clamp(ball.y, paddle.y, paddle.y + paddle.height);
    const dx = ball.x - closestX;
    const dy = ball.y - closestY;
    const distSq = dx * dx + dy * dy;
    return distSq <= ball.radius * ball.radius;
  }

  // Apply paddle bounce using angle based on impact position
  function handlePaddleBounce(paddle, isLeftPaddle) {
    // calculate relative intersect (-1 top => 1 bottom)
    const paddleCenter = paddle.y + paddle.height / 2;
    const relativeIntersect = (ball.y - paddleCenter) / (paddle.height / 2);
    const maxBounce = 75 * (Math.PI / 180); // 75 degrees
    const bounceAngle = relativeIntersect * maxBounce;

    // increase speed slightly
    ball.speed *= 1.05;
    const sign = isLeftPaddle ? 1 : -1;
    ball.vx = sign * ball.speed * Math.cos(bounceAngle);
    ball.vy = ball.speed * Math.sin(bounceAngle);

    // nudge ball out so it won't get stuck inside paddle
    if (isLeftPaddle) {
      ball.x = paddle.x + paddle.width + ball.radius + 0.1;
    } else {
      ball.x = paddle.x - ball.radius - 0.1;
    }
  }

  function update(dt) {
    // Player paddle movement via keys
    if (keys.ArrowUp) leftPaddle.y -= leftPaddle.speed;
    if (keys.ArrowDown) leftPaddle.y += leftPaddle.speed;

    // clamp paddles
    leftPaddle.y = clamp(leftPaddle.y, 0, HEIGHT - leftPaddle.height);

    // AI: simple follower with limited speed to make game winnable
    const targetY = ball.y - rightPaddle.height / 2;
    const diff = targetY - rightPaddle.y;
    const aiSpeed = rightPaddle.speed + Math.min(3, ball.speed / 2);
    rightPaddle.y += clamp(diff * 0.12, -aiSpeed, aiSpeed);
    rightPaddle.y = clamp(rightPaddle.y, 0, HEIGHT - rightPaddle.height);

    // Ball movement
    ball.x += ball.vx * (dt / (1000 / 60));
    ball.y += ball.vy * (dt / (1000 / 60));

    // Top/bottom wall collision
    if (ball.y - ball.radius <= 0) {
      ball.y = ball.radius;
      ball.vy = -ball.vy;
    } else if (ball.y + ball.radius >= HEIGHT) {
      ball.y = HEIGHT - ball.radius;
      ball.vy = -ball.vy;
    }

    // Paddle collisions
    // left paddle
    if (ball.vx < 0 && checkPaddleCollision(leftPaddle)) {
      handlePaddleBounce(leftPaddle, true);
    }
    // right paddle
    if (ball.vx > 0 && checkPaddleCollision(rightPaddle)) {
      handlePaddleBounce(rightPaddle, false);
    }

    // Scoring
    if (ball.x + ball.radius < 0) {
      // right scores
      scores.right += 1;
      updateScoreboard();
      resetBall('right'); // next serve towards left (server param flips direction)
    } else if (ball.x - ball.radius > WIDTH) {
      // left scores
      scores.left += 1;
      updateScoreboard();
      resetBall('left');
    }
  }

  function updateScoreboard() {
    leftScoreEl.textContent = String(scores.left);
    rightScoreEl.textContent = String(scores.right);
  }

  // Input handlers
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const y = e.clientY - rect.top;
    // center paddle on mouse Y
    leftPaddle.y = clamp(y - leftPaddle.height / 2, 0, HEIGHT - leftPaddle.height);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      keys[e.key] = true;
      e.preventDefault();
    }
  }, {passive:false});

  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      keys[e.key] = false;
      e.preventDefault();
    }
  }, {passive:false});

  restartBtn.addEventListener('click', () => {
    scores.left = 0;
    scores.right = 0;
    updateScoreboard();
    leftPaddle.y = (HEIGHT - leftPaddle.height) / 2;
    rightPaddle.y = (HEIGHT - rightPaddle.height) / 2;
    resetBall(Math.random() < 0.5 ? 'left' : 'right');
  });

  // Main loop
  let last = performance.now();
  function loop(now) {
    const dt = now - last;
    last = now;
    update(dt);
    draw();
    requestAnimationFrame(loop);
  }

  // start
  resetBall(Math.random() < 0.5 ? 'left' : 'right');
  updateScoreboard();
  requestAnimationFrame(loop);
})();
