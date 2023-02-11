import "./style.js";
import logo from "../../assets/img/Logo.png";
import { Div } from "./style.js";

export const Header = () => {
  return (
    <Div>
      <img src={logo} alt="Logo" />
    </Div>
  );
};
