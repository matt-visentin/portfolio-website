(function() {
  let form = document.querySelector('#contact-form');
  let submitButton = document.querySelector("#button-submit-message")
  let emailInput = document.querySelector("#contact-email");
  let nameInput = document.querySelector("#contact-name");
  let messageInput = document.querySelector("#contact-message");

  function showErrorMessage(input, message) {
      let container = input.parentElement;
      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }
      if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    }

  function validateEmail() {
    let emailValue = emailInput.value;
  
    if (!emailValue) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    if (emailValue.indexOf(".") === -1) {
      showErrorMessage(emailInput, 'You must enter a valid Email address.');
      return false;
    }
    if (emailValue.indexOf("@") === -1) {
      showErrorMessage(emailInput, 'You must enter a valid Email address.');
      return false;
    }
    showErrorMessage(emailInput, null);
    return true;
  }

  function validateName() {
      let nameValue = nameInput.value;

      if (!nameValue) {
          showErrorMessage(nameInput, 'Name is a required field.');
          return false;
        }
        showErrorMessage(nameInput, null);
        return true;
  }
  function validateMessage() {
      let messageValue = messageInput.value;

      if (!messageValue) {
          showErrorMessage(messageInput, 'Name is a required field.');
          return false;
        }
        showErrorMessage(messageInput, null);
        return true;
  }

    submitButton.addEventListener('click', () => {
      validateEmail();
      validateName();
      validateMessage();
    })

  emailInput.addEventListener("input", validateEmail);
  nameInput.addEventListener("input", validateName);
})();