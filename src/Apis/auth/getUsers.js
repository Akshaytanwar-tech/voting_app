import apiHandler from "../helper/httphandler";
import HTTPS_REQ from "../helper/constant";
import config from "../../config";
const getUsers = async () => {
  try {
    const url = `${config.Url}/user/getusers`;
    const res = await apiHandler(HTTPS_REQ.GET, config.urlencoded, url);
    return res;
  } catch (error) {
    console.log(errors);
  }
};
export default getUsers;
