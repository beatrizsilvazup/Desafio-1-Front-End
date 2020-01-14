function getData(){
  var url = 'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=912011b8918b488585b24f26546053cb'
var req = new Request(url);
fetch(req)
  .then(function (response) {
    response = response.json()
      .then(function (data) {
        var data = data.articles;
        showCards(data);
        showRect(data);
        showHigh(data);
        console.log(data);
      })
  });
}

function showHigh(data){
    var cardHigh = document.querySelector('.destaque-principal');
    var quadHigh = document.createElement('div');
    var quadText = document.createElement('div');
    var quadSpan = document.createElement('span');
    var quadH1 = document.createElement('h1');
    var quadP = document.createElement('p');

    quadHigh.classList.add('quad-destaques');
    quadText.classList.add('quad-destaques__text');

    quadSpan.innerHTML = data[1]["author"];
    quadH1.innerHTML = data[1]["title"];
    quadP.innerHTML = data[1]["description"];

    cardHigh.appendChild(quadHigh);
    quadHigh.appendChild(quadText);
    quadText.appendChild(quadSpan);
    quadText.appendChild(quadH1);
    quadText.appendChild(quadP);
}

function showRect(data){
  var cardRect = document.querySelector('.ret-destaques');
  
  var rect1 = document.createElement('div');
  var rectImg1 = document.createElement('img');
  var rectSpan1 = document.createElement('span');
  var rectTitle1 = document.createElement('h3');

  var rect2 = document.createElement('div');
  var rectImg2 = document.createElement('img');
  var rectSpan2 = document.createElement('span');
  var rectTitle2 = document.createElement('h3');

  rectImg1.src = data[2]["urlToImage"];
  rectTitle1.innerHTML = data[2]["title"];
  rectSpan1.innerHTML = data[2]["author"];

  rectImg2.src = data[3]["urlToImage"];
  rectTitle2.innerHTML = data[3]["title"];
  rectSpan2.innerHTML = data[3]["author"];

  rect1.classList.add('ret-destaques1');
  rectImg1.classList.add('img-ret');

  rect2.classList.add('ret-destaques2');
  rectImg2.classList.add('img-ret2');

  cardRect.appendChild(rect1);
  rect1.appendChild(rectImg1);
  rect1.appendChild(rectSpan1);
  rect1.appendChild(rectTitle1);

  cardRect.appendChild(rect2);
  rect2.appendChild(rectImg2);
  rect2.appendChild(rectSpan2);
  rect2.appendChild(rectTitle2);
}


function showCards(data){
  for (var i = 0; i < data.length; i++) {
    var card = document.getElementById('card-ultnoticias');
    var article = document.createElement('div');
    var myImg = document.createElement('img');
    var conteudo = document.createElement('div');
    var myH2 = document.createElement('h2');
    var mySpan = document.createElement('span');
    var myP = document.createElement('p');

    article.classList.add('card-ultnoticias');
    myImg.classList.add('card-ultnoticias__img');
    conteudo.classList.add('card-ultnoticias__body');

    myImg.src = data[i]["urlToImage"];
    myH2.innerHTML = data[i]["title"];
    mySpan.innerHTML = data[i]["author"];

    card.appendChild(article);
    article.appendChild(myImg);
    article.appendChild(conteudo);
    conteudo.appendChild(myH2);
    conteudo.appendChild(mySpan);
    conteudo.appendChild(myP);
  }
}

getData();