import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBIcon } from 'mdbreact';
import "./Projectcard.css"
import photo from '../../../../img/ellieproject-card.png';
import styled from 'styled-components';


const Styles = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;
  }
  .projectdiv {
    padding: 5px;
    height: 100%;
    padding-bottom: 40px;
    background-image:
      radial-gradient(#eee 20%, transparent 20%),
      radial-gradient(#eee 20%, transparent 20%);
    background-color: #fff;

    background-size: 10px 10px;

  }
  .projectdiv img {
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    display: block;
  }

  /* text styles */
  .projectHeader {
    color: gray;
    text-align: right;
    border-bottom: solid 1px gray;
    padding: 10px;
    margin-bottom: 40px;
    padding-top: 50px;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
    color: rgb(206, 132, 96);
    text-transform: uppercase;
    font-size: 1.1em;
    letter-spacing: 1.5px;
    margin-top: 70px;
  }
  h3 {
    font-size: .85em;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  h3 span {
    color: rgb(206, 132, 96);
    font-size: 1.5em;
    letter-spacing: 4px;
  }
  span {
    font-family: 'Helvetica', serif;
    color: gray;
    background-color: #fff;
    font-size: .9em;
    border: solid 3px white;
  }
  p {
    font-family: 'Helvetica', serif;
    letter-spacing: 1px;
    font-size: 13px;
    line-height: 25px;
  }

  /* button styles */
  .btnWrapper {
    text-align: center;
  }
  button {
    display: inline;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    background-color: #fff;
    color: gray;
    margin-right: 20px;
    padding: 10px 10px 0px 0px;
    border: none;
    border-bottom: solid gray 2px;
    width: 140px;
    height: 50px;
    text-align: left;
    &:hover {
      opacity: .6;
      transition: .5s;
      content: f101; 534530833
    }
  }

  .viewMore {
    text-align: right;
    margin-top: 150px;
    margin-bottom: 50px;
  }
  .viewMore button {
    width: 40%;
    padding-left: 10px;
    border-bottom: 1px solid pink;
  }

  @media only screen and (max-width: 600px) {
    .wrapper {
      width: 80%;
      padding: 5px;
    }
  }
  @media only screen and (min-width: 600px) {
    h2 {
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      height: 100%;
    }
    .projectdiv {
      max-width: 500px;
      margin: 0 auto;
      padding: 5px;
      height: 100%;
      padding-bottom: 40px;
    }
    .projectdiv img {
      width: 100%;
      margin: 0 auto;
      padding: 20px 0;
      display: block;
    }
    .btnWrapper {
      text-align: left;
    }
    button {
      margin-right: 40px;
    }
  }
  @media only screen and (min-width: 900px) {
    .wrapper {
      margin: 0 auto;
      padding-right: 70px;
    }
  }
  @media only screen and (min-width: 1060px) {
    .wrapper {
      max-width: 750px;
    }
    .projectdiv {
      max-width: 750px;
    }
  }
`;

class Projectcard extends React.Component {
  constructor(prop) {
    super(prop)
    this.state ={

      projects: [
        {
          title: 'Ellie Beauty House',
          date: '2018 - 2019' ,
          description: 'Ellie Beauty House is a permanent makeup and lash studio located in Seattle, WA. This  is  a mobile resposnsive business site, featuring 5 static web pages highlighting company\'s work for potential clients.  ',
          image: require("../../../../img/ellieproject-card.png"),
          tools: "Bootstrap4 | JavaScript | Inskscape | Photoshop",
          task: "adapting design to fit well on mobile and desktop",


        },
        {
          title: 'Cindy Portfolio',
          date: 2020 ,
          description: 'My official web developer  portfolio. Originally consisted of  jQuery and Javascript, the site  had a whole facelift using  React.js The goal was to create a simple, clean and easy to navigate UI using React components.  ',
          image: require("../../../../img/prolificE-card.png"),
          tools: "React.js | React Router | Styled Components",
          task: "Generated scalable components for small and large screens. Implemented different navigation layouts to optimize easy to use UI. Incorperated React Router for navigation links. Designed images using Procreate and Photoshop. ",
        },
        {
          title: 'Prolific Elegance',
          date: 2019 ,
          description: 'A fresh beauty startup focused on spa services, lash extentions and customed wigs.',
          image: require("../../../../img/prolificE-card.png"),
          tools: "AOS - Animate On Scroll library using CSS3 | Bootstrap4 | Inkscape for logo design",
          task: "Generated scalable components for small and large screens. Implemented different navigation layouts to optimize easy to use UI. Incorperated React Router for navigation links. Designed images using Procreate and Photoshop. ",
        },

      ]
    }
  }
  render() {
    return (
      <Styles>

        <div className="wrapper">
          <h2 className="projectHeader">projects</h2>
          {this.state.projects.map((item, project) =>{
            return (
              <div key={project} className="projectdiv">
                <h2>{item.title}</h2>
                <span>{item.date}</span>
                <img src={item.image} />
                <h3><span>//</span>summary</h3>
                <p>{item.description}</p>
                <h3><span>//</span>tools</h3>
                <p>{item.tools}</p>
                <h3><span>//</span>task</h3>
                <p>{item.task}</p>
                <div className="btnWrapper">
                  <button
                    type="button"
                    onClick={this.changeColor}>
                    view project
                  </button>
                  <button
                    type="button"
                    onClick={this.changeColor}>
                    source code
                  </button>
                </div>
              </div>
            )
          })}
          <div className="viewMore">
            <button
              type="button"
              onClick={this.changeColor}>
              view more projects <MDBIcon icon="angle-double-right" />
            </button>
          </div>
        </div>

    </Styles>
    )
  }
}

export default Projectcard;
