import React from 'react';
import './header.css';
import logoFatec from '././img/logo_fatec_pb.png'
import logoSP from '././img/logo-sp.png'

const Header = () => {
  return (
    <header className="header">
      <div className="headerLogo">       
        <img src={logoFatec} className='logoFatec'></img>
        <img src={logoSP} className='logoSP'></img>
      </div>
    </header>
  );
};

export default Header;