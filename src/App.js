import "./App.css";
import Home from "./components/Home";
import React, {useState} from "react";
import MainPage from "./components/MainPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function loginHandler (email, password) {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // Let me know when you get to this part to work with you on it
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn && <Home onLogin={loginHandler}></Home>}
      {isLoggedIn && <MainPage onLogout={logoutHandler}/>}
      
    </div>
  );
}

export default App;
