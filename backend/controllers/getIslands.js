import pool from "../config.js";

const getIslands = async (request, response) => {
  pool.query("SELECT * FROM island_catalog", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
export default getIslands;
