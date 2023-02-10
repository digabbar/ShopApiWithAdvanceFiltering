const notfound = (req, res) => {
  res.status(404).json({
    message: "not found",
  });
};
module.exports = notfound;
