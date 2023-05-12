const db = require("../db/dbConfig.js");

const getAllFootware = async () => {
    try {
        const allFootware = await db.any("SELECT * FROM footwares");
        return allFootware;
    } catch(error) {
        return {error: error}
    }
};

const getOneFootware = async (id) => {
    try{
        const footware = await db.one(`SELECT * FROM footwares WHERE id=${id}`);
        return footware;

    }catch (error) {
        return {error: error};
    }
};

const createFootware = async (footware) => {
    try {
        const newFootware = await db.one(
            `INSERT INTO
            footwares(name, cost, category, url, image, is_trending)
            VALUES
            ($1, $2, $3, $4, $5, $6)
            RETURNING *;`,
            [footware.name, footware.cost, footware.category, footware.url, footware.image, footware.is_trending]
        );
        return newFootware;
    } catch (error) {
        return { error: error};
    }
};

  const updateFootware = async (id, footware) => {
    try {
      const updatedFootware = await db.one(
        `UPDATE footwares SET name=$1, cost=$2, category=$3, url=$4, image=$5, is_trending=$6 WHERE id=$7 RETURNING *`,
        [footware.name, footware.cost, footware.category, footware.url, footware.image, footware.is_trending, id]
      );
      return updatedFootware;
    } catch (error) {
      return { error: error };
    }
  };

  const deleteFootware = async (id) => {
    try {
      const deletedFootware = await db.one(
        "DELETE FROM footwares WHERE id=$1 RETURNING *",
        id
      );
      return deletedFootware;
    } catch (e) {
      return e;
    }
  };

module.exports = {
    getAllFootware,
    getOneFootware,
    createFootware,
    updateFootware,
    deleteFootware}