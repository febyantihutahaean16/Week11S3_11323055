import React, { useState } from "react";
import "./style.css"; // Perhatikan penamaan file css yang diimpor

// Komponen untuk Register
const Register = ({ onRegister, switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [changeEvent, setChangeEvent] = useState(0);

  const handleRegister = () => {
    // Lakukan validasi atau proses register disini
    // Contoh: Simpan data ke database atau state aplikasi
    onRegister(username, password);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setChangeEvent(changeEvent + 1);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setChangeEvent(changeEvent + 1);
        }}
      />
      <button className="auth-button" onClick={handleRegister}>
        Register
      </button>
      <p>
        Sudah memiliki akun?{" "}
        <button className="auth-link" onClick={switchToLogin}>
          Login
        </button>
      </p>
      <p>Change Event Count: {changeEvent}</p>
    </div>
  );
};

// Komponen untuk Login
const Login = ({ onLogin, switchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [keyPressed, setKeyPressed] = useState("");
  const [changeEvent, setChangeEvent] = useState(0);

  const handleLogin = () => {
    // Lakukan validasi atau proses login disini
    // Contoh: Verifikasi data di database atau state aplikasi
    onLogin(username, password);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setChangeEvent(changeEvent + 1);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setChangeEvent(changeEvent + 1);
        }}
      />
      <p>
        Belum memiliki akun?{" "}
        <button className="auth-link" onClick={switchToRegister}>
          Register
        </button>
      </p>
      <button className="auth-button" onClick={handleLogin}>
        Login
      </button>
      <p>Change Event Count: {changeEvent}</p>
    </div>
  );
};

// Komponen untuk Chat
const ChatApp = ({ username }) => {
  const [message, setMessage] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [keyPressed, setKeyPressed] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [changeEvent, setChangeEvent] = useState(0);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setChangeEvent(changeEvent + 1);
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
    setChangeEvent(changeEvent + 1);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
    setChangeEvent(changeEvent + 1);
  };

  const handleKeyDown = (e) => {
    setKeyPressed(e.key);
    setChangeEvent(changeEvent + 1);
  };

  const handleLoad = () => {
    setImageLoaded(true);
    setChangeEvent(changeEvent + 1);
  };

  const sendMessage = () => {
    // Kirim pesan
  };

  return (
    <div>
      <h2>Message App</h2>
      <textarea
        rows="4"
        cols="50"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
      <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {isMouseOver
          ? "Mouse is over the message area!"
          : "Mouse is out of the message area!"}
      </p>
      <p>Pressed Key: {keyPressed ? keyPressed : "None"}</p>
      <div>
        <img
          src="https://akupintar.id/documents/20143/0/del1.jpg/25efd2fa-e18d-5eb9-de8c-ef9e32910614?t=1657876936629&imagePreview=1"
          alt="Placeholder"
          onLoad={handleLoad}
        />
        {imageLoaded && <p>Image is loaded!</p>}
      </div>
      <p>Change Event Count: {changeEvent}</p>
    </div>
  );
};

export default EventreactFeby; // Export nama komponen utama yang sesuai
