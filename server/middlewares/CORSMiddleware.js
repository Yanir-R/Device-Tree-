module.exports = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, HEAD, OPTIONS, POST, PUT, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, auth-token, observe, responseType, image"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  };