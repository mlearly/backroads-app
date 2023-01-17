import { pageLinks, socialLinks } from '../data';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((page) => {
          return (
            <li key={page.id}>
              <a href={page.url} rel='noreferrer' className='footer-link'>
                {page.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((socialIcon) => {
          return (
            <li key={socialIcon.id}>
              <a
                href={socialIcon.url}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={socialIcon.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy;Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
