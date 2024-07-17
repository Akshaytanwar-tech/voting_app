import apiHandler from "../helper/httphandler";
import HTTPS_REQ from "../helper/constant";
import config from "../../config";

const fetchCandidate = async () => {
  const url = `${config.Url}/candidate`;
  const res = await apiHandler(HTTPS_REQ.GET, config.urlencoded, url);
  return res;
};
export default fetchCandidate;
