import "./style.js";
import { ModalContainer, ModalView, ModalHeader, ModalMain } from "./style.js";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { TechContext, TechProvider } from "../../providers/TechContext.jsx";

import { ErrorMessage } from "../../pages/Register/style.js";
import { useState } from "react";
import { api } from "../../services/api.js";

const schema = yup
  .object({
    title: yup.string().required("Preencha o campo do nome"),
  })
  .required();

const formState = {
  errors: () => {},
};

export const Modal = ({ setModal, modal }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { registerTech } = useContext(TechContext);

  const submit = (data) => {
    registerTech(data);
    reset();
  };

  return (
    <ModalContainer>
      <ModalView>
        <ModalHeader>
          <span>Cadastrar Tecnologia</span>
          <button onClick={() => setModal(!modal) || window.location.reload()}>
            X
          </button>
        </ModalHeader>

        <ModalMain onSubmit={handleSubmit(submit)}>
          <span>Nome</span>
          <input type="text" {...register("title")} />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>

          <span>Selecionar status</span>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </ModalMain>
      </ModalView>
    </ModalContainer>
  );
};
