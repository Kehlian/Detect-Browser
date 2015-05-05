
var domNavigatorText;

if (navigator.userAgent.indexOf("Chrome") != -1) {
    domNavigatorText = document.createElement("p");
    document.body.appendChild(domNavigatorText);
    domNavigatorText.innerHTML = "Vous utilisez Chrome";
}
else if (navigator.userAgent.indexOf("Opera") != -1) {
    domNavigatorText = document.createElement("p");
    document.body.appendChild(domNavigatorText);
    domNavigatorText.innerHTML = "Vous utilisez Opera";
}
else if (navigator.userAgent.indexOf("Firefox") != -1) {
    domNavigatorText = document.createElement("p");
    document.body.appendChild(domNavigatorText);
    domNavigatorText.innerHTML = "Vous utilisez Firefox";
}
else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
{
    domNavigatorText = document.createElement("p");
    document.body.appendChild(domNavigatorText);
    domNavigatorText.innerHTML = "Vous utilisez de la merde";
}
else {
    domNavigatorText = document.createElement("p");
    document.body.appendChild(domNavigatorText);
    domNavigatorText.innerHTML = "Je ne reconnais pas votre navigateur";
}