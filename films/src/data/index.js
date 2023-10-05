const axios = require("axios");

const url = "http://database:8004/Film"

module.exports = {
    list: async () => {
        const { data } = await axios.get(url);
        return data;
      },
      create: async (film) => {
        const { data } = await axios.post(url,film);
        return data;
      },
      get: async(id) =>{
        const { data } = await axios.get(`${url}/${id}`);
        return data;
      },
};