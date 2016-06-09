module.exports = (req, res, next) => {
  return next();
  // if(req.isAuthenticated()) return next();
  // Send user back to login page
  // return res.redirect('/login');
};
