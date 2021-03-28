import logo from './logo.svg';
import './App.css';
import lahksa from './images/lahksa.gif';
import Header from './Header.js';
import Charbox from './Charbox.js';
import Statsbox from './Statsbox.js';
import Eqbox from './Eqbox.js';
import Compbox from './Compbox.js';

function App() {
  return (
    <div>
      <Header/>
      <div className="box">
        <Charbox/>
        <Statsbox/>
        <Eqbox/>
        <Compbox/>
      </div>
    </div>
  );
}

export default App;
