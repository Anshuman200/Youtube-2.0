import axios from "axios";
const BASE_URL = `https://youtube-v31.p.rapidapi.com`;

// const axios = require("axios");

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'b0d5774836msh54d47d7e9d9a497p1a7f48jsn88c8fa7610ab',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });