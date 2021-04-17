import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const schema = Joi.object()
  .keys({
    question_id: Joi.number().required(),
    answer: Joi.string().required(),
  })
  .required();

const questionValidate = async (request, response) => {
  const props = await helpers.validate(request.body, schema);
  if (props) {
    return response.status(400).json(props);
  }
  const { question_id, answer } = request.body;

  pool.query(
    `SELECT question_id FROM question_catalog where question_id = $1 and answer = $2`,
    [question_id, answer],
    (error, results) => {
      if (error) {
        return response
          .status(500)
          .json({ message: "Ошибка проверки ответа." });
      }
      return response
        .status(200)
        .json(results.rowCount > 0 ? { valid: true } : { valid: false });
    }
  );
};
export default questionValidate;
