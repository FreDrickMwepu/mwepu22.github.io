// Function to dynamically add script tags to the HTML document
function loadScripts() {
    // jQuery
    var jqueryScript = document.createElement('script');
    jqueryScript.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
    jqueryScript.integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo";
    jqueryScript.crossOrigin = "anonymous";
    document.head.appendChild(jqueryScript);

    // Popper.js
    var popperScript = document.createElement('script');
    popperScript.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
    popperScript.integrity = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1";
    popperScript.crossOrigin = "anonymous";
    document.head.appendChild(popperScript);

    // Bootstrap
    var bootstrapScript = document.createElement('script');
    bootstrapScript.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
    bootstrapScript.integrity = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM";
    bootstrapScript.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapScript);
}

// Call the loadScripts function when the window finishes loading
window.onload = function() {
    loadScripts();
};
