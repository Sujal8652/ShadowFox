document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-cart").forEach(button => {
    button.addEventListener("click", () => {
      alert("✅ Added to Cart!");
    });
  });

  document.querySelectorAll(".btn-buy").forEach(button => {
    button.addEventListener("click", () => {
      alert("🛍️ Order Placed! Thank you for shopping with Fitness Freak.");
    });
  });
});
