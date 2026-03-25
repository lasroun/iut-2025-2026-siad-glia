// Définition de la classe ProductCard qui étend HTMLElement
class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Product Name";
    const price = this.getAttribute("price") || "0";
    const image =
      this.getAttribute("image") || "./assets/images/placeholder.jpg";
    const description =
      this.getAttribute("description") || "No description available.";

    this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    text-align: center;
                    width: 200px;
                }
                .card img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 4px;
                }
                .card h2 {
                    font-size: 1.2em;
                    margin: 8px 0; 
                }
                .card p {
                    color: #888;
                    font-size: 1em;
                    margin: 4px 0;
                }
            </style>
            <div class="card">
                <img src="${image}" alt="${name}">
                <h2>${name}</h2>
                <p>${price} XOF</p>
            </div>
						<dialog id="productDialog">
							<p>${name}</p>
							<p>${price} XOF</p>
							<p>${description}</p>
							<button id="closeDialog">Close</button>
						</dialog>
        `;

    const dialog = this.shadowRoot.getElementById("productDialog"); // Sélectionne le dialog dans le shadow DOM
    this.shadowRoot.querySelector(".card").addEventListener("click", () => {
      dialog.showModal();
    }); // Affiche le dialog lorsque la carte est cliquée
    this.shadowRoot
      .querySelector("#closeDialog")
      .addEventListener("click", () => {
        dialog.close();
      }); // Ferme le dialog lorsque le bouton de fermeture est cliqué
  }
}

// Enregistrement de l'élément personnalisé "product-card"
customElements.define("product-card", ProductCard);
