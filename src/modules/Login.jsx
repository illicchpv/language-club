/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {useEffect, useRef, useState} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import './Login.css';

const stageClasses = [
  '',
  'onGoing',
  'onGoing onEnd',
  'onGoing onEnd onFields',
  'onGoing onEnd onFields ifLoginOk',
];
const lastAutoStep = 3;
// const lastAutoStep = 0;


function stageToClassName(stage) {
  const i = stage % stageClasses.length;
  return stageClasses[i];
}

export const Login = ({setUser, setIsLoginVisible}) => {
  const [stage, setStage] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginRef = useRef();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const debounced1 = useDebouncedCallback(
    (value) => {
      console.log('debounced1', value);
      setStage(value);
    }, 1000 // delay in ms
  );

  const transitionEndHandler = (e) => {
    if (!loginRef?.current) return;
    // console.log('transitionEndHandler', e.propertyName, e);

    // if(stageToClassName(stage) !== lastAutoStage) debounced1(stage + 1);
    console.log('stage: ', stage, lastAutoStep);
    if (stage < lastAutoStep)
      debounced1(stage + 1);
    else {
      console.log('setTimeout ');
      if (stage == lastAutoStep){ // ???
        loginRef.current.querySelector('.inputName').focus();
        loginRef.current.querySelector('.inputName').select();
      }
      if (stage > lastAutoStep){
        setTimeout(() => {
          setIsLoginVisible(false);
        }, 1000);
      }
    }
  };

  const handlerLoginSubmit = (e) => {
    console.log('handlerLoginSubmit: ');
    e.preventDefault();
    if(name !== 'Admin'){
      setError('Wrong name! Try Admin');
      return;
    }
    setUser({name});
    // const s = stageToClassName(lastAutoStep + 1);
    // console.log('s: ', s);

    setStage(lastAutoStep + 1);
  };

  useEffect(() => {
    debounced1(stage + 1);
  }, []);

  return (<>
    <div className={`Login ${stageToClassName(stage)}`}
      ref={loginRef}
      onTransitionEnd={transitionEndHandler}
    >

      <div className="point"></div>
      <div className="t1">ASDH</div>
      <div className="t2">language Club</div>

      <form className='form'
        onSubmit={handlerLoginSubmit}
      >
        <input className='inputName' type="text" placeholder='name (Admin)' autoFocus minLength={3} required
          onChange={(e) => setName(e.target.value)} value={name}
        />
        <input className='inputPassword' type="password" placeholder='password (>2ch)' minLength={3} required
          onChange={(e) => setPassword(e.target.value)} value={password}
        />
        <div className="error">{error}</div>


        <div className="btnBlock">
          <button className='btnLogin' type='submit'>
            <svg viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37.5" cy="37.5" r="37.5" fill="#6E57FF" />
              <path d="M55.9349 38.7071C56.3255 38.3166 56.3255 37.6834 55.9349 37.2929L49.571 30.9289C49.1805 30.5384 48.5473 30.5384 48.1568 30.9289C47.7662 31.3195 47.7662 31.9526 48.1568 32.3431L53.8136 38L48.1568 43.6569C47.7662 44.0474 47.7662 44.6805 48.1568 45.0711C48.5473 45.4616 49.1805 45.4616 49.571 45.0711L55.9349 38.7071ZM20 39H55.2278V37H20V39Z"
                fill="white" />
            </svg>
          </button>
        </div>
      </form>

      <div className="welcome">
        welcome {name}
      </div>

    </div>
  </>);
};

