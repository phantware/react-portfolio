import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div stye={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
              alt="avatar-pics"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | MongoDB | Express | React |
                Nodejs | PostgreSQL
              </p>
              <div className="social-link">
                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" arial-hidden="true"></i>
                </a>

                {/* Github */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" arial-hidden="true"></i>
                </a>

                {/* Freecodecamp */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-free-code-camp" arial-hidden="true"></i>
                </a>

                {/* Youtube */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-square" arial-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
