import './App.css';
import lahksa from './images/lahksa.gif';
import city from './images/city.png';
import Header from './Header.js';
import Charselect from './Charbox.js';
import StatList from './Statsbox.js';
import Classselect from './Charbox.js';
import Eqselect from './Eqbox.js';
import Compselect from './Compbox.js';
import Cornerbox from './Cornerbox.js';

function App() {
  return (
    <div>
      <Header/>
      <div className="top-box">
        <Charselect images={[
          lahksa, city
        ]} />
        <StatList />
        <Classselect images={[
          lahksa, city
        ]} />
      </div>
      <div className="bottom-box">
        <Eqselect images={[
          lahksa, city
        ]} />
        <Compselect images={[
          lahksa, city
        ]} />
        <Cornerbox/>
      </div>
    </div>
  );
}

export default App;
