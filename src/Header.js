import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <h1>Project Pixel Art</h1>
      </div>
      <div className="menu">
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#character">Character</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
