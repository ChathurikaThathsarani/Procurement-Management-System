import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api_base_url, autheader } from "./utils";

//login function
const login = async (nic, password) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      api_base_url + "login",
      { nic, password },
      config
    );
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

//register function
const register = async (
  name,
  dob,
  nic,
  gender,
  telephone,
  address,
  email,
  password,
  experience
) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    let siteManagerId = Math.floor(Math.random() * 10000 + 1000);
    let pic =
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

    const { data } = await axios.post(
      api_base_url + "register",
      {
        siteManagerId,
        name,
        dob,
        nic,
        gender,
        telephone,
        address,
        email,
        password,
        pic,
        experience,
      },
      config
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};

//auth function
const authenticationservice = {
  login,
  register,
};

export default authenticationservice;
