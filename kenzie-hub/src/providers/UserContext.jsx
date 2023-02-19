import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { token } from "../pages/Dashboard";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      await api.post("/users", data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      setUser(response.data);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const autoLogin = async () => {
      if (token) {
        const response = await api.get("/profile", token);
        setUser(response.data);
        navigate("/dashboard");
      } else {
        window.localStorage.clear();
        navigate("/");
      }
    };
    autoLogin();
  }, []);

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
