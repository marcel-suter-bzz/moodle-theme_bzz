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
        let url = element.getAttribute("href");
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.open("GET",  addFormat(url, "xhtmlbody"));

        xmlhttp.addEventListener("load", function () {
            if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
                makeContentDiv(element, xmlhttp.responseText);
            } else {
                // TODO error handling
            }
            makeLink(element, url);
        });

        xmlhttp.addEventListener("error", function () {
            // TODO error handling
        });

        xmlhttp.send();
    }
}

/**
 * adds the format-parameter "do=export_???"  to the href
 * @param href  the link to the resource
 * @param format  the format to be used (xhtml or pdf)
 * @returns {string}
 */
function addFormat(href, format) {
    const parts = href.split("?",2);
    const urlParams = new URLSearchParams(parts[1]);
    if (!urlParams.has("do")) {
        urlParams.set("do", "export_" + format);
    }
    return parts[0] + "?" + urlParams.toString();
}

/**
 * replaces the anchor with a div showing the content of the wiki
 * @param anchor  the anchor element
 * @param content the wiki-content
 */
function makeContentDiv(anchor, content) {
    const div = document.createElement("div");
    div.innerHTML = content;
    makeTarget(div);
    anchor.parentNode.insertBefore(div, anchor);
}

/**
 * make a link to the PDF export of the content
 * @param anchor  the anchor-element
 * @param href    the content URL
 */
function makeLink(anchor, href) {
    anchor.href = addFormat(href, "pdf");
    anchor.html = "_blank";
    anchor.innerHTML += " (PDF)";
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