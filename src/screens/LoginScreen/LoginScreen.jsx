import React, { useState } from "react";
import {
  Wrapper,
  Content,
  Form,
  FormTitle,
  Label,
  Input,
  SubmitButton,
  ChangeFormText,
  ChangeFormLink,
} from "./loginScreen.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/auth";
import { setToken } from "../../redux/auth/slice";
import { useDispatch } from "react-redux";

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await login(formData);

    if (data) {
      dispatch(setToken(data.access_token));
      navigate("/");
    }

    reset();
  };

  const reset = () => {
    setFormData({ email: "", password: "" });
  };

  return (
    <Wrapper>
      <Content>
        <FormTitle>Sign in to your account</FormTitle>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <SubmitButton type="submit">Sign in</SubmitButton>
        </Form>

        <ChangeFormText>
          Not a member?
          <ChangeFormLink>
            <NavLink to="/register">Sign up</NavLink>
          </ChangeFormLink>
        </ChangeFormText>
      </Content>
    </Wrapper>
  );
}
