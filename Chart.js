<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zinsertrag Fortschritt (Realzeit)</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .progress-container {
      background: #fff;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      width: 90%;
      max-width: 600px;
    }
    .title {
      font-size: 1.4rem;
      margin-bottom: 15px;
      color: #333;
    }
    .progress-bar-bg {
      width: 100%;
      height: 30px;
      background: #ddd;
      border-radius: 15px;
      overflow: hidden;
    }
    .progress-bar-fill {
      height: 100%;
      background: #4CAF50;
      width: 0%;
      transition: width 1s ease-in-out;
    }
    .amount {
      margin-top: 10px;
      font-weight: bold;
      color: #444;
    }
  </style>
</head>
<body>
  <div class="progress-container">
    <div class="title">Zinsertrag Fortschritt</div>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" id="bar"></div>
    </div>
    <div class="amount" id="amount">Berechne...</div>
  </div>

  <script>
    const total = 2558.25;
    const days = 180;
    const dailyEarning = total / days;

    // Set fixed start date (format YYYY-MM-DD)
    const startDate = new Date('2025-04-11');
    const today = new Date();

    // Calculate difference in days
    const timeDiff = today - startDate;
    const daysPassed = Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24)));

    const currentEarnings = Math.min(daysPassed * dailyEarning, total);
    const progress = (currentEarnings / total) * 100;

    const bar = document.getElementById("bar");
    const amountDisplay = document.getElementById("amount");

    // Animate progress bar
    setTimeout(() => {
      bar.style.width = `${progress}%`;
      amountDisplay.textContent = `${currentEarnings.toFixed(2).replace('.', ',')} € von 2.558,25 €`;
    }, 300);
  </script>
</body>
</html>
