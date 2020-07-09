import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                My Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Project">Project</Link>
              <Link to="/Resume">Resume</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                My Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Project">Project</Link>
              <Link to="/Resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
