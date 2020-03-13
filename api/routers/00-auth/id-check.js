module.exports = function idCheck(req, res, next) {
  const { subject } = req.decodedJwt;
  if (subject == req.params.id) {
    next();
  } else {
    res.status(500).json({
      errorMessage:
        "You cannot update another User's information, mind your own business!"
    });
  }
};
