/*
 *
 *
 */

const errorHandler = (err, req, res, next) => {
  if (typeof err === "string") {
    // custom application error
    return res.status(400).json({ message: err });
  }

  if (err.name === "ValidationError") {
    // mongoose validation error
    return res.status(422).json({ message: err.message });
  }

  if (err.message.includes("User validation failed:")) {
    return res.status(422).json({ message: err.message });
  }

  if (err.message === "UnauthorizedError" || err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Unauthorized", auth: false });
  }

  // default to 500 server error
  console.log(err.message);
  return res.status(500).json({ message: err.message });
};

module.exports = errorHandler;
