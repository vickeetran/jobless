module.exports = (req, res, next) => {
  if(req.isAuthenticated()) return next;
  // Send user back to login page
  res.redirect('/');
}