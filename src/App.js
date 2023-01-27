import {useState, useEffect} from 'react';

function App() {

  const [n, setCount] = useState(0);


  return (
    <div>
      <p>{n}</p>
      <button onClick={() => setCount(n + 1)}>mais</button>
    </div>
  );
}

export default App;