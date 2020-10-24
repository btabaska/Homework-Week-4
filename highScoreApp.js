var mainDiv = document.querySelector("#main");
var mainUl = document.createElement("ul");
mainDiv.appendChild(mainUl);

for (var i in localStorage) {
  if (localStorage.getItem(i) != null) {
    val = localStorage.getItem(i);

    mainUl.setAttribute("class", "list-group");
    var mainLi = document.createElement("li");
    mainLi.setAttribute("class", "list-group-item");
    var mainLiText = document.createTextNode(`${i}  -  ${val}`);
    mainLi.appendChild(mainLiText);
    mainUl.appendChild(mainLi);
  }
}
