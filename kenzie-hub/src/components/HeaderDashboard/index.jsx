import "./style.js";
import logo from "../../assets/img/Logo.png";
import { Div, ButtonHeader, Line } from "./style.js";
import { Link, useNavigate } from "react-router-dom";

export const HeaderDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Div>
        <img src={logo} alt="Logo" />

        <Link to="/">
          <ButtonHeader onClick={logout}>Sair</ButtonHeader>
        </Link>
      </Div>
      <Line />
    </>
  );
};
