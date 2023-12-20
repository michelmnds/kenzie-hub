import "./style.js";
import { api } from "../../services/api.js";
import { HeaderRegister } from "../../components/HeaderRegister/index.jsx";
import {
  RegisterGlobalContainer,
  RegisterContainer,
  TextContainer,
  InputsContainer,
  ButtonRegister,
  ErrorMessage,
} from "./style.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";

const schema = yup
  .object({
    name: yup.string().required("Fill the name field"),
    email: yup.string().required("Fill the email field"),
    password: yup
      .string()
      .required("Fill the password field")
      .matches(/.{6,}/, "Password must have at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Fill the confirm password field")
      .oneOf([yup.ref("password")], "Confirm your password"),
    bio: yup.string().required("Fill the bio field"),
    contact: yup.string().required("Fill the contact field"),
    course_module: yup.string().required("Fill the module field"),
  })
  .required();

const formState = {
  errors: () => {},
};

export const Register = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { registerUser } = useContext(UserContext);

  const submit = (data) => {
    registerUser(data);
    reset();
  };

  return (
    <RegisterGlobalContainer>
      <HeaderRegister></HeaderRegister>

      <RegisterContainer onSubmit={handleSubmit(submit)}>
        <TextContainer>
          <p>Create Account</p>

          <span>Quick and free, let's go</span>
        </TextContainer>

        <InputsContainer>
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            placeholder="Write down your name"
            type="text"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            placeholder="Write down your email"
            type="email"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            placeholder="Write down your password"
            type="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            placeholder="Confirm your password"
            type="password"
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <label htmlFor="bio">Bio</label>
          <input
            {...register("bio")}
            placeholder="Talk about you"
            type="text"
          />
          <ErrorMessage>{errors.bio?.message}</ErrorMessage>

          <label htmlFor="contact">Contact</label>
          <input
            {...register("contact")}
            placeholder="Contat option"
            type="text"
          />
          <ErrorMessage>{errors.contact?.message}</ErrorMessage>

          <label htmlFor="module">Select module</label>
          <select {...register("course_module")}>
            <option value="First module (Frontend Introduction)">
              First module (Frontend Introduction)
            </option>
            <option value="Second module (Advanced Frontend)">
              Second module (Advanced Frontend)
            </option>
            <option value="Third module (Backend Introduction)">
              Third module (Backend Introduction)
            </option>
            <option value="Fourth module (Advanced Backend)">
              Fourth module (Advanced Backend)
            </option>
          </select>
          <ErrorMessage>{errors.course_module?.message}</ErrorMessage>
        </InputsContainer>

        <ButtonRegister type="submit">Cadastrar</ButtonRegister>
      </RegisterContainer>
    </RegisterGlobalContainer>
  );
};
