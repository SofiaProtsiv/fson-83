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
} from "./registerScreen.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../redux/auth";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/auth/slice";

const INITIAL_STATE = {
  email: "",
  name: "",
  password: "",
  avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
};

export default function RegisterScreen() {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.name && formData.password) {
      const response = await register(formData);

      if (response) {
        const { data } = await login({
          email: formData.email,
          password: formData.password,
        });

        dispatch(setToken(data.access_token));
        navigate("/");
      }
    }

    reset();
  };

  const reset = () => {
    setFormData(INITIAL_STATE);
  };

  return (
    <Wrapper>
      <Content>
        <FormTitle>Sign up</FormTitle>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">First Name</Label>
            <Input
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

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

          <SubmitButton type="submit">Sign up</SubmitButton>
        </Form>

        <ChangeFormText>
          Already have an account?
          <ChangeFormLink>
            <NavLink to="/login">Sign in</NavLink>
          </ChangeFormLink>
        </ChangeFormText>
      </Content>
    </Wrapper>
  );
}
