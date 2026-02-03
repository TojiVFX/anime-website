// main.js

// --- Home Page Logic ---
function displayAnime(animes) {
    const container = document.getElementById('anime-container');
    const resultInfo = document.getElementById('result-info');
    if (!container) return;

    container.innerHTML = '';

    if (resultInfo) {
        if (animes.length === animeData.length) {
            resultInfo.innerHTML = `Showing all <span class="result-count">${animes.length}</span> animes`;
        } else {
            resultInfo.innerHTML = `Found <span class="result-count">${animes.length}</span> animes`;
        }
    }

    if (animes.length === 0) {
        container.innerHTML = `
            <div class="no-results-container">
                <p class="no-results">Sorry, this anime is not available on our website.</p>
                <button class="reset-btn" onclick="resetFilters()">Reset All Filters</button>
            </div>
        `;
        return;
    }

    animes.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
            <img src="${anime.thumbnail}" alt="${anime.name}">
            <h3>${anime.name}</h3>
        `;
        card.onclick = () => {
            window.location.href = `details.html?id=${anime.id}`;
        };
        container.appendChild(card);
    });
}

function resetFilters() {
    const searchBox = document.getElementById('search-box');
    const categoryBtns = document.querySelectorAll('.category-btn');

    if (searchBox) searchBox.value = '';
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
        }
    });

    displayAnime(animeData);
}

function initHome() {
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');
    const categoryBtns = document.querySelectorAll('.category-btn');

    if (searchBtn && searchBox) {
        searchBtn.onclick = () => {
            const query = searchBox.value.toLowerCase();
            const filtered = animeData.filter(anime =>
                anime.name.toLowerCase().includes(query)
            );
            displayAnime(filtered);
        };

        // Also search on Enter key
        searchBox.onkeyup = (e) => {
            if (e.key === 'Enter') {
                searchBtn.onclick();
            }
        };
    }

    categoryBtns.forEach(btn => {
        btn.onclick = () => {
            // Update active state
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                displayAnime(animeData);
            } else {
                const filtered = animeData.filter(anime => anime.category === category);
                displayAnime(filtered);
            }
        };
    });

    // Initial display
    displayAnime(animeData);
}

// --- Details Page Logic ---
function loadAnimeDetails() {
    const container = document.getElementById('details-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const animeId = urlParams.get('id');

    if (!animeId) {
        container.innerHTML = '<p>No anime selected.</p>';
        return;
    }

    const anime = animeData.find(a => a.id === animeId);

    if (!anime) {
        container.innerHTML = '<p>Anime not found.</p>';
        return;
    }

    container.innerHTML = `
        <div class="details-layout">
            <div class="details-thumbnail">
                <img src="${anime.thumbnail}" alt="${anime.name}">
            </div>
            <div class="details-info">
                <h1>${anime.name}</h1>
                <div class="info-item"><strong>Release Year:</strong> ${anime.releaseYear}</div>
                <div class="info-item"><strong>Duration:</strong> ${anime.duration}</div>
                <div class="info-item"><strong>Episodes:</strong> ${anime.episodes}</div>
                <div class="info-item"><strong>Genres:</strong> ${anime.genres.join(', ')}</div>
                <div class="info-item"><strong>Language:</strong> ${anime.language}</div>

                <div class="description">
                    <h3>Description</h3>
                    <p>${anime.description}</p>
                </div>
            </div>
            <div class="download-section">
                <h3>Download Episodes</h3>
                <div class="download-buttons">
                    ${anime.downloadLinks.map(dl => `
                        <a href="${dl.link}" class="download-btn" target="_blank">Episode ${dl.episode}</a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Initialization based on page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('anime-container')) {
        initHome();
    }
    if (document.getElementById('details-container')) {
        loadAnimeDetails();
    }

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Back to Top functionality
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }
});
