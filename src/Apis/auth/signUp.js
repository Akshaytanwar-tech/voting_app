import config from "../../config";
import HTTPS_REQ from "../helper/constant";
import apiHandler from "../helper/httphandler";
const signUp = async (params) => {
  const api = `${config.Url}/user/signup`;
  const res = await apiHandler(HTTPS_REQ.POST,config.json, api, params);
  return res;
};
export default signUp;
