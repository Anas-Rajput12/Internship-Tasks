const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");
const charCounter = document.getElementById("charCounter");
const loader = document.getElementById("loader");

// Character counter
messageField.addEventListener("input", () => {
  const length = messageField.value.length;
  charCounter.textContent = `${length}/20`;
});

// Form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Reset messages
  errorMsg.textContent = "";
  successMsg.textContent = "Thanks For Contact!";
  loader.style.display = "block";
    setTimeout(() => {
    successMsg.textContent = "";
    }, 3000);

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const subject = subjectField.value.trim();
  const message = messageField.value.trim();

  // Validation
  if (!name || !email || !message) {
    loader.style.display = "none";
    errorMsg.textContent = "Please fill all required fields.";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    loader.style.display = "none";
    errorMsg.textContent = "Invalid email format.";
    return;
  }

  if (message.length < 20) {
    loader.style.display = "none";
    errorMsg.textContent = "Message must be at least 20 characters.";
    return;
  }

  const contactData = { name, email, subject, message };

  // ✅ Save to localStorage
  let savedContacts = JSON.parse(localStorage.getItem("contactMessages")) || [];
  savedContacts.push(contactData);
  localStorage.setItem("contactMessages", JSON.stringify(savedContacts));

  // ✅ Simulated API call
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    });

    if (response.ok) {
      const data = await response.json();
      console.log("API Response (simulated):", data);

      successMsg.textContent = "Message sent successfully!";
      form.reset();
      charCounter.textContent = "0/20";

      setTimeout(() => {
        successMsg.textContent = "";
      }, 3000);
    } else {
      errorMsg.textContent = "Failed to send. Try again later.";
    }
  } catch (error) {
    errorMsg.textContent = "Network error. Please try again.";
  } finally {
    loader.style.display = "none";
  }
});

// Reset handler
form.addEventListener("reset", () => {
  errorMsg.textContent = "";
  successMsg.textContent = "";
  charCounter.textContent = "0/20";
  loader.style.display = "none";
});
