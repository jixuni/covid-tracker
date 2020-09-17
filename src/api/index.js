import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export default axios.create({
  baseURL: url,
});
