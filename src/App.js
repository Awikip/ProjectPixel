import './App.css';
import lahksa from './images/lahksa.gif';
import city from './images/city.png';
import Header from './Header.js';
import Charselect from './Charbox.js';
import StatList from './Statsbox.js';
import Classselect from './Classbox.js';
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
        <div>
          <Eqselect images={[
            lahksa, city
          ]} />
          <Compselect images={[
            lahksa, city
          ]} />
        </div>
      </div>
      <div className="bottom-box">
        <Cornerbox/>
      </div>
    </div>
  );
}

export default App;
