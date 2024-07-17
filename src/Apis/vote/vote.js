import HTTPS_REQ from "../helper/constant";
import config from "../../config";
import apiHandler from "../helper/httphandler";

const vote = async (id) => {
  const url = `${config.Url}/candidate/vote/${id}`;
  const res = await apiHandler(HTTPS_REQ.PUT, config.urlencoded, url);
  return res;
};

export default vote;
