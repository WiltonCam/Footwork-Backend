const db = require("../db/dbConfig.js");

const getAllFootware = async () => {
    try {
        const allFootware = await db.any("SELECT * FROM footware");
        return allFootware;
    } catch(error) {
        return {error: error}
    }
};

const getOneFootware = async (id) => {
    try{
        const footware = await db.one(`SELECT * FROM footware WHERE id=${id}`);
        return footware;

    }catch (error) {
        return {error: error};
    }
};

module.exports = {
    getAllFootware,
    getOneFootware,
}