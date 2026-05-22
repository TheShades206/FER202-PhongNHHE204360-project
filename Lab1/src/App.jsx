import { useState } from "react";
import "./App.css";
import avatarImg from "./assets/emilia.jpg";

function Header({ isDark, setIsDark }) {
  const student = {
    fullName: "Nguyễn Hữu Phong",
    studentId: "HE204360",
    className: "SE2009 - NJ",
    major: "Kỹ thuật Phần mềm (Software Engineering)",
    hobbies: ["Lập trình Vibe Code", "Đọc truyện tranh", "Xem Anime (thỉnh thoảng)", "Chơi Game (dù gà)"],
  };

  const { fullName, studentId, className, major, hobbies } = student;

  const [isOnline, setIsOnline] = useState(true);
  const [likes, setLikes] = useState(0);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <div className="avatar-container">
        <img
          src={avatarImg}
          alt="Emilia Avatar"
          className="avatar-img"
        />
      </div>

      <div className="student-info">
        <h2>{fullName}</h2>
        <p><strong>Mã sinh viên :</strong> {studentId}</p>
        <p><strong>Lớp:</strong> {className}</p>
        <p><strong>Chuyên ngành:</strong> {major}</p>
        
        <div className="hobbies-section">
          <div className="hobbies-heading"><strong>Sở thích cá nhân:</strong></div>
          <div className="hobbies-list-modern">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-item">
                <span className="hobby-text">{hobby}</span>
              </div>
            ))}
          </div>
        </div>

        <p>
          <strong>Trạng thái:</strong>{" "}
          {isOnline ? (
            <span className="status-online">🟢 Online</span>
          ) : (
            <span className="status-offline">🔴 Offline</span>
          )}
        </p>

        <div className="actions-container">
          <button onClick={() => setIsOnline(!isOnline)} className="btn-action">
            Change Status
          </button>
          <button onClick={() => setLikes(likes + 1)} className="btn-action">
            👍 Like
          </button>
          <button onClick={toggleTheme} className="btn-action">
            {isDark ? "🌙 Dark " : " ☀️ Light"}
          </button>
        </div>

        <p className="like-count">
          ❤️ <strong>{likes}</strong> lượt thích
        </p>
      </div>
    </>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`app-wrapper ${isDark ? "dark-mode" : ""}`}>
      <div className="app-container">
        <header>
          <Header isDark={isDark} setIsDark={setIsDark} />
        </header>
      </div>
    </div>
  );
}

export default App;

