// CV Download Button
document.getElementById('downloadCV').addEventListener('click', function () {
    alert('CV download is not available yet.');
  });
  
  // Contact Form Submission
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate form fields
    if (name && email && message) {
      alert(`Thank you for your message, ${name}!`);
      
      // Reset the form after successful submission
      document.getElementById('contactForm').reset();
    } else {
      // Display an alert if any field is missing
      alert('Please fill out all fields.');
    }
  });
  