// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let btnele = document.getElementById("submitBtn");
let formele = document.getElementById("bookmarkForm");
let nameele = document.getElementById("siteNameInput");
let urlele = document.getElementById("siteUrlInput");
let msg1ele = document.getElementById("siteNameErrMsg");
let msg2ele = document.getElementById("siteUrlErrMsg");

let ulele = document.getElementById("bookmarksList");

function tocreatecard(nameval, urlval) {
    let listitem = document.createElement("li");
    listitem.textContent = nameval;
    listitem.classList.add("list-item");
    ulele.appendChild(listitem);

    let britem = document.createElement("br");
    listitem.appendChild(britem);

    let urlitem = document.createElement("a");
    urlitem.target = "_blank";
    urlitem.classList.add("linkitem");
    urlitem.textContent = urlval;
    urlitem.href = urlval;
    listitem.appendChild(urlitem);

}

nameele.addEventListener("blur", function() {
    if (nameele.value === "") {
        msg1ele.textContent = "Required*";
    } else {
        msg1ele.textContent = "";
    }
});
urlele.addEventListener("blur", function() {
    if (urlele.value === "") {
        msg2ele.textContent = "Required*";
    } else {
        msg2ele.textContent = "";
    }

});
formele.addEventListener("submit", function(event) {
    event.preventDefault();
    nameele.addEventListener("change", function() {
        msg1ele.textContent = "Required*";
    });
    urlele.addEventListener("change", function() {
        msg2ele.textContent = "Required*";
    });
    if (nameele.value === "") {
        msg1ele.textContent = "Required*";
    }
    if (urlele.value === "") {
        msg2ele.textContent = "Required*";
    }
    if ((nameele.value !== "") && (urlele.value !== "")) {
        let nameval = nameele.value;
        let urlval = urlele.value;
        tocreatecard(nameval, urlval);
    }
});