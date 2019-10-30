var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=912011b8918b488585b24f26546053cb';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json().then(function(body){
            console.log('body', body)
        }));
    })