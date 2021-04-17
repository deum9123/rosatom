import pool from "../config.js";
import helpers from "../helpers/helpers.js";

const getQuestions = async (request, response) => {
  pool.query(
    "SELECT question_id, question, question_description, question_answers FROM question_catalog ORDER BY RANDOM()",
    (error, results) => {
      if (error) {
        throw error;
      }
      results.rows.forEach((element) => {
        question_answers: helpers.shuffle(element.question_answers);
      });

      response.status(200).json(results.rows);
    }
  );
};
export default getQuestions;
