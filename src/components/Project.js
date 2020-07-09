import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from 'react-mdl';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          {/** Project 1 */}
          <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#000',
                height: '176px',
                background:
                  'url(https://media.glassdoor.com/sqll/433703/mongodb-squarelogo-1564695792753.png) center/cover',
              }}
            >
              MongoDB Projects
            </CardTitle>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, possimus nemo reprehenderit distinctio ipsam
              accusamus impedit fuga adipisci nulla, rem iusto at soluta minus
              tempore perspiciatis voluptas nisi tenetur a.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/** Project 2 */}
          <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#000',
                height: '176px',
                background:
                  'url(https://media.glassdoor.com/sqll/433703/mongodb-squarelogo-1564695792753.png) center/cover',
              }}
            >
              MongoDB Projects
            </CardTitle>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, possimus nemo reprehenderit distinctio ipsam
              accusamus impedit fuga adipisci nulla, rem iusto at soluta minus
              tempore perspiciatis voluptas nisi tenetur a.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/** Project 3 */}
          <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#000',
                height: '176px',
                background:
                  'url(https://media.glassdoor.com/sqll/433703/mongodb-squarelogo-1564695792753.png) center/cover',
              }}
            >
              MongoDB Projects
            </CardTitle>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, possimus nemo reprehenderit distinctio ipsam
              accusamus impedit fuga adipisci nulla, rem iusto at soluta minus
              tempore perspiciatis voluptas nisi tenetur a.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Express Js</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Node Js</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>This is PostgreSQL</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>MongoDB</Tab>
          <Tab>Expressjs</Tab>
          <Tab>React</Tab>
          <Tab>Nodejs</Tab>
          <Tab>PostgreSQL</Tab>
        </Tabs>

        <section className="project-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
export default Project;
