import { useEffect, useState } from 'react';
import './App.css';

import { ClassBased } from "./ClassBased";

function App() {

  const [count, setCount] = useState();
  const [visible, setVisible] = useState(false);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log('useEffect with no deps: ' + Date().toLocaleString() + ' with count: ' + count)
  })
  useEffect(() => {
    // console.clear();
    console.log('Started with count: ' + count)
  }, []);
  return (
    <div>
      <ClassBased />
      <button onClick={() => {
        const newCount = (count ? count : 0) + 1;
        setCount(newCount);
      }}>Increase</button><button onClick={() => {
        // console.log('Do nothing');
        const newCount2 = count2 + 1;
        setCount2(newCount2);
      }}> Do Nothing {count2}</button><button onClick={() => setVisible(!visible)}>Hide/Display</button>
      {visible ? <Display count={count} /> : null}</div>
  );
}

function Display({ count }) {
  useEffect(() => {
    console.log('<Display> created');
    return () => {
      console.log('<Display> destroyed')
    }
  }, []);
  useEffect(() => {
    console.log("useEffect in Display with setInterval and dep of count: " + count);
    const interval = window.setInterval(() => {
      console.warn('setInterval ran');
    }, 10000);
    return () => {
      window.clearInterval(interval);
      console.warn('setInterval cleared');
    }
  }, [count]);
  useEffect(() => {
    console.log("useEffect in Display with dep of count: " + count);
  }, [count]);
  return <div>Count: {count}</div>
}

export default App;
