/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'No Gouda' });
};

module.exports = {
  index
};