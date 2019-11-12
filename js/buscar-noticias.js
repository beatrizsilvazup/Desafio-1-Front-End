var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=912011b8918b488585b24f26546053cb';
var req = new Request(url);
fetch(req)
  .then(function (response) {
    response = response.json()
      .then(function (data) {
        var data = data.articles;
        console.log(data);
      })
  });

function showCards(data){
  for (var i = 0; i < data.length; i++) {
    var card = document.querySelector('.card-ultnoticias');
    var article = document.createElement('div');
    var myImg = document.createElement('img');
    var conteudo = document.createElement('div');
    var myH2 = document.createElement('h2');
    var mySpan = document.createElement('span');
    var myP = document.createElement('p');

    article.classList.add('card-ultnoticias');
    myImg.classList.add('card-ultnoticias__img');
    conteudo.classList.add('card-ultnoticias__body');

    myImg.innerHTML = data[i]["urlToImage"];
    myH2.innerHTML = data[i]["title"];
    mySpan.innerHTML = data[i]["author"];

    card.appendChild(article);
    article.appendChild(myImg);
    article.appendChild(conteudo);
    conteudo.appendChild(myH2);
    conteudo.appendChild(span);
    conteudo.appendChild(myP);

    // var card = document.getElementById('card-ultnoticias');
    // var myArticle = document.createElement('div');
    // myArticle.classList.add("card-ultnoticias")
    
    // card.appendChild(myArticle)
    // var myImg = document.createElement('img');
    // myArticle.appendChild(myImg)
    // myImg.innerHTML = data[i]["urlToImage"];
    
  }
}

// createElement
// queryselector
// getelementbyid
// classname
// addclasslist
// textContent