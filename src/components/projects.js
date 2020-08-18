import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div>
          <h2>Rick Tac Toe </h2>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(ricktactoe4.png) center / cover'}} ></CardTitle>
            <CardText>
              My first project as a member of General Assembly's 12 week software engineering immersive. Made a Rick and Morty themee tic tac toe game. Choose from 5 popular characters each with their own avatar, on turn audio clips as well as victory/defeat audio soundbytes. Used HTML, CSS, JavaScript and jQuery.
            </CardText>
            <CardActions border>
              <Button colored><a style={{textDecoration: "none"}} href="https://github.com/jmacmi11an/project0" target="_blank">GitHub</a></Button>
              <Button colored><a style={{textDecoration: "none"}} href="https://jmacmi11an.github.io/project0/" target="_blank">Go to Site</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
        <h2>Furever</h2>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(furever2.png) center / cover'}} ></CardTitle>
            <CardText>
              A pet adoption website created to solve the pain point of having myriad requirements for adopting pets depending on the shelter. Using this site users can fill in the most commonly requested information about themselves including photos of their backyard, which they can share with animal shelters. Users can also create and save favorite animal lists.
            </CardText>
            <CardActions border>
              <Button colored><a style={{textDecoration: "none"}} href="https://github.com/jmacmi11an/project1" target="_blank">GitHub</a></Button>
              <Button colored><a style={{textDecoration: "none"}} href="https://furever-friend.herokuapp.com/" target="_blank">Go to Site</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          <h2>Sartorial</h2>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(sartorial.png) center / cover'}} ></CardTitle>
            <CardText>
              Sartorial is a men's fashion website that believes elegant and timeless men's fashion can be achieved with a minimalist capsule style wardrobe. Users select from the 16 foundational clothing items they own and then can generate different outfit suggestions.
            </CardText>
            <CardActions border>
              <Button colored><a style={{textDecoration: "none"}} href="https://github.com/jmacmi11an/Sartorial" target="_blank">GitHub</a></Button>
              <Button colored><a style={{textDecoration: "none"}} href="https://sartorial-5c2a4.web.app/" target="_blank">Go to Site</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
          <h2>Lattice</h2>
          <div>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(lattice.png) center / cover'}} ></CardTitle>
              <CardText>
                Lattice was a pair programmed Trello clone using a React front end and Rails backend. Users can create Projects with individual Cards which have individual Tasks. An organizational project management tool.
              </CardText>
              <CardActions border>
              <Button colored><a style={{textDecoration: "none"}} href="https://github.com/jmacmi11an/lattice-client" target="_blank">GitHub</a></Button>
              <Button colored><a style={{textDecoration: "none"}} href="https://lattice-client.netlify.app/" target="_blank">Go to Site</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>RickTacToe</Tab>
          <Tab>Furever</Tab>
          <Tab>Sartorial</Tab>
          <Tab>Lattice</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
