import { useState } from 'react';
import './App.css';
import logo from './assets/instagram.png'

function App() {

  const [login, setlogin] = useState(true);

  const loginSwitch = () => {
    setlogin(!login)
  }


  return (
    <div className="info">
      <div className='header'>
        <img src={logo} alt="logo" />
        <input type='text' hidden={login} placeholder='Mobile Number or Email'/>
        <input type='text' hidden={login} placeholder='Full Name'/>
        <input type='email' placeholder='Phone number, username or email'/>
        <input type='text' placeholder='Password'/>
        <button>{login? "Sign In" : "Sign Up" }</button>
      </div>

      <div className='footer'>
      {login? "Don't have account?" : "have an account?" } <span onClick={loginSwitch}>{login? "Sign up" : "Log in" } </span>
      </div>
    </div>
  );
}

export default App;
