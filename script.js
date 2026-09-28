const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeBtn.textContent = dark ? "☀" : "☾";
  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".demo-link").forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Add your real project/demo URL in index.html.");
    }
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = "Sending...";

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) throw new Error(result.message || "Something went wrong.");

    formStatus.textContent = "Message sent successfully!";
    form.reset();
  } catch (error) {
    formStatus.textContent =
      "Backend is not running. You can still use the email/social links above.";
  }
});
