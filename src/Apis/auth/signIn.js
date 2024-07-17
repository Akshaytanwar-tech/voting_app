import apiHandler from "../helper/httphandler";
import HTTPS_REQ from "../helper/constant";
import config from "../../config";
const signIn = async (params) => {
  const api = `${config.Url}/user/login`;
  const res = await apiHandler(HTTPS_REQ.POST, config.json, api, params);
  return res;
};

export default signIn;
