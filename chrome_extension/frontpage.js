function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function findHeading(search) {
    var found;
    var headings = document.getElementsByTagName("h2");

    for (var i=0; i < headings.length; i++) {
        if (headings[i].textContent == search) {
            found = headings[i];
            return found;
        }
    }    
}

function replaceHeading(from, to) {
    var element = findHeading(from);
    element.innerHTML = to;
}

replaceHeading("Don't miss ", "Do miss");
replaceHeading("Must read ", "Mustn't read")

var bn = document.getElementById("breakingNews");
if (bn) {
    if (bn.innerText.test(/(died|dead|injure|kill)/)) {
        bn.removeChild(bn.childNodes[0]);
        var omg = document.createTextNode("OH MY GOD");
        var omgSpan = document.createElement("span");
        omgSpan.setAttribute("class", "title");
        omgSpan.appendChild(omg);
        bn.insertBefore(omgSpan, bn.childNodes[0]);
    }
}