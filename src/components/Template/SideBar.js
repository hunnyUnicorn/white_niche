import React from 'react';
import { Link } from 'react-router-dom';

// import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>Chunji Piao</h2>
        <p><a href="chunjipiaollc@outlook.com">chunjipiaollc@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        <b>Self-motivated</b> and <b>innovative</b> team dedicated to solving complex problems.
        Out expertise ensures tailored and impactful result for our clients.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/projects" className="button">Projects</Link>}
        </li>
      </ul>
    </section>

    {/* <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Crash <Link to="/">gianfranco.com</Link>.</p>
    </section> */}
  </section>
);

export default SideBar;
