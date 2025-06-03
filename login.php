<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Dynamic PHP Login</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
  <style>
    /* Reset and base */
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0; 
      background: linear-gradient(135deg, #667eea, #764ba2);
      font-family: 'Poppins', sans-serif;
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    .login-container {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      padding: 40px 50px;
      border-radius: 12px;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
      width: 350px;
      text-align: center;
    }
    .login-container h2 {
      margin-bottom: 25px;
      font-weight: 600;
      font-size: 28px;
      letter-spacing: 1px;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    input[type="text"],
    input[type="password"] {
      padding: 12px 15px;
      margin: 10px 0 20px 0;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      background: rgba(255,255,255,0.2);
      color: #fff;
      outline: none;
      transition: background-color 0.3s ease;
    }
    input[type="text"]:focus,
    input[type="password"]:focus {
      background: rgba(255,255,255,0.35);
    }
    button {
      background: #5a4fcf;
      border: none;
      padding: 12px;
      border-radius: 8px;
      color: #fff;
      font-weight: 600;
      font-size: 18px;
      cursor: pointer;
      transition: background 0.3s ease;
      box-shadow: 0 5px 15px rgba(90, 79, 207, 0.4);
    }
    button:hover {
      background: #4a3db8;
    }
    .message {
      margin-top: 15px;
      padding: 12px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 15px;
    }
    .error {
      background: #ff4c4c;
      color: #fff;
    }
    .success {
      background: #4caf50;
      color: #fff;
    }
    .footer-text {
      margin-top: 25px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
    }
  </style>
</head>
<body>
<?php
// Hardcoded credentials for demo
$valid_username = 'user123';
$valid_password = 'pass123';

// Initialize message variables
$message = '';
$message_class = '';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = isset($_POST['username']) ? trim($_POST['username']) : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Basic validation
    if (empty($username) || empty($password)) {
        $message = 'Please fill in both fields.';
        $message_class = 'error';
    } elseif ($username === $valid_username && $password === $valid_password) {
        $message = 'Login successful! Welcome, ' . htmlspecialchars($username) . '.';
        $message_class = 'success';
    } else {
        $message = 'Invalid username or password.';
        $message_class = 'error';
    }
}
?>

  <div class="login-container" role="main" aria-label="Login Form">
    <h2>Login to Your Account</h2>
    <form method="POST" action="">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value="<?php echo isset($username) ? htmlspecialchars($username) : ''; ?>"
        autocomplete="username"
        required
        aria-required="true"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        autocomplete="current-password"
        required
        aria-required="true"
      />
      <button type="submit" aria-label="Submit login form">Login</button>
    </form>
    <?php if ($message): ?>
    <div class="message <?php echo $message_class; ?>" role="alert">
      <?php echo $message; ?>
    </div>
    <?php endif; ?>
    <div class="footer-text">Username: user123 | Password: pass123</div>
  </div>
</body>
</html>

