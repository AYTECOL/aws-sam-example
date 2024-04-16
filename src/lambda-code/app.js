module.exports.handler = async (event) => {
  const env = process.env.MY_VARIBLE;

  console.log("Esta variable se optiene de las variables de entorno: ", env);

  if (env === "dev") {
    const message = "Estoy en desarrollo";
    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  } else if (env === "prod") {
    const message = "Estoy en producción";
    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  } else {
    throw new Error("La variable de entorno no es válida");
  }
}