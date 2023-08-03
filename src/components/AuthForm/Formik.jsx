import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Backdrop,
  ModalContent,
  Modal,
  CloseButton,
  FormTitle,
  Label,
  SubmitButton,
  ChangeFormText,
  ChangeFormLink,
} from "./authForm.styled";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(8, "Too Long!")
    .required("Required"),
});

export default function AuthForm({ handleAuthModal }) {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      handleAuthModal();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <CloseButton onClick={handleAuthModal}>
          <AiOutlineClose />
        </CloseButton>

        <ModalContent>
          <FormTitle>Sign in to your account</FormTitle>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm({ values: { email: "", password: "" } });
            }}
          >
            {({ errors }) => (
              <Form>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Field name="email" type="email" autoComplete="email" />
                  {errors.email ? <p>{errors.email}</p> : null}
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Field name="password" type="password" />
                  {errors.password ? <p>{errors.password}</p> : null}
                </div>
                <SubmitButton type="submit">Sign in</SubmitButton>
              </Form>
            )}
          </Formik>

          <ChangeFormText>
            Not a member?
            <ChangeFormLink href="#">Sign up</ChangeFormLink>
          </ChangeFormText>
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}
