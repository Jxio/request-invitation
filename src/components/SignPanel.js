import axios from 'axios';
import React, { Component } from 'react';
import { Button, Container, Dimmer, Divider, Form, Header, Input} from 'semantic-ui-react';
import validator from 'validator';

class SignPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      confirmEmail: '',
      emailError: false,
      confirmEmailError: false,
      loading: false,
      submitted: false,
      submitError: false,
      errorMessage: '',
    }
  }

  // Close the overlay
  closeDimmer = () => {
    this.props.onClose();
  }

  // Validate the email format
  validateEmail = (e) => {
    var email = e.target.value;
    this.setState({email: email});

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

  // Check whether two emails are same or not
  confirmEmail = (e) => {
    const { email } = this.state;
    var current_email = e.target.value;
    this.setState({confirmEmail: current_email});

    if(email.length > 0 && current_email.length > 0) {
      if(current_email.length > email) {
        this.setState({confirmEmailError: true});
      }
      for (var i = 0; i < current_email.length; i++) {
        if(current_email.charAt(i) !== email.charAt(i)){
          this.setState({confirmEmailError: true});
          break;
        }
        this.setState({confirmEmailError: false});
      }
    } else {
      this.setState({confirmEmailError: false});
    }
  }

  // Assign user name input to Full Name
  setName = (e) => {
    var name = e.target.value;
    this.setState({fullName: name});
  }

  // Send a post request to API through axios library to make ajax post call
  submit = () => {
    const { emailError, confirmEmailError, email, confirmEmail } = this.state;

    if(email !== confirmEmail) {
      this.setState({confirmEmailError: true});
    }

    if(!emailError && !confirmEmailError && (email === confirmEmail)) {
      this.setState({loading: true})
      const { fullName, email } = this.state;
      // Simple POST request with a JSON body using axios
      const request = { name: fullName, email: email };
      axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', request)
          .then(response => {
            this.setState({ loading: false, submitted: true, submitError: false, errorMessage: '' });
          }).catch(error => {
            this.setState({ loading: false, submitError: true, errorMessage: error.message});
          })
    }
  }

  render() {
    const {overlayActive} = this.props;
    const {emailError, confirmEmailError, loading, submitError, submitted, errorMessage} = this.state;

    const SignPanel = <Container id="sign-panel" text>
                        <Container textAlign='center'>
                          <Header as='h4'>Request an invite</Header>
                          <Divider />
                        </Container>

                        <Form onSubmit={this.submit}>
                          <Form.Field
                            control={Input}
                            placeholder='Full name'
                            minLength="3"
                            onChange={this.setName}
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
                            <Button type='submit' disabled={loading}>{loading ? "Sending, please wait..." : "Send"}</Button>
                            {submitError && <p>Error message from server here.</p>}
                          </Form.Field>
                        </Form>

                        {submitError &&
                          <Container textAlign='center'>
                            <p className='error-message'>Error message from server here:</p>
                            <p className='error-message'>{errorMessage}</p>
                          </Container>}
                      </Container>;

    const submittedPanel = <Container id="sign-panel" className="submitted-panel" text>
                            <Container textAlign='center'>
                              <Header as='h3'>All done!</Header>
                              <Divider />
                            </Container>

                            <Form>
                              <Form.Field>
                                <label>You will be one of the first to experience Broccoli & Co. when we launch.</label>
                              </Form.Field>
                              <Form.Field>
                                <Button onClick={this.closeDimmer}>OK</Button>
                              </Form.Field>
                            </Form>
                          </Container>

    return (
      <Dimmer active={overlayActive} id='page-overlay' page>
        <Button
          icon="close"
          className="close-layout"
          size="huge"
          disabled={loading}
          onClick={this.closeDimmer}/>
      {submitted && submittedPanel}
      {!submitted && SignPanel}
      </Dimmer>

   );
  }
}

export default SignPanel;