import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/92/77/faceless-businessman-avatar-man-in-suit-with-blue-vector-13569277.jpg"
                alt="avatar"
                style={{ height: '200px' }}
              />
              <h2 style={{ paddingTop: '2em' }}>Paul Manager</h2>
              <h4 style={{ color: 'grey' }}>Programmer</h4>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti, id. Sit id voluptates quos! Hic odio quas eos.
                Dignissimos eos assumenda id porro ipsum ratione obcaecati nam
                consequatur velit nesciunt.
              </p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
              <h5>Address</h5>
              <p>1 Awolowo Way, Oshodi</p>
              <h5>Phone</h5>
              <p>08012245438</p>
              <h5>Email</h5>
              <p>lala@gmail.com</p>
              <h5>Web</h5>
              <p>mywebsite.com</p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education </h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName={'Yaba College of Education'}
              schoolDescription={
                'Education Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vel nobis doloribus eum natus maxime quaerat porro dignissimos, quo blanditiis minus sit beatae harum fugiat eaque laborum ducimus explicabo nesciunt?'
              }
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName={'D.SAdegbenro ICT Polytechnic'}
              schoolDescription={
                'Education Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vel nobis doloribus eum natus maxime quaerat porro dignissimos, quo blanditiis minus sit beatae harum fugiat eaque laborum ducimus explicabo nesciunt?'
              }
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName={'Microsoft Dynamcis ERP'}
              jobDescription={
                'Education Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vel nobis doloribus eum natus maxime quaerat porro dignissimos, quo blanditiis minus sit beatae harum fugiat eaque laborum ducimus explicabo nesciunt?'
              }
            />

            <Experience
              startYear={2013}
              endYear={2015}
              jobName={'IT Trainning Assistance'}
              jobDescription={
                'Education Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vel nobis doloribus eum natus maxime quaerat porro dignissimos, quo blanditiis minus sit beatae harum fugiat eaque laborum ducimus explicabo nesciunt?'
              }
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>SKills</h2>
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="Bootstrap" progress={70} />
            <Skills skill="Javascript" progress={100} />
            <Skills skill="Nodejs" progress={100} />
            <Skills skill="MongoDB" progress={100} />
            <Skills skill="Express" progress={100} />
            <Skills skill="React" progress={50} />
            <Skills skill="PostgreSQL" progress={90} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
