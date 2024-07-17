import apiHandler from "../helper/httphandler";
import HTTPS_REQ from "../helper/constant";
import config from "../../config";

const changePassword = async (params) => {
  const api = `${config.Url}/user/profile/password`;
  const res = await apiHandler(HTTPS_REQ.PUT,config.json, api, params);
  console.log(res);
};

export default changePassword;
