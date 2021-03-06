import React from 'react';

const Footer = () => {
  return(
    <footer>
      <div className="container level">
        <div className="level-item">Sebastián Salata R-T</div>

        <div className="level-item">2017</div>

        <div className="level-item">
          <a href="https://github.com/sasalatart/on-this-day" target="_blank">
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
            <span>Project Repository</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
