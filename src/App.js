import logo from './logo.svg';
import './App.css';
import lahksa from './images/lahksa.gif';
import city from './images/city.png';
import Header from './Header.js';
import Charbox from './Charbox.js';
import Statsbox from './Statsbox.js';
import Eqbox from './Eqbox.js';
import Compbox from './Compbox.js';
import Cornerbox from './Cornerbox.js';

function App() {
  return (
    <div>
      <Header/>
      <div className="top-box">
        <Charbox/>
        <Statsbox/>
      </div>
      <div className="bottom-box">
        <Eqbox/>
        <Compbox/>
        <Cornerbox/>
      </div>
    </div>
  );
}

export default App;
