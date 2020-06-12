var querystring = require('querystring');
var https = require('https');
var http = require('http');
var host = 'samples.openweathermap.org'
// /data/2.5/weather?q=Chennai,uk&appid=439d4b804bc8187953eb36d2a8c26a02';
// name = 'JonBob';
// var password = '*****';
// var apiKey = '*****';
// var sessionId = null;
// var deckId = '68DC5A20-EE4F-11E2-A00C-0858C0D5C2ED';
function performRequest(endpoint, method,data,success) {
  var dataString = JSON.stringify(data);
  var headers = {};
  
  if (method == 'GET') {
    endpoint += '?'+ querystring.stringify(data);
  }
  else {
    headers = {
      'Content-Type': 'application/json',
      'Content-Length': dataString.length
    };
  }
  console.log(host+endpoint)
  var options = {
    host: host,
    port:8080,
    path: endpoint,
    method: method,
    headers: headers
  };
  var req = http.request(options, function(res) {
    res.setEncoding('utf-8');
    var responseString = '';
    res.on('data', function(data) {
      responseString += data;
    });
    res.on('end', function() {
      console.log(responseString);
      var responseObject = JSON.parse(responseString);
    //   success(responseObject);
    console.log(responseObject)
    });
  });
  req.write(dataString);
  req.end();
}
// performRequest('/data/2.5/weather','GET')
function getCards() {
    performRequest('/data/2.5/weather','GET', 
    {
      q:'London',
      "appid":'439d4b804bc8187953eb36d2a8c26a02' 
    }, function(data) {
      console.log('Fetched ' + data);
    });
  }
  getCards()
//   ?q=Chennai,uk&appid=439d4b804bc8187953eb36d2a8c26a02