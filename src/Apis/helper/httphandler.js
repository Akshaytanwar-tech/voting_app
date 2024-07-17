import axios from "axios";
import config from "../../config";

const dataProcess = (data, content_type) => {
  if (content_type === "json") {
    return JSON.stringify(data);
  } else {
    return data;
  }
};

const apiHandler = async (req_method, content_type, url, payload) => {
  const res = await axios({
    method: req_method,
    url: url,
    headers: {
      "Content-Type": content_type,
      authorization: localStorage.getItem("token"),
    },
    [req_method === "get" ? " " : "data"]: dataProcess(payload, content_type),
  });

  return res.data;
};

export default apiHandler;
