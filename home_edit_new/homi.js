document.getElementById('searchForm').addEventListener('span', function(event) {
    event.preventDefault(); // Prevent default form submission

    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');

    // Example search logic (replace with your own)
    if (searchInput === 'Kolkata') {
        window.location.href = 'kolkata.html';
    } else if (searchInput === 'Patna') {
        window.location.href = 'patna.html';

    } 
    else if (searchInput === 'Agra') {
        window.location.href = 'agra.html';
        
    }
    else if (searchInput === 'Goa') {
        window.location.href = 'goa.html';
        
    }
    else if (searchInput === 'Jaipur') {
        window.location.href = 'jaipur.html';
        
    }
    else {
        searchResultsContainer.textContent =`No results found for ${searchInput}`;
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const faqQuestions = document.querySelectorAll('.ques');

//     faqQuestions.forEach(question => {
//         question.addEventListener('click', () => {
//             const answer = question.nextElementSibling;

//             // Toggle the visibility of the answer
//             if (answer.style.display === 'block') {
//                 answer.style.display = 'none';
//             } else {
//                 answer.style.display = 'block';
//             }
//         });
//     });
// });
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
