// ✅ FORM VALIDATION + WHATSAPP LINK
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const childAge = form.child_age.value.trim();
    const type = form.type.value;
    const message = form.message.value.trim();

    if (!name || !email || !childAge || !type || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
      return;
    }

    // ✅ Show confirmation message
    confirmation.classList.remove("hidden");

    // ✅ WhatsApp redirect (simulate message to admin)
    const adminPhone = "94777579821";
    const waMessage = `New ${type} from ${name}%0AChild Age: ${childAge}%0AContact: ${email}%0AMessage: ${message}`;
    window.open(`https://wa.me/${adminPhone}?text=${waMessage}`, "_blank");
  });

  // ✅ Animate sections on scroll
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("hidden-section");
    observer.observe(section);
  });
});
