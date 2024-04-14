document.getElementById('searchButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default button behavior

  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchResultsContainer = document.getElementById('searchResults');

  // Example search logic (replace with your own)
  if (searchInput === 'kolkata') {
      window.location.href = '/kolkata/kolkataCard.html';
  } else if (searchInput === 'patna') {
      window.location.href = '/patna/patna_card.html';
  } else if (searchInput === 'goa') {
      window.location.href = '/goa/goa_card.html';
  } else if (searchInput === 'agra') {
      window.location.href = 'goa/goa_card.html';
  } else if (searchInput === 'mumbai') {
      window.location.href = '/mumbai/mumbai_page.html';
  } else if (searchInput === 'delhi') {
      window.location.href = '/delhi/delhi_card.html';
  } else {
      searchResultsContainer.textContent = `No results found for ${searchInput}`;
  }
});


// document.addEventListener('DOMContentLoaded', function() {
//     const faqQuestions = document.querySelectorAll('.ques');

{/* <script> */}
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var pannel = this.nextElementSibling;

          if (pannel.style.display === "block") {
            pannel.style.display = "none";
          } else {
            pannel.style.display = "block";
          }
        });
      }
    {/* </script> */}
