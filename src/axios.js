import axios from "axios";

export let apiCredentials = {
  grant_type: "password",
  client_id: 4,
  client_secret: "HhorKAj21iNiTq9zEaFrkLGkCpfrMhhp0MiocBS4",
};

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    post: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  },
});

export default http;
