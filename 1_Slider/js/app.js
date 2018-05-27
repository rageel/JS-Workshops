document.addEventListener("DOMContentLoaded", function() {
    var prev = document.querySelector("#prevPicture");
    var next = document.querySelector("#nextPicture");

    var slides = document.querySelectorAll(".slider li");

    var counter = 0;

    console.log(slides);

    slides[counter].classList.add("visible");

    prev.addEventListener("click", function() {
        slides[counter].classList.remove("visible");
        counter = counter == 0 ? slides.length - 1 : counter - 1;
        //counter równa się:
        //czy counter doszedł do zera (początek slajdów)?
        //tak - nowy counter równa się slides.length - 1 czyli "5"
        //czyli przechodzi z zera do piątki
        //jeśli nie, to zmniejsz counter (idz do poczatku)

        slides[counter].classList.add("visible");
        console.log(counter);
    });
    next.addEventListener("click", function() {
        slides[counter].classList.remove("visible");
        counter = counter >= slides.length - 1 ? 0 : counter + 1;
        //counter równa się:
        //czy counter doszedł do piątki (slides.length -1) (koniec slajdów)?
        //tak - nowy counter równa się zero (zacznij od nowa)
        //czyli przechodzi z piątki do zera
        //jeśli nie, to zwieksz counter
        slides[counter].classList.add("visible");
        console.log(counter);
    });
});
