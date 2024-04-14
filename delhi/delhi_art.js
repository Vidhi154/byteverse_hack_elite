document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const extraContent = document.getElementById("extraContent");

    showMoreBtn.addEventListener("click", function() {
        if (extraContent.style.display === "none") {
            extraContent.style.display = "block";
            showMoreBtn.textContent = "Show Less";
        } else {
            extraContent.style.display = "none";
            showMoreBtn.textContent = "Show More";
        }
    });
});
