import "./style.js";

import { Header } from "../Header/index.jsx";
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
import { api } from "../../services/api.js";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      console.log(response.data);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginGlobalContainer>
      <Header></Header>

      <LoginContainer onSubmit={handleSubmit(loginUser)}>
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
