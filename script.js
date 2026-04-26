// NAVBAR
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// EDUCATION SECTION
const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
});

// SKILLS SECTION
const skillHeaders = document.querySelectorAll(".skill-header");

skillHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const toggle = header.querySelector(".toggle");

    const isOpen = content.style.maxHeight;

    document.querySelectorAll(".skill-content").forEach(c => c.style.maxHeight = null);
    document.querySelectorAll(".toggle").forEach(t => t.textContent = "+");

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      toggle.textContent = "−";
    }
  });
});

// PROJECTS SECTION

function openProject() {
    document.getElementById("projectModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    let modal = document.getElementById("projectModal");
    if (event.target == modal) {
        closeProject();
    }
}

// CONTACTS SECTION

 emailjs.init("9Msqin4PxsRVdVLgK");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    if (name === "" || email === "" || message === "") {
      status.textContent = "Please fill out all fields.";
      return;
    }

    status.textContent = "Sending message...";

    emailjs.sendForm("service_m0mp0ud", "template_n0xdfzd", form)
      .then(() => {
        status.textContent = "Message sent successfully!";
        form.reset();
      })
      .catch(() => {
        status.textContent = "Failed to send message. Try again.";
      });
  });