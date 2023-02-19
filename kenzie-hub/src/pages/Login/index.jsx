import "./style.js";

import { Header } from "../../components/Header/index.jsx";
import { ButtonRegisterLogin, LoginGlobalContainer } from "./style.js";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../Register/style.js";

import {
  LoginButton,
  LoginContainer,
  InputContainer,
  ButtonContainer,
} from "./style.js";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";

const schema = yup
  .object({
    email: yup.string().required("Preencha o campo do email"),
    password: yup.string().required("Preencha o campo da senha"),
  })
  .required();

const formState = {
  errors: () => {},
};

export const Login = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { loginUser } = useContext(UserContext);

  const submit = (data) => {
    loginUser(data);
    reset();
  };

  return (
    <LoginGlobalContainer>
      <Header></Header>

      <LoginContainer onSubmit={handleSubmit(submit)}>
        <p>Login</p>

        <InputContainer>
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email")} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <label htmlFor="password">Senha</label>
          <input type="password" {...register("password")} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <LoginButton type="submit">Entrar</LoginButton>
        </InputContainer>

        <ButtonContainer>
          <p>Ainda não possui uma conta?</p>

          <Link to="/register">
            <ButtonRegisterLogin>Cadastre-se</ButtonRegisterLogin>
          </Link>
        </ButtonContainer>
      </LoginContainer>
    </LoginGlobalContainer>
  );
};
