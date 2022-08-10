import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearDisplay = () => {
    setResult('');
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <>
      <body>
        <div className='cal' >
          <input type='text' className='input' placeholder="0" value={result} />
          <input type='button' value='9' className='buttons' onClick={handleClick} />
          <input type='button' value='8' className='buttons' onClick={handleClick} />
          <input type='button' value='7' className='buttons' onClick={handleClick} />
          <input type='button' value='6' className='buttons' onClick={handleClick} />
          <input type='button' value='5' className='buttons' onClick={handleClick} />
          <input type='button' value='4' className='buttons' onClick={handleClick} />
          <input type='button' value='3' className='buttons' onClick={handleClick} />
          <input type='button' value='2' className='buttons' onClick={handleClick} />
          <input type='button' value='1' className='buttons' onClick={handleClick} />
          <input type='button' value='0' className='buttons' onClick={handleClick} />

          <input type='button' value='+' className='buttons' onClick={handleClick} />
          <input type='button' value='-' className='buttons' onClick={handleClick} />
          <input type='button' value='/' className='buttons' onClick={handleClick} />
          <input type='button' value='*' className='buttons' onClick={handleClick} />
          <input type='button' value='%' className='buttons' onClick={handleClick} />
          <input type='button' value='.' className='buttons' onClick={handleClick} />

          <input type='button' value='Clear' className='but' onClick={clearDisplay} />
          <input type='button' value='=' className='but' onClick={calculate} />


        </div>
      </body>
      <p className='des'>- Built by Sree Neha using Reactjs. </p>
    </>
  );
}

export default App;
