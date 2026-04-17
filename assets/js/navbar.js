fetch("/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    updateCartCount();
  });
  
  function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.getElementById("cartCount");

  if (!badge) return;

  const count = cart.length;

  badge.textContent = count;

  if (count > 0) {
    badge.classList.add("show");
  } else {
    badge.classList.remove("show");
  }
}



// Denna funktion kan kallas när en katt läggs till i adoptionen
function addToCart(cat) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(cat);

  localStorage.setItem("cart", JSON.stringify(cart));

  showToast(`${cat.name} added to adoption 🐾`);
  
  updateCartCount();
}