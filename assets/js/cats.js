const container = document.getElementById("apiCatContainer");

if (container) {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1")
    .then(res => res.json())
    .then(cats => {

      cats.forEach(cat => {

        const card = document.createElement("div");
        card.classList.add("cat-item");

        card.innerHTML = `
          <img src="${cat.url}" alt="cat">
          <p class="cat-name">Cute Cat</p>
          <span class="cat-country">Unknown</span>
        `;

        container.appendChild(card);
      });

    })
    .catch(err => console.log("API error:", err));
}