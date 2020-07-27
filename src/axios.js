import axios from "axios";

// Future me: Don't do this in production. Instead create a small backend to manage the credentials.
export let apiCredentials = {
  grant_type: "password",
  client_id: 2,
  client_secret: "266BQf2VKse2ij5v92hyxyoi6wDMoBtNkp2t1Rrb",
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
