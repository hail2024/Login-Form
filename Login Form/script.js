document.getElementById('myForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === '' || email === '') {
      alert('Please fill out all fields.');
      event.preventDefault();
    } else if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
    } else {
      alert('Form submitted successfully!');
    }
  });
  