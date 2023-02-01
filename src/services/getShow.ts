import axios from "axios";
import { GetApiUrl } from "./getAPI";

export const getShow = async (showID: string) => {
  const apiUrl = GetApiUrl(`tv/${showID}`, "");
  return axios.get(apiUrl).then((res) => res.data);
};
