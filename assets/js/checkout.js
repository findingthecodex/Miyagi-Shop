const checkoutItems = document.getElementById("checkoutItems");
const totalPriceEl = document.getElementById("totalPrice");
const checkoutForm = document.getElementById("checkoutForm");

function renderCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  checkoutItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    checkoutItems.innerHTML = "<p>Your basket is empty 😿</p>";
    return;
  }

  cart.forEach((item) => {
    const price = 2000;
    total += price;

    checkoutItems.innerHTML += `
      <div class="cart-item">
        <div class="cart-left">
          <img src="${item.img}" alt="${item.name}">
          <div>
            <p class="cart-name">${item.name}</p>
            <p class="cart-origin">${item.origin}</p>
          </div>
        </div>
        <span>${price} kr</span>
      </div>
    `;
  });

  totalPriceEl.textContent = total;
}

checkoutForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.removeItem("cart");
  alert("Adoption request sent!");
  window.location.href = "/pages/adopt.html";
});

renderCheckout();