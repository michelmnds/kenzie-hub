import "./style.js";
import {
  ModalContainer,
  ModalView,
  ModalHeader,
  ModalMain,
  DeleteButton,
  SubmitButton,
} from "./style.js";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext.jsx";

import { ErrorMessage } from "../../pages/Register/style.js";

const schema = yup
  .object({
    title: yup.string().required("Preencha o campo do nome"),
  })
  .required();

const formState = {
  errors: () => {},
};

export const EditModal = ({ setEditModal, editModal, techId }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { deleteTech, updateTech } = useContext(TechContext);

  const update = (data) => {
    updateTech(techId, data);
    reset();
  };

  const remove = () => {
    deleteTech(techId);
    reset();
  };

  return (
    <ModalContainer>
      <ModalView>
        <ModalHeader>
          <span>Tecnologia Detalhes</span>
          <button onClick={() => setEditModal(!editModal)}>X</button>
        </ModalHeader>

        <ModalMain onSubmit={handleSubmit(update)}>
          <span>Nome do projeto</span>
          <input type="text" {...register("title")} />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>

          <span>Status</span>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <section>
            <SubmitButton type="submit">Salvar alterações</SubmitButton>
          </section>
        </ModalMain>

        <DeleteButton onClick={() => remove()}>Excluir</DeleteButton>
      </ModalView>
    </ModalContainer>
  );
};
