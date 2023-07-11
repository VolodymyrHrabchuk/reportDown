import { ReactComponent as Logo } from "../img/rd441-bl.svg";
import { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react';


function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShow(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return show;
}


const Heading = () => {
  const [hiddenMenu, setHidden] = useState(false);
  const show = Navigation();

  return (
     
      <header className={show? "header header--fixed" : "header"}>
      <div className="container">
        <div className="header__nav-bar" id="menu">
          <a href="#home" className="nav-img">
            <Logo className="logo" />
          </a>
          <nav className={hiddenMenu? "nav active" : "nav" }>
            <ul className="header__nav">
              <li className="header__nav-item hvr-underline-from-center">
                <a href="#home" className="nav-link nav-link--blue">
                  Home
                </a>
              </li>
              <li className="header__nav-item hvr-underline-from-center">
                <a href="#about-us" className="nav-link nav-link--blue">
                  About Us
                </a>
              </li>
              <li className="header__nav-item hvr-underline-from-center">
                <a href="#prices" className="nav-link nav-link--blue">
                  Prices
                </a>
              </li>
              <li className="header__nav-item hvr-underline-from-center">
                <a href="#contacts" className="nav-link nav-link--blue">
                  Contacts
                </a>
              </li>
            </ul>
            <a href="#cooperate" className="link-btn hvr-push">
              <button className="button">Let's cooperate!</button>
            </a>
          </nav>
            <Hamburger onToggle={setHidden} rounded />
        </div>
      </div>
    </header>
  );
};

export default Heading
