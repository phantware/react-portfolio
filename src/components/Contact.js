import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Paul Baba</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '240px' }}
            />
            <p style={{ width: '75%', margin: 'auto', padding: '1em' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              facilis qui fugit autem provident rem officiis ex. Officia beatae
              sequi delectus vitae veritatis accusamus consectetur possimus,
              animi, quasi dolores ratione?
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '40px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    08011222356
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '40px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-fax" aria-hidden="true"></i>
                    08011222356
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '40px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    lala@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '40px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-skype" aria-hidden="true"></i>
                    lalamartin
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
