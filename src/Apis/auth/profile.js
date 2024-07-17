import apiHandler from "../helper/httphandler";
import HTTPS_REQ from "../helper/constant";
import config from "../../config";

const profile = async () => {
  const url = `${config.Url}/user/profile`;
  const res = await apiHandler(HTTPS_REQ.GET,config.json, url);
  return res;
};

export default profile;
