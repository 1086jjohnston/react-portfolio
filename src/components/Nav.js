import React, { useEffect} from 'react';

function Nav(props) {
      
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          My Blog in React
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
              <a data-testid="portfolio" href="#portfolio">
                  Portfolio
              </a>
            </li>
            <li className="mx-2">
                <a data-testid="resume" href="#resume">Resume</a>
            </li>
            <li className="mx-2">
            <a data-testid="contact" href="#contact">
                Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;