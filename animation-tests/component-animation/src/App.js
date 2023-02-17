import './App.css';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  /*
  const transition = useTransition(isVisible, { 
    from: {},
    enter: {},
    leave: {},
  });*/
  
  return (
    <div className="app">
      <button onClick={() => {
            setIsVisible(v => !v);
            //
            }}>{isVisible ? 'Close me!' : 'Open me!'}
      </button>
      <div className='container'>
        {isVisible ? <div className="item"/> : ''}
       {/*transition((style, item) =>  item ? <animated.div className="item" /> : ''  )*/}
      </div>
    </div>
  );
}

export default App;
