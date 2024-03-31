import axios from "axios";

const API_KEY = "dPfkwePTg90BKaC40hFOELB-2Oit3ECKcljGBZGtwtM";

export const getImages = async (query, page) => {
  const options = {
    params: {
      query: query,
      page: page,
      per_page: 30,
    },
  };

  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`,
    options
  );
  return response;
};
