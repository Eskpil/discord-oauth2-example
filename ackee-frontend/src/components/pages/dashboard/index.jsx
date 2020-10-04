import React from 'react';
import '../../../components/sass/App.css';
import { getUserDetails } from '../../../utils/api'

function App( props ) {

    React.useEffect( () => {
        getUserDetails()
        .then( ( { data} ) => {
            console.log(data)
        }).catch((err) => console.log(err))
    })
  return (
    <div className="App">
      <footer>
        <div className="container">
          
        </div>
      </footer>
    </div>
  );
}

export default App;
