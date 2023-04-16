import React, { useState } from "react";

import { createRoot } from "react-dom/client";

import { Field, Label, Input } from "@zendeskgarden/react-forms";
import { Row, Col } from "@zendeskgarden/react-grid";
import "./styles.css";
import { Button } from "@zendeskgarden/react-buttons";
import styled from "styled-components";
import { Well, Title } from "@zendeskgarden/react-notifications";
import CallToActionHeader from "./callToAction.js";
//import { MD } from '@zendeskgarden/react-typography';
//import { Grid, Row, Col } from '@zendeskgarden/react-grid';

// This one has an implicit return

let StyledRow = styled(Row)`
  width: 10;
`;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
  };

  return (
    <div className="box">
      <form className="jsx-form" onSubmit={handleSubmit}>
        <Row justifyContent="center" sm={5}>
          <Col sm={5}>
            <Field className="form-field" id="name-field">
              <Label>Name </Label>
              <Input
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </Field>
          </Col>
        </Row>
        <Row justifyContent="center" sm={5}>
          <Col sm={5}>
            <Field className="form-field">
              <Label>Email</Label>
              <Input
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </Field>
          </Col>
        </Row>

        <Row justifyContent="center" sm={5}>
          <Col sm={5}>
            <Field className="form-field">
              <Label>Phone</Label>
              <Input
                label="Phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
              />
            </Field>
          </Col>
        </Row>
        <StyledRow justifyContent="center">
          <div className="button-container">
            <Button
              className="submit-form"
              id="submit-button"
              type="submit"
              isStretched
            >
              Submit
            </Button>
          </div>
        </StyledRow>
      </form>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Well>
        <Title>Call Back Request</Title>
        <div className="main-content">
          <CallToActionHeader text="🤗 Stuck? Don't Worry! Request a Callback from Our Caring Customer Service Heroes" />
          <CallToActionHeader text="Just Fill Out This Easy Form and We'll Call You Back in a Flash! ⚡️" />
          <div className="Form">
            <ContactForm />
          </div>
        </div>
      </Well>
    </div>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
