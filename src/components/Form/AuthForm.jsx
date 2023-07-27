import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Backdrop,
  ModalContent,
  Modal,
  CloseButton,
  Form,
  FormTitle,
  Label,
  Input,
  SubmitButton,
  ChangeFormText,
  ChangeFormLink,
} from "./authForm.styled";
import debounce from "lodash.debounce";

const INITIAL_STATE = {
  email: "",
  password: "",
  agree: false,
};

export default class AuthForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.handleAuthModal();
    }
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = [...e.currentTarget.elements].reduce(
  //     (formData, { name, value }) => {
  //       if (name) {
  //         formData[name] = value;
  //       }
  //       return formData;
  //     },
  //     {}
  //   );

  //   console.log(formData);
  // };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      ...INITIAL_STATE,
    });
  };

  handleInput = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: [inputValue],
    });
  };

  render() {
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <Modal>
          <CloseButton onClick={this.handleAuthModal}>
            <AiOutlineClose />
          </CloseButton>

          <ModalContent>
            <FormTitle>Sign in to your account</FormTitle>
            <Form onSubmit={this.handleSubmit}>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  value={this.state.email}
                  onChange={this.handleInput}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  required
                  value={this.state.password}
                  onChange={this.handleInput}
                />
              </div>

              <input
                name="agree"
                checked={this.state.agree}
                type="checkbox"
                onChange={this.handleInput}
              />
              <SubmitButton type="submit">Sign in</SubmitButton>
            </Form>

            <ChangeFormText>
              Not a member?
              <ChangeFormLink href="#">Sign up</ChangeFormLink>
            </ChangeFormText>
          </ModalContent>
        </Modal>
      </Backdrop>
    );
  }
}
