// C:\Users\User\c2\frontend\src\components\Header\Header.jsx

import Navbar from './Navbar';
import SearchBar from './SearchBar';
import '../../styles/Header.css'
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header-container">
      <div className="logo-navbar-container"> {/* Container for logo and navbar */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Logo image */}
        </div>
        <Navbar />
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
