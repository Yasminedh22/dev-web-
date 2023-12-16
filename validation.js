function validateForm() {
  var firstName = document.getElementById('First name').value;
  var lastName = document.getElementById('last name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!/^[a-zA-Z]+$/.test(firstName)) {
    alert('Please enter a valid first name without numeric characters.');
    return false;
  }

  if (!/^[a-zA-Z]+$/.test(lastName)) {
    alert('Please enter a valid last name without numeric characters.');
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (message.trim() === '') {
    alert('Please enter a message.');
    return false;
  }

  return true; 
}
