import axios from "axios";

const api = axios.create({
  baseURL: "hrrps://www.theocktaildb.com/api/json/vi/1",
});

export default api;
