import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((page) => {
            return (
              <li key={page.id}>
                <a href={page.url} className='nav-link' rel='noreferrer'>
                  {page.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((socialIcon) => {
            return (
              <li key={socialIcon.id}>
                <a
                  href={socialIcon.url}
                  target='_blank'
                  className='nav-icon'
                  rel='noreferrer'
                >
                  <i className={socialIcon.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
