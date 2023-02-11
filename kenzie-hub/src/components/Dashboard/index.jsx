import "./style.js";
import {
  DashboardGlobalContainer,
  UserName,
  UserModule,
  UserInfos,
} from "./style.js";

import { api } from "../../services/api.js";

import { Line } from "../HeaderDashboard/style.js";
import { HeaderDashboard } from "../HeaderDashboard/index.jsx";
import { useEffect, useState } from "react";

const getToken = () => {
  const token = window.localStorage.getItem("@TOKEN");
  return token;
};

export const token = getToken();

export const Dashboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await api.get("/profile", token);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadUserData();
  }, []);

  return (
    <DashboardGlobalContainer>
      <HeaderDashboard></HeaderDashboard>

      <section>
        <UserInfos>
          <UserName>Olá, {user.name}</UserName>

          <UserModule>{user.course_module}</UserModule>
        </UserInfos>
      </section>
      <Line />
    </DashboardGlobalContainer>
  );
};
