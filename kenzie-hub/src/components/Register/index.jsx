import "./style.js";
import { api } from "../../services/api.js";
import { HeaderRegister } from "../HeaderRegister/index.jsx";
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

const schema = yup
  .object({
    name: yup.string().required("Preencha o campo do nome"),
    email: yup.string().required("Preencha o campo do email"),
    password: yup
      .string()
      .required("Preencha o campo da senha")
      .matches(/.{6,}/, "Sua senha deve conter no mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Preencha o campo de confirmar senha")
      .oneOf([yup.ref("password")], "Confirme sua senha"),
    bio: yup.string().required("Preencha o campo da bio"),
    contact: yup.string().required("Preencha o campo do contato"),
    course_module: yup.string().required("Preencha o campo do módulo"),
  })
  .required();

const formState = {
  errors: () => {},
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      await api.post("/users", data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterGlobalContainer>
      <HeaderRegister></HeaderRegister>

      <RegisterContainer onSubmit={handleSubmit(registerUser)}>
        <TextContainer>
          <p>Crie sua conta</p>

          <span>Rapido e grátis, vamos nessa</span>
        </TextContainer>

        <InputsContainer>
          <label htmlFor="name">Nome</label>
          <input
            {...register("name")}
            placeholder="Digite aqui seu nome"
            type="text"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            placeholder="Digite aqui seu email"
            type="email"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <label htmlFor="password">Senha</label>
          <input
            {...register("password")}
            placeholder="Digite aqui sua senha"
            type="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            {...register("confirmPassword")}
            placeholder="Confirme sua senha"
            type="password"
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <label htmlFor="bio">Bio</label>
          <input
            {...register("bio")}
            placeholder="Fale sobre você"
            type="text"
          />
          <ErrorMessage>{errors.bio?.message}</ErrorMessage>

          <label htmlFor="contact">Contato</label>
          <input
            {...register("contact")}
            placeholder="Opção de contato"
            type="text"
          />
          <ErrorMessage>{errors.contact?.message}</ErrorMessage>

          <label htmlFor="module">Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <ErrorMessage>{errors.course_module?.message}</ErrorMessage>
        </InputsContainer>

        <ButtonRegister type="submit">Cadastrar</ButtonRegister>
      </RegisterContainer>
    </RegisterGlobalContainer>
  );
};
