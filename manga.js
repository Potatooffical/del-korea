const url = 'https://mangaverse-api.p.rapidapi.com/manga/fetch?page=1&genres=Harem%2CFantasy&nsfw=true&type=all';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '48b56d7065mshd25b3fdbae91d3cp1579e5jsnd3800dfd0340',
        'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
    }
};

function createCard(manga, rowContainer) {
    if (!manga || !manga.thumb || !manga.title || !manga.summary) {
        console.warn('Missing data for manga:', manga);
        return;
    }

    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';

    card.innerHTML = `
        <img src="${manga.thumb}" class="card-img-top" alt="${manga.title}">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${manga.title}</h5>
            <p class="card-text">${manga.summary.substring(0, 100)}...</p>
            <a href="${manga.summary}" class="btn btn-primary mt-auto">Read More</a>
        </div>
    `;

    col.appendChild(card);
    rowContainer.appendChild(col);
}

fetch(url, options)
    .then(response => response.json())
    .then(data => {
        if (data && Array.isArray(data.data)) {
     
            const row = document.createElement('div');
            row.className = 'row';

            
            const mangaContainer = document.getElementById('manga');
            mangaContainer.appendChild(row);

            
            data.data.forEach(manga => {
                createCard(manga, row);
            });
        } else {
            console.error('Expected data.data to be an array, but got:', data.data);
        }
    })
    .catch(err => {
        console.error('Error fetching data:', err);
    });
