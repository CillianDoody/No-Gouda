/* GET home page */
const about = function(req, res){
  res.render('generic-text', {
    title: 'About No Gouda',
    content: 'No Gouda was created to help cheese lovers discover and review cheese that they have tried.'
  });
};

module.exports = {
  about
};