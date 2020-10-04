
import React from 'react';
import '../../../components/sass/App.css';

function App( props ) {
    const login = () => window.location.href = 'http://localhost:3001/auth'

  return (
    <div className="App">
        <button variantColor="orange" onClick={login}>Login</button> 
    </div>
  );
}

export default App;

