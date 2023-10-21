exports.home = (req, res) => {
  res.status(200).send("<h1>Home</h1>");
};

exports.allAccess = (req, res) => {
  res.status(200).send("<h1>ALL</h1>");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

