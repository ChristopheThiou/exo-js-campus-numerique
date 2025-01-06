const typeTranslations = {
    car: "Voiture",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeux Vidéos",
    show: "Spectacle"
};

// Afficher les articles dans la console
jsonDatas.forEach(article => {
    console.log(`Name: ${article.name}`);
    console.log(`Type: ${typeTranslations[article.type] || article.type}`);
    console.log(`Description: ${article.description}`);
    console.log(`Price: ${article.price}`);
    console.log(`Quantity: ${article.quantity}`);
    console.log('-------------------------');
});

const articlesContainer = document.getElementById('articles');

// Fonction pour afficher les articles dans le DOM
function displayArticles(articles) {
    articlesContainer.innerHTML = '';
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h2>${article.name}</h2>
            <p>Type: ${typeTranslations[article.type] || article.type}</p>
            <p>Description: ${article.description}</p>
            <p>Price: ${article.price}</p>
            <p>Quantity: ${article.quantity}</p>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// Afficher tous les articles au chargement de la page
displayArticles(jsonDatas);

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search');
const checkbox = document.getElementById('check');

// Fonction pour filtrer les articles
function filterArticles() {
    const searchTerm = searchInput.value.toLowerCase();
    const inStock = checkbox.checked;

    let filteredArticles = jsonDatas.filter(article => {
        const translatedType = typeTranslations[article.type].toLowerCase();
        return article.type.toLowerCase().includes(searchTerm) || translatedType.includes(searchTerm);
    });

    if (inStock) {
        filteredArticles = filteredArticles.filter(article => article.quantity > 0);
    }

    displayArticles(filteredArticles);
}

// Ajouter un gestionnaire d'événements au bouton de recherche
searchButton.addEventListener('click', filterArticles);

// Ajouter un gestionnaire d'événements à la case à cocher
checkbox.addEventListener('change', filterArticles);