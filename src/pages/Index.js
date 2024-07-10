import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Chunji Piao's personal website. Lima based University graduate, "
    + 'full stack developer'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Chunjipiao LLC</Link></h2>
          <p>
            Welcome to chunjipiao LLC, where innovation drive our software consulting services.
          </p>
          <p>
            Our expert team collaborates closely with clients to deliver impactful solutions.
          </p>
          <p>Our agile methodology ensures flexibility, adapting to the needs of each project.</p>
          <p>
            We pride ourselves on a proven track record of success across various industries.
          </p>
          <p>
            Contact us today to explore how we can help you achieve your goals.
          </p>
          <p style={{ paddingTop: '20px' }}>
            Address: 209 HART BLVD, Staten Island, NY, United States, 10301
          </p>
          <p>
            Phone: +1 601 8720088
          </p>
        </div>
      </header>
      <p> Welcome to our website. Please feel free to read more <Link to="/about">about us</Link>,
        or you can check out my {' '}
        {/* <Link to="/resume">resume</Link>, {' '} */}
        <Link to="/projects">projects</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        or <Link to="/contact">contact</Link> me.
      </p>
      {/* <p> Source available <a href="https://github.com/dev1ninja/personal-website">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
