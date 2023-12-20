import "./style.js";
import logo from "../../assets/img/Logo.png";
import { Div, ButtonHeader, Line } from "./style.js";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext.jsx";
import { useContext } from "react";

export const HeaderDashboard = () => {
  const { logout } = useContext(UserContext);

  return (
    <>
      <Div>
        <img src={logo} alt="Logo" />

        <Link to="/">
          <ButtonHeader onClick={logout}>Logout</ButtonHeader>
        </Link>
      </Div>
      <Line />
    </>
  );
};
