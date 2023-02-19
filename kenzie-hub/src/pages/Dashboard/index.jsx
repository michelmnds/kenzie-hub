import "./style.js";
import {
  DashboardGlobalContainer,
  UserName,
  UserModule,
  UserInfos,
  TecInfo,
  TecTitle,
  TecPlus,
  Techs,
  SingleTech,
  TechStatus,
  TechTitle,
} from "./style.js";

import { api } from "../../services/api.js";

import { Line } from "../../components/HeaderDashboard/style.js";
import { HeaderDashboard } from "../../components/HeaderDashboard/index.jsx";
import { useContext, useEffect, useState } from "react";
import { Modal } from "../../components/Modal/index.jsx";
import { EditModal } from "../../components/EditModal/index.jsx";
import { TechContext } from "../../providers/TechContext.jsx";

const getToken = () => {
  const token = window.localStorage.getItem("@TOKEN");
  return token;
};

export const token = getToken();

export const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [techId, setTechId] = useState(undefined);

  const { techs, setTechs } = useContext(TechContext);
  console.log("🚀 ~ file: index.jsx:39 ~ Dashboard ~ techs", techs);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await api.get("/profile", token);
        setUser(response.data);
        setTechs(response.data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    loadUserData();
  }, []);

  return (
    <DashboardGlobalContainer>
      {modal && <Modal setModal={setModal} modal={modal} />}
      <HeaderDashboard></HeaderDashboard>

      <section>
        <UserInfos>
          <UserName>Olá, {user.name}</UserName>

          <UserModule>{user.course_module}</UserModule>
        </UserInfos>
      </section>
      <Line />

      <main>
        <TecInfo>
          <TecTitle>Tecnologias</TecTitle>

          <TecPlus onClick={() => setModal(!modal)}>+</TecPlus>
        </TecInfo>

        {editModal && (
          <EditModal
            techId={techId}
            setEditModal={setEditModal}
            editModal={editModal}
          />
        )}
        <Techs>
          {techs.map((tech) => {
            {
              return (
                <SingleTech
                  onClick={() => setEditModal(!editModal) || setTechId(tech.id)}
                  key={tech.id}
                >
                  <TechTitle>{tech.title}</TechTitle>
                  <TechStatus>{tech.status}</TechStatus>
                </SingleTech>
              );
            }
          })}
        </Techs>
      </main>
    </DashboardGlobalContainer>
  );
};
