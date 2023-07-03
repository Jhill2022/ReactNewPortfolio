import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import NewMe from '../../assets/NewMe.png';
import HeaderSocials from './HeaderSocials';
import { HeaderStyle } from './HeaderStyle';
const Header = () => {
  return (
    <HeaderStyle>
      <div className='buttonflex'><div className="toggle-button">
        <input type="checkbox" id="toggle" className="toggle-input" />
        <label htmlFor="toggle" className="toggle-label"></label>
      </div></div>
      

      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Joshua Hill</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={NewMe} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </HeaderStyle>
  );
};

export default Header;
