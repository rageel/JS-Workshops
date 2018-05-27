document.addEventListener("DOMContentLoaded", function() {
    var photos = document.querySelectorAll("img");
    var input = document.querySelector("#tagInput");
    var btnShow = document.querySelector("#showButton");
    var btnHide = document.querySelector("#hideButton");

    btnShow.addEventListener("click", function() {
        var inputText = input.value;

        for (var i = 0; i < photos.length; i++) {
            if (photos[i].dataset.tag.split(",").indexOf(inputText) > -1) {
                console.log(photos[i].dataset.tag);
                photos[i].style.display = "inline-block";
            } else {
                photos[i].style.display = "none";
            }
        }
        input.value = "";
    });
    btnHide.addEventListener("click", function() {
        var inputText = input.value;

        for (var i = 0; i < photos.length; i++) {
            if (photos[i].dataset.tag.split(",").indexOf(inputText) > -1) {
                console.log(photos[i].dataset.tag);
                photos[i].style.display = "none";
            } else {
                photos[i].style.display = "inline-block";
            }
        }
        input.value = "";
    });
});
