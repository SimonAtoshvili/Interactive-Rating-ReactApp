import { useState } from 'react';
import starIcon from './images/Path.svg'
import Ratings from './Ratings'
import Submitted from './Submitted'

function App() {
  const [num, setNum] = useState(0);
  const [which, setWhich] = useState(false)
  return (
    <div>
      {which
        ?
        <div className='content'>
          <Submitted num={num} />
        </div>
        :
        <div className="content">
          <Icon />
          <Text />
          <Ratings num={num} setNum={setNum} />
          <button onClick={() => {
            if (num > 0) {
              setWhich(true)
            }
          }}>
            SUBMIT
          </button>
        </div>
      }
    </div>
  );
}

function Icon() {
  return (
    <div className="icon_div">
      <img src={starIcon} />
    </div>
  )
}

function Text() {
  return (
    <div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
    </div>
  )
}


export default App;
