const { Schema } = require("mongoose");

const characterSchema = new Schema({
    _id: String,
    height: String,
    name: String,
    hair_color: String,
    mass: String,
    eye_color: String,
    skin_color: String,
    gender: String,
    birth_year: String,
    films: [{ type: String, ref: "Film"}],
    homeworld: { type: String, ref: "Planet"},
});

characterSchema.statics.list = async function () {
    return await this.find()
    .populate("homeworld",["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
    return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
    return await this.create(character);
};

module.exports = characterSchema;