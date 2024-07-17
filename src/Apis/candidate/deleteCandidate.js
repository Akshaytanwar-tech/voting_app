import apiHandler from "../helper/httphandler";
import HTTPS_REQ from "../helper/constant";
import config from "../../config";

const deleteCandidate = async (id) => {
  const url = `${config.Url}/candidate/${id}`;
  const res = await apiHandler(HTTPS_REQ.DELETE, config.urlencoded, url);
  return res;
};

export default deleteCandidate;
