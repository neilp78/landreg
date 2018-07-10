/* global $ */

// Warn about using the kit in production
var acc = document.getElementsByClassName("accordion");
var m;

for (m = 0; m < acc.length; m++) {
    acc[m].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
