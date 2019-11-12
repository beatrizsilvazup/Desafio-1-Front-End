var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=912011b8918b488585b24f26546053cb';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        response = response.json()
       .then(function(data) {
            var data = data.articles;
            showCards(data) 
        })
    });

    window.addEventListener("load", showCards)

    function showCards(data) { 
        for (var i = 0; i < data.length; i++) {
          var myArticle = document.createElement('div');
          var myImg = document.createElement('img');
          var myDiv2 = document.createElement('div');
          var myH2 = document.createElement('h2');
          var mySpan = document.createElement('span');
          var myPara = document.createElement('p');

          myImg.innerHTML = data[i]["urlToImage"];
          myArticle.appendChild(myImg)

          var sectionAtual = document.getElementById("card-ultnoticias");
          document.body.insertBefore(myArticle, sectionAtual)
        }
      }

    // createElement
    // queryselector
    // getelementbyid
    // classname
    // addclasslist
    // textContent