import { useState } from 'react';
import './App.css';
import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg'; 

const quotes = [
  "Mỗi ngày là một điều vui",
  "Hãy mỉm cười mỗi ngày để cuộc sống luôn tươi đẹp! 😊",
  "Học tập hôm nay là chìa khóa mở cửa tương lai! 🔑",
  "Đừng sợ thất bại, đó là bước đệm của thành công! 💪",
  "Một ngày không có tiếng cười là một ngày lãng phí! ✨",
  "Hãy làm việc chăm chỉ trong im lặng và để thành công lên tiếng! 🌟",
  "Mọi chuyện rồi sẽ ổn thôi, hãy tin vào chính mình! ❤️"
];

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
function Header()
{
  const name = "Nguyen Huu Phong";
  const isLoggedIn = true;
  const age = 20;
  const email = "shadowphongnguyen@gmail.com";
  const items = [
    { id: 1, name: "ReactJS" },
    { id: 2, name: "NodeJS" },
    { id: 3, name: "Vite" }
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const changeQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex] === currentQuote);
    setCurrentQuote(quotes[randomIndex]);
  };

  return(
    <>
    <h1>My React App</h1>
    <p>This is a simple React application</p>
    <p>Created by {name}</p>
    {/* jsx voi bieu thuc*/}
    <p><strong>{1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10}</strong></p>
    <p>{isLoggedIn ? "Welcome back!" : "Please login"}</p>
    <p>Current Date & Time: {today + " " + time}</p>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}  
    </ul>
    <div>
      <h3>Thông tin cá nhân</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>

    <div>
      <img src={viteLogo} alt="Vite Logo" />
      <img src={reactLogo} alt="React Logo" />
    </div>

    <div>
      <p className="quote-text">"{currentQuote}"</p>
      <button onClick={changeQuote}>Đổi câu khác</button>
    </div>
    </>
  )
}

function Count()
{
  const [count, setCount ] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={ () => setCount(count + 1)}>Increment</button>
      <button onClick={ () => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
function FollowButton()
{
  const [isFollowing, setIsFollowing] = useState(true);
  return (
    <div>
      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? "Following" : "Follow me"}
      </button>
    </div>
  );
}
function App()
{
  return(
    <>
      <header>
        <Header />
      </header>
      <main>
        <Count />
        <FollowButton />
      </main>
    </>
  );
}

export default App;