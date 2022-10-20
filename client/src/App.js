import { useDispatch, useSelector } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import { login, logout } from './store/authSlice';

function App() {
  const { isLoggedIn, username } = useSelector(state=>state.auth)
  const dispatch = useDispatch()

  const loginHandler = () => {
    dispatch(login({username: 'David'}))
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { username?`Hello ${username}`:'Please login'}
        </p>
        {!isLoggedIn && <button onClick={loginHandler}>Login</button>}
        { isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      </header>
    </div>
  );
}

export default App;
