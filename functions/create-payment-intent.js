// domain/.netlify/functions/create-payment-intent

//require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello",
  };
};
