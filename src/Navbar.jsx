import { useState, useRef } from 'react';
import { links, social } from './data';
import { FaBars } from 'react-icons/fa';
import logo from './logo.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav className='nav-center'>
      <div className='nav-header'>
        <img src={logo} className='logo' />
        <button className='nav-toggle' onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      <div
        className='links-container'
        ref={linksContainerRef}
        style={linkStyles}>
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
