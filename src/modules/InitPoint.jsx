/* eslint-disable no-unused-vars */
import './InitPoint.css';
import React, {useEffect, useState} from 'react';
// import {Animate} from 'react-simple-animate';
// import `debounce from 'debounce';
import {useDebouncedCallback} from 'use-debounce';

// function processTransitionEnd(ref, setInitFinished) {
//   console.log(new Date().getTime(), 'processTransitionEnd --------- ');
//   ref.current.classList.toggle('transitionsEnd');
//   if (ref.current.classList.contains('transitionsEnd'))
//     setInitFinished(true);
//   else
//     setInitFinished(false);
// }


export const InitPoint = () => {
  const [initFinished, setInitFinished] = useState(false);
  const [play, setPlay] = useState(false);
  const [a1OnStart, setA1OnStart] = useState('0');
  const iniPointRef = React.useRef();
  // const transitionFinishedDebounced = debounce(() => processTransitionEnd(iniPointRef, setInitFinished), 1000);
  const debounced = useDebouncedCallback(
    (value) => {setInitFinished(value);},
    1000 // delay in ms
  );

  const transitionEndHandler = (e) => {
    if (!iniPointRef?.current) return;
    console.log('transitionEndHandler', e.propertyName, e);
    // transitionFinishedDebounced();
    if (iniPointRef.current.classList.contains('size'))
      debounced(true);
    else
      debounced(false);
  };

  const handleSize = () => {
    if (!iniPointRef?.current) return;

    iniPointRef.current.classList.toggle('size');
  };

  useEffect(() => {
    if (!iniPointRef || !iniPointRef.current) return;

    setTimeout(() => {iniPointRef.current.classList.add('size');}, 10);
  }, []);

  return (
    <div className={`InitPoint ${initFinished ? 'size transitionsEnd' : ''}`}
      ref={iniPointRef}
      onTransitionEnd={transitionEndHandler}
    >

      <div className="point"
        onClick={handleSize}
      >
        <span className="startText">ASDH</span>
        <span className="endText">language Club {initFinished ? 'ok' : '...'}</span>
      </div>

    </div>
  );
};
