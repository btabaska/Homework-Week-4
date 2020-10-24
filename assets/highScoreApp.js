var mainDiv = document.querySelector("#main");
var mainUl = document.createElement("ul");
mainDiv.appendChild(mainUl);

var sortedScores = [];
//pulls in all localstorage and appends them to the sortedscores array
for (var i in localStorage) {
  if (localStorage.getItem(i) != null) {
    val = localStorage.getItem(i);
    sortedScores.push([i, val]);
  }
}

//Sorts all the scores from high to low
sortedScores.sort(function (a, b) {
  return b[1] - a[1];
});

//generates the HTML to display the scores from high to low. Uses bootstrap for automatic card styling
generateHighScoreList = (item, index) => {
  mainUl.setAttribute("class", "list-group");
  var mainLi = document.createElement("li");
  mainLi.setAttribute("class", "list-group-item");
  var mainLiText = document.createTextNode(`${item[0]}  -  ${item[1]}`);
  mainLi.appendChild(mainLiText);
  mainUl.appendChild(mainLi);
};
//iterates through all the items in the sorted score array
sortedScores.forEach(generateHighScoreList);
