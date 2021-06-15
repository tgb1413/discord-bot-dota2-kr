import axios from "axios";

const dotaAPI = axios.create();

dotaAPI.defaults.baseURL = "https://api.opendota.com/api";

export default dotaAPI;
