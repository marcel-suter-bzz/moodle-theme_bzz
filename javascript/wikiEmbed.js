/**
 * embeds dokuwiki content in a moodle page
 * @author Marcel Suter (Ghwalin)
 */
window.addEventListener("load", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (!urlParams.has("update"))
        loadContent();
});

/**
 * loads the dokuwiki content
 */
function loadContent() {
    const elements = document.getElementsByClassName("embededWiki");
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.hasAttribute("data-url")) {
            let xmlhttp = new XMLHttpRequest();
            let wikiURL = element.getAttribute("data-url");
            xmlhttp.open("GET", wikiURL);

            xmlhttp.addEventListener("load" , function() {
                if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
                    element.innerHTML = xmlhttp.responseText;
                    makeTarget(element);
                } else {
                    // TODO error handling
                }
            });

            xmlhttp.addEventListener("error", function() {
                // TODO error handling
            });

            xmlhttp.send();
        }
    }
}

/**
 * adds 'target="_blank"' to all links in an element
 * @param element the DOM element containing the links
 */
function makeTarget(element) {
    const links = element.getElementsByTagName("A");
    for (let i = 0; i < links.length; i++) {
        links[i].html = "_blank";
    }
}