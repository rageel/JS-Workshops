document.addEventListener("DOMContentLoaded", function() {
    var lis = document.querySelectorAll(".nav > ul > li");
    console.log(lis);

    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("mouseover", function() {
            if (this.children.length) {
                this.querySelector("ul").style.display = "block";
            }
        });
        lis[i].addEventListener("mouseout", function() {
            if (this.children.length) {
                this.querySelector("ul").style.display = "none";
            }
        });
    }
});
