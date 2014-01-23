var pattern = /node\.js/gi;

if(document.body.innerHTML.match(pattern).length) {
    var css = document.createElement("link");
    var cross = document.createElement("img");
    var body = document.body;
    var head = document.head;

    css.type = "text/stylesheet";
    css.rel = "stylesheet";
    css.href = chrome.extension.getURL("cross.css");

    cross.src = chrome.extension.getURL("cross.png");
    cross.id = "blocknodium";

    head.appendChild(css);
    body.appendChild(cross);

    cross.addEventListener("click", function(e) {
                                        document.getElementById("blocknodium").parentNode.removeChild(cross);
                                    }, false);

}
