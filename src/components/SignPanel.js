import React, { Component } from 'react';
import { Button, Container, Dimmer, Divider, Form, Header, Icon, Segment } from 'semantic-ui-react'

class SignPanel extends Component {
  render() {
    return (
      <Dimmer id='page-overlay' page>
        <Container id="sign-panel" text>

          <Container textAlign='center'>
            <Header as='h4'>Request an invite</Header>
            <Divider />
          </Container>

          <Form>
            <Form.Field>
              <input placeholder='Full Name' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Confirm Email' />
            </Form.Field>
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