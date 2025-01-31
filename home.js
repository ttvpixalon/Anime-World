// Select elements
const searchButton = document.querySelector('.search-button'); // Search button
const searchBar = document.getElementById('searchBar'); // Search bar container
const searchInput = document.getElementById('searchInput'); // Search input field
const searchResults = document.getElementById('searchResults'); // Dropdown list
const pageContent = document.getElementById('pageContent'); // Entire page content

// List of anime with thumbnails
const animeList = [
    { title: "Assassination Classroom", image: "assets/images/assassination-classroom-cover.jpg" },
    { title: "Kaiju No.8", image: "assets/images/kaiju-no8-cover.jpg" },
    { title: "Death Note", image: "assets/images/death-note-cover.jpg" },
    { title: "Blue Lock S2", image: "assets/images/bluelock-s2-cover.jpg" },
    { title: "Chainsaw Man", image: "assets/images/chainsawman-cover.jpg" },
    { title: "Eminence in Shadow", image: "assets/images/eminence-shadow-s2-cover.jpg" },
    { title: "Mob Psycho III", image: "assets/images/mob-psycho3-cover.jpg" },
    { title: "Delicious in Dungeon", image: "assets/images/delicious-in-dungeon-cover.jpg" },
    { title: "Dandadan", image: "assets/images/dandadan-cover.jpg" },
    { title: "Mashle: Magic and Muscles", image: "assets/images/mashle-magics2.jpg" },
    { title: "Kakegurui", image: "assets/images/KakeguruiCoverAnime.jpg" },
    { title: "Dragon Ball Daima", image: "assets/images/dragonball-daima-cover.jpg" }
];

// ✅ **Fix: Toggle search bar & blur effect when clicking search button**
searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    pageContent.classList.toggle('blur-content');
    
    // Focus on search input when opened
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    }
});

// ✅ **Fix: Hide search bar when clicking outside of it**
document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && !searchButton.contains(event.target)) {
        searchBar.classList.remove('active');
        pageContent.classList.remove('blur-content');
        searchResults.style.display = 'none'; // Hide dropdown when closing search bar
    }
});

// ✅ **Search Functionality**
function searchAnime() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; // Clear previous results

    if (query.length === 0) {
        searchResults.style.display = 'none'; // Hide dropdown when empty
        return;
    }

    // Filter anime based on search query
    const filteredAnime = animeList.filter(anime => anime.title.toLowerCase().includes(query));

    if (filteredAnime.length === 0) {
        searchResults.style.display = 'none'; // Hide if no matches
        return;
    }

    searchResults.style.display = 'block'; // Show dropdown

    filteredAnime.forEach(anime => {
        const li = document.createElement('li');

        // Create image thumbnail
        const img = document.createElement('img');
        img.src = anime.image;
        img.alt = anime.title;

        // Create title span
        const span = document.createElement('span');
        span.textContent = anime.title;

        // Append elements
        li.appendChild(img);
        li.appendChild(span);

        // Click event to select anime
        li.addEventListener('click', () => {
            searchInput.value = anime.title; // Set input field to selected anime
            searchResults.style.display = 'none'; // Hide dropdown after selection
        });

        searchResults.appendChild(li);
    });
}

// Attach event listener to input field
searchInput.addEventListener('input', searchAnime);

// Hide dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});
