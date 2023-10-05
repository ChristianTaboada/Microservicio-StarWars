const axios = require("axios")

const url = "http://database:8004/Character";

module.exports = {
    list: async () => {
        const { data } = await axios.get(url)
        return data;
    },

    create: async (character) => {
        const { data } = await axios.post(url, character);
        return data;
    },

    get: async (id) => {
        const { data } = await axios.get(`${url}/${id}`);
        return data
    },
};