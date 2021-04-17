import pool from "../config.js";

const getUser = async (request, response) => {
  pool.query("SELECT * FROM userdb where user_id =1", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows[0]);
  });
};
export default getUser;
