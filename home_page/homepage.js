document.getElementById('searchForm').addEventListener('submit', function(event) {
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