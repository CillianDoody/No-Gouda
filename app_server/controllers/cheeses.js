/* GET 'home' page */
const request = require('request');
const apiOptions = {
server : 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://no-gouda.onrender.com';
}
const _renderHomepage = function(req, res, responseBody){
  res.render('cheese-list', {
    title: 'No Gouda',
    pageHeader: {
      title: 'No Gouda',
      strapline: 'Review the different types of cheese you have tried and let us know if its any gouda!'
    },
    sidebar: "Looking for new cheese to try? Looking to warn people of bad cheese? No Gouda is the place to be.",
    cheeses: responseBody
    
  });
};

const homelist = function(req, res){
  const path = '/api/cheese';
  const requestOptions = {
    url : apiOptions.server + path,
    method : 'GET',
    json : {},
    qs : {}
  };
  request(requestOptions, (err, response, body) => {
    console.log('API error:', err);
    console.log('API response status:', response && response.statusCode);
    console.log('API body:', body);
    _renderHomepage(req, res, body);
    }
  );
};

module.exports = {
  homelist
};