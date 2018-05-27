document.addEventListener("DOMContentLoaded", function() {
    var tooltip = document.querySelectorAll(".tooltip");

    for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].addEventListener("mouseover", function() {
            var tip = document.createElement("span");
            tip.classList.add("tooltipText");
            tip.innerText = this.dataset.text;

            this.appendChild(tip);
        });

        tooltip[i].addEventListener("mouseout", function() {
            this.removeChild(this.querySelector(".tooltipText"));
        });
    }
});
