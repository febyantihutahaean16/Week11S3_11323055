import React, { useState } from "react";
import "./App.css"; // Perhatikan penamaan file css yang diimpor

const themes = {
  light: {
    background: "#f5f5f5",
    text: "#333",
    buttonBackground: "#4caf50",
    buttonTextColor: "#fff",
  },
  dark: {
    background: "#333",
    text: "#f5f5f5",
    buttonBackground: "#222",
    buttonTextColor: "#fff",
  },
};

// Komponen untuk Register
const Register = ({ onRegister, switchToLogin, theme }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    onRegister(username, password);
  };

  return (
    <div
      className="auth-container"
      style={{ background: theme.background, color: theme.text }}
    >
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /> {/* Pisahkan baris */}
      <br /> {/* Pisahkan baris */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /> {/* Pisahkan baris */}
      <br /> {/* Pisahkan baris */}
      <button
        className="auth-button"
        style={{
          background: theme.buttonBackground,
          color: theme.buttonTextColor,
        }}
        onClick={handleRegister}
      >
        Register
      </button>
      <p>
        Sudah memiliki akun?{" "}
        <button className="auth-link" onClick={switchToLogin}>
          Login
        </button>
      </p>
    </div>
  );
};

// Komponen untuk Login
const Login = ({ onLogin, switchToRegister, theme }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <div
      className="auth-container"
      style={{ background: theme.background, color: theme.text }}
    >
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /> {/* Pisahkan baris */}
      <br /> {/* Pisahkan baris */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /> {/* Pisahkan baris */}
      <br /> {/* Pisahkan baris */}
      <button
        className="auth-button"
        style={{
          background: theme.buttonBackground,
          color: theme.buttonTextColor,
        }}
        onClick={handleLogin}
      >
        Login
      </button>
      <br /> {/* Pisahkan baris */}
      <br /> {/* Pisahkan baris */}
      <p>
        Belum memiliki akun?{" "}
        <button className="auth-link" onClick={switchToRegister}>
          Register
        </button>
      </p>
    </div>
  );
};

// Komponen untuk Chat
const ChatApp = ({ username, theme }) => {
  const [message, setMessage] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      setSentMessages([...sentMessages, { from: username, content: message }]);
      setMessage("");
    }
  };

  return (
    <div style={{ background: theme.background, color: theme.text }}>
      <h2>Message App</h2> {/* Judul ditaruh di sini */}
      <textarea
        rows="4"
        cols="50"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message..."
      />
      <button
        style={{
          background: theme.buttonBackground,
          color: theme.buttonTextColor,
        }}
        onClick={sendMessage}
      >
        Send
      </button>
      <p onMouseOver={handleMouseOver}>
        {isMouseOver
          ? "Mouse is over the message area!"
          : "Mouse is out of the message area!"}
      </p>
      <div>
        {sentMessages.map((msg, index) => (
          <div key={index}>
            <p>From: {msg.from}</p>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div>
        <img
          src="https://akupintar.id/documents/20143/0/del1.jpg/25efd2fa-e18d-5eb9-de8c-ef9e32910614?t=1657876936629&imagePreview=1"
          alt="Placeholder"
          onLoad={handleLoad}
        />
        {isLoaded && <p>Image is loaded!</p>}
      </div>
    </div>
  );
};

// Komponen induk untuk mengatur alur aplikasi
const EventreactFeby = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("light");

  const handleRegister = (username, password) => {
    setUsername(username);
    setIsRegisterMode(false);
  };

  const handleLogin = (username, password) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const switchToRegister = () => {
    setIsRegisterMode(true);
  };

  const switchToLogin = () => {
    setIsRegisterMode(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div style={{ textAlign: "right", padding: "20px" }}>
        <button onClick={toggleTheme} style={{ marginBottom: "20px" }}>
          Ganti Tema
        </button>
      </div>
      {!isLoggedIn ? (
        <>
          {isRegisterMode ? (
            <Register
              onRegister={handleRegister}
              switchToLogin={switchToLogin}
              theme={themes[theme]}
            />
          ) : (
            <Login
              onLogin={handleLogin}
              switchToRegister={switchToRegister}
              theme={themes[theme]}
            />
          )}
        </>
      ) : (
        <ChatApp username={username} theme={themes[theme]} />
      )}
    </div>
  );
};

export default EventreactFeby;
