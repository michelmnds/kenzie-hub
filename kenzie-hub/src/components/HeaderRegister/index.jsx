import "./style.js";
import logo from "../../assets/img/Logo.png";
import { Div, ButtonHeader } from "./style.js";
import { Link } from "react-router-dom";

export const HeaderRegister = () => {
  return (
    <Div>
      <img src={logo} alt="Logo" />

      <Link to="/">
        <ButtonHeader>Back</ButtonHeader>
      </Link>
    </Div>
  );
};
