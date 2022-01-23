
import './App.css';
import UserContext from './components/UseContext/UseContext';
import { UseEffect } from './components/UseEffect/UseEffect';

import UseEffectInput from './components/UseEffectInput/UseEffectInput';


function App() {
  return (
    <div className="App">

      <fieldset>    
            <UseEffect/>
      </fieldset>
      <fieldset>
            <UseEffectInput />      
      </fieldset>

      <UserContext />
            
    </div>
  );
}

export default App;
