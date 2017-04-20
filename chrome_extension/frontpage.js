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

inDepthPic = chrome.extension.getURL('assets/indepth.png');

replaceHeading("Herald in-depth ", "<img src=\"" + inDepthPic + "\"/>");