// domain/.netlify/function/hello

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello wolrd",
  };
};
