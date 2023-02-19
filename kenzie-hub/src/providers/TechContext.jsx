import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  const registerTech = async (data) => {
    try {
      const response = await api.post("/users/techs", data);
      toast.success("Tecnologia registrada com sucesso!");
      setTechs(response.data);
    } catch (error) {
      console.log(error);
      toast.warning(error.response.data.message);
    }
  };

  const updateTech = async (id, data) => {
    try {
      await api.put(`users/techs/${id}`, data);
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.warning(error.response.data.message);
    }
  };

  const deleteTech = async (data) => {
    try {
      await api.delete(`/users/techs/${data}`);
      toast.success("Tecnologia excluida com sucesso!");
    } catch (error) {
      console.log(error);
      toast.warning(error.response.data.message);
    }
  };

  return (
    <TechContext.Provider
      value={{ registerTech, deleteTech, updateTech, setTechs, techs }}
    >
      {children}
    </TechContext.Provider>
  );
};
