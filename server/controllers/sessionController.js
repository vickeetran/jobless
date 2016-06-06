module.exports = {
  get: (req, res) => {
    console.log(req.user);
    res.send(req.user);
  },
}