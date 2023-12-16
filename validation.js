function validateForm() {
  var firstName = document.getElementById('First name').value;
  var lastName = document.getElementById('last name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Validate First Name (No numeric characters)
  if (!/^[a-zA-Z]+$/.test(firstName)) {
    alert('Please enter a valid first name without numeric characters.');
    return false;
  }

  // Validate Last Name (No numeric characters)
  if (!/^[a-zA-Z]+$/.test(lastName)) {
    alert('Please enter a valid last name without numeric characters.');
    return false;
  }

  // Validate Email
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Validate Message
  if (message.trim() === '') {
    alert('Please enter a message.');
    return false;
  }

  return true; // Form is valid
}
