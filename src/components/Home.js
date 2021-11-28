import React, { Component } from 'react';
import { Button, Container, Divider, Header, Icon } from 'semantic-ui-react';
import SignPanel from './SignPanel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayActive: false,
    }
  }

  inviteToggle = () => {
    this.setState({overlayActive: !this.state.overlayActive});
  }

  render() {
    const { overlayActive } = this.state;
    return (
      <div>
        <Container fluid>
          <Header as='h3' id="page-title">BROCCOLI & CO.</Header>
          <Divider />

          <Container textAlign='center' id="page-content" text>
            <Header size='huge' className="page-content-text">A better way to enjoy every day.</Header>
            <p className="page-content-text">Be the first to know when we launch.</p>
            <Button basic color='black' size="massive" onClick={this.inviteToggle}>
              Request an invite
            </Button>
            {overlayActive &&
              <SignPanel
                overlayActive={overlayActive}
                onClose={this.inviteToggle}
              />}
          </Container>

          <Divider />
          <Container textAlign='center' id="page-footer">
            <p>Made with &nbsp;<Icon name='heart'/>&nbsp; in Melbourne.</p>
            <p>Website built by Jia Xu @ Nov, 2021. All rights reserved.</p>
          </Container>
        </Container>
      </div>
   );
  }
}

export default Home;