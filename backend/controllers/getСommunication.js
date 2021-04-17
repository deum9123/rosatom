import helpers from "../helpers/helpers.js";

const getСommunication = async (request, response) => {
  response.status(200).json([
    {
      name: "Общий форум",
      message_count: helpers.getRandomInt(100),
    },
    {
      name: "Общий чат",
      message_count: helpers.getRandomInt(100),
    },
    {
      name: "Командный чат",
      message_count: helpers.getRandomInt(100),
    },
    {
      name: "Курилка",
      message_count: helpers.getRandomInt(1000),
    },
  ]);
};
export default getСommunication;
