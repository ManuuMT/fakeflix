import axios from "axios";
import { GetApiUrl } from "./getAPI";

export const getGenre = async (genreID: string) => {
  const parameter = `with_genres=${genreID}&with_original_language=en`;
  const apiUrl = GetApiUrl("discover/tv", parameter);
  return axios.get(apiUrl).then((res) => res.data.results);
};

type DictionaryRawValue = number | string;
export type Dictionary<A extends DictionaryRawValue, B> = {
  [rawValue in A]: B;
};

export enum GENRES {
  Action = "Action",
  Animation = "Animation",
  Comedy = "Comedy",
  Crime = "Crime",
  Documentary = "Documentary",
  Drama = "Drama",
  Family = "Family",
  Kids = "Kids",
  Mistery = "Mistery",
  News = "News",
  Reality = "Reality",
  Fantasy = "Fantasy",
  Soap = "Soap",
  Talk = "Talk",
  WarPolitics = "WarPolitics",
  Western = "Western",
}

interface Genre {
  title: string;
  id: string;
}

export const GenreDictionary: Dictionary<string, Genre> = {
  [GENRES.Action]: { title: "Action & Adventure", id: "10759" },
  [GENRES.Animation]: { title: "Animated", id: "16" },
  [GENRES.Comedy]: { title: "TV Comedies", id: "35" },
  [GENRES.Crime]: { title: "Crime TV Shows", id: "80" },
  [GENRES.Documentary]: { title: "Documentals", id: "99" },
  [GENRES.Drama]: { title: "Dramas", id: "18" },
  [GENRES.Family]: { title: "Family friendly", id: "10751" },
  [GENRES.Kids]: { title: "Kids", id: "10762" },
  [GENRES.Mistery]: { title: "Mistery TV Shows", id: "9648" },
  [GENRES.News]: { title: "News", id: "10763" },
  [GENRES.Reality]: { title: "Reality shows", id: "10764" },
  [GENRES.Fantasy]: { title: "TV Sci-Fi & Fantasy", id: "10765" },
  [GENRES.Soap]: { title: "Soap Opera", id: "10766" },
  [GENRES.Talk]: { title: "Talk", id: "10767" },
  [GENRES.WarPolitics]: { title: "War & Politics", id: "10768" },
  [GENRES.Western]: { title: "Western", id: "37" },
};
