import axios from "axios";

export const baseUrl = "base_url";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      //keys
    },
  });
  return data;
};
