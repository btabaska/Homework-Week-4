var mainDiv = document.querySelector("#main");
var mainUl = document.createElement("ul");
mainDiv.appendChild(mainUl);

var sortedScores = [];

for (var i in localStorage) {
  if (localStorage.getItem(i) != null) {
    val = localStorage.getItem(i);
    sortedScores.push([i, val]);
  }
}

sortedScores.sort(function (a, b) {
  return b[1] - a[1];
});

console.log(sortedScores);

generateHighScoreList = (item, index) => {
  mainUl.setAttribute("class", "list-group");
  var mainLi = document.createElement("li");
  mainLi.setAttribute("class", "list-group-item");
  var mainLiText = document.createTextNode(`${item[0]}  -  ${item[1]}`);
  mainLi.appendChild(mainLiText);
  mainUl.appendChild(mainLi);
};

sortedScores.forEach(generateHighScoreList);
