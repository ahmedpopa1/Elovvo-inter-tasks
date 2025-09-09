
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fullName || !email || !subject || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }
 
  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";

  document.getElementById("contactForm").reset();
});
