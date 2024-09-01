/* eslint-disable no-unused-vars */
import './App.css';
import {useState} from 'react';
import {Login} from './modules/Login';
import {SelectSection} from './modules/SelectSection';

console.log(import.meta.env.VITE_SOME_KEY)
console.log(import.meta.env.VITE_NAME)

function App() {
  const [welcome, setWelcome] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  return (
    <div className='App'>

      {isLoginVisible && <Login setUser={setUser} setIsLoginVisible={setIsLoginVisible} />}

      {!isLoginVisible && <SelectSection />}

    </div>
  );
}

export default App;
