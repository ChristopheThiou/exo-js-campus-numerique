const typeTranslations = {
  car: "Voiture",
  house: "Maison",
  game: "Jeu",
  videoGame: "Jeux Vidéos",
  show: "Spectacle",
};

// Fonction pour extraire tous les articles de la nouvelle structure
function extractArticles(data) {
  let articles = [];
  data.forEach((category) => {
    category.items.forEach((item) => {
      articles.push({ ...item, type: category.type });
    });
  });
  return articles;
}

const extractedArticles = extractArticles(jsonDatas);

const articlesTableBody = document.getElementById("articlesTableBody");
const addToCartButton = document.getElementById("addToCartButton");

// Fonction pour afficher les articles dans le DOM
function displayArticles(articles) {
  articlesTableBody.innerHTML = "";
  articles.forEach((article) => {
    const articleRow = document.createElement("tr");
    articleRow.innerHTML = `
              <td><input type="checkbox" class="form-check-input article-checkbox" id="cart"></td>
              <td>${article.name}</td>
              <td>${typeTranslations[article.type] || article.type}</td>
              <td>${article.description}</td>
              <td>${article.price}</td>
              <td>${article.quantity}</td>
              <td>${article.contact.firstName} ${article.contact.lastName}, ${
      article.contact.address
    }</td>
          `;
    articlesTableBody.appendChild(articleRow);
  });

  // Ajouter des gestionnaires d'événements aux cases à cocher
  const checkboxes = document.querySelectorAll(".article-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const anyChecked = Array.from(checkboxes).some((cb) => cb.checked);
      addToCartButton.style.display = anyChecked ? "block" : "none";
    });
  });
}

// Gestion du panier

const cart = [];
const cartTableBody = document.getElementById("cartTableBody");
const cartTotal = document.getElementById("cartTotal");

addToCartButton.addEventListener("click", () => {
  const checkedCheckboxes = document.querySelectorAll(
    ".article-checkbox:checked"
  );

  checkedCheckboxes.forEach((checkbox) => {
    const article = extractedArticles.find(
      (article) =>
        article.name === checkbox.parentElement.nextElementSibling.textContent
    );
    if (article.quantity > 0) {
      article.quantity -= 1;
      cart.push(article);
    }
  });

  displayCart();
  displayArticles(extractedArticles); // Mettre à jour l'affichage des articles après la mise à jour des quantités
});

// Fonction pour afficher les articles dans le panier
function displayCart() {
  cartTableBody.innerHTML = "";
  let total = 0;
  let itemCount = 0;
  cart.forEach((article) => {
    const cartRow = document.createElement("tr");
    cartRow.innerHTML = `
                <td>${article.name}</td>
                <td>${article.price}</td>
            `;
    cartTableBody.appendChild(cartRow);
    total += article.price;
    itemCount++;
  });
  cartTotal.textContent = `Total: ${total} € (${itemCount} articles)`;
}

// Gestionnaire d'événements pour vider le panier
emptyCartButton.addEventListener("click", () => {
  cart.length = 0; // Vider le tableau
  displayCart(); // Mettre à jour l'affichage
});

// Afficher tous les articles au chargement de la page
displayArticles(extractedArticles);

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
const checkbox = document.getElementById("check");
const sortOrder = document.getElementById("sortOrder");

// Fonction pour filtrer et trier les articles
function filterArticles() {
  const searchTerm = searchInput.value.toLowerCase();
  const inStock = checkbox.checked;
  const order = sortOrder.value;

  let filteredArticles = extractedArticles.filter((article) => {
    const translatedType = typeTranslations[article.type];
    return (
      article.type.toLowerCase().includes(searchTerm) ||
      translatedType.includes(searchTerm)
    );
  });

  if (inStock) {
    filteredArticles = filteredArticles.filter(
      (article) => article.quantity > 0
    );
  }

  if (order === "priceAsc") {
    filteredArticles.sort((a, b) => a.price - b.price);
  } else if (order === "priceDesc") {
    filteredArticles.sort((a, b) => b.price - a.price);
  }

  if (order === "nameAsc") {
    filteredArticles.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "nameDesc") {
    filteredArticles.sort((a, b) => b.name.localeCompare(a.name));
  }

  displayArticles(filteredArticles);
}

// Ajouter des gestionnaires d'événements
searchButton.addEventListener("click", filterArticles);
checkbox.addEventListener("change", filterArticles);
sortOrder.addEventListener("change", filterArticles);

// Gestionnaire d'événements pour le formulaire d'ajout d'article
const addArticleForm = document.getElementById("addArticleForm");
addArticleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  const newArticle = {
    name,
    type,
    description,
    price,
    quantity,
    contact: {
      lastName: "Dubois",
      firstName: "Martin",
      address: "1 Grande Rue 74000 Annecy",
    },
  };
  extractedArticles.push(newArticle);

  // Mettre à jour l'affichage des articles après l'ajout
  filterArticles();
  addArticleForm.reset();
});
