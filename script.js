// ✅ Basic JavaScript Form Validation
function validateForm() {
  const form = document.forms["contactForm"];
  const name = form["name"].value.trim();
  const email = form["email"].value.trim();
  const message = form["message"].value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  // Simple email validation
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Thank you! Your message has been sent.");
  return true;
}

// ✅ Smooth Scroll for Internal Links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
