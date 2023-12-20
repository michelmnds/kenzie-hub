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
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });

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
          <UserName>Welcome, {user.name}</UserName>

          <UserModule>{user.course_module}</UserModule>
        </UserInfos>
      </section>
      <Line />

      <main>
        <TecInfo>
          <TecTitle>Technologies</TecTitle>

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
          {!techs.length ? (
            <h1 style={{ marginTop: 200, fontWeight: "bolder", fontSize: 24 }}>
              No technologies registered
            </h1>
          ) : (
            techs.map((tech) => {
              return (
                <SingleTech
                  onClick={() => setEditModal(!editModal) || setTechId(tech.id)}
                  key={tech.id}
                >
                  <TechTitle>{tech.title}</TechTitle>
                  <TechStatus>{tech.status}</TechStatus>
                </SingleTech>
              );
            })
          )}
        </Techs>
      </main>
    </DashboardGlobalContainer>
  );
};
