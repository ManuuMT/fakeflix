import axios from "axios";
import { GetApiUrl } from "./getAPI";

export const getGenre = async (genreID: string) => {
  const parameter = `with_genres=${genreID}&with_original_language=en`;
  const apiUrl = GetApiUrl("discover/tv", parameter);
  return axios.get(apiUrl).then((res) => res.data.results);
};

export const GENRES = {
  Action: {
    id: "10759",
  },

  Animation: {
    id: "16",
  },

  Comedy: {
    id: "35",
  },

  Crime: {
    id: "80",
  },

  Documentary: {
    id: "99",
  },

  Drama: {
    id: "18",
  },

  Family: {
    id: "10751",
  },

  Kids: {
    id: "10762",
  },

  Mystery: {
    id: "9648",
  },

  News: {
    id: "10763",
  },

  Reality: {
    id: "10764",
  },

  Fantasy: {
    id: "10765",
  },

  Soap: {
    id: "10766",
  },

  Talk: {
    id: "10767",
  },

  WarPolitics: {
    id: "10768",
  },

  Western: {
    id: "37",
  },
};
