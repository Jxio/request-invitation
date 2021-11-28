import React, { Component } from 'react';
import { Button, Container, Dimmer, Divider, Form, Header, Input} from 'semantic-ui-react';
import validator from 'validator';

class SignPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmEmail: '',
      emailError: false,
      confirmEmailError: false,
    }
  }

  closeDimmer = () => {
    this.props.onClose();
  }

  validateEmail = (e) => {
    var email = e.target.value
    if(email.length > 0) {
      if (validator.isEmail(email)) {
        this.setState({emailError: false});

      } else {
        this.setState({emailError: true});
      }
    } else {
      this.setState({emailError: false});
    }
  }

  confirmEmail = (e) => {
    var email = e.target.value
    if(email.length > 0) {
      //一个字符一个字符的对比
    } else {
      this.setState({confirmEmailError: false});
    }
  }

  render() {
    const {overlayActive} = this.props;
    const {emailError, confirmEmailError} = this.state;

    return (
      <Dimmer active={overlayActive} id='page-overlay' page>
        <Button icon="close" className="close-layout" size="huge" onClick={this.closeDimmer}/>
        <Container id="sign-panel" text>
          <Container textAlign='center'>
            <Header as='h4'>Request an invite</Header>
            <Divider />
          </Container>

          <Form>
            <Form.Field
              control={Input}
              placeholder='Full name'
              minLength="3"
              required
            />
            <Form.Field
              control={Input}
              placeholder='Email'
              onChange={this.validateEmail}
              error={emailError && {
                content: 'Please enter a valid email address!',
                pointing: 'above',
              }}
              required
            />
            <Form.Field
              control={Input}
              placeholder='Confirm Email'
              onChange={this.confirmEmail}
              error={confirmEmailError && {
                content: 'Your two email address do not match!',
                pointing: 'above',
              }}
              required
            />
            <Form.Field>
              <Button type='submit'>Send</Button>
            </Form.Field>
          </Form>

        </Container>
      </Dimmer>

   );
  }
}

export default SignPanel;