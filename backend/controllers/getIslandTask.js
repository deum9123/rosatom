import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const getIvents = async (request, response) => {
  pool.query("SELECT * FROM island_task_catalog ", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
export default getIvents;
