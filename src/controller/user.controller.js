const soma = (req, res) => {
  const soma = 100 + 20;
  res.send({ soma: soma });
};

module.exports = { soma };
