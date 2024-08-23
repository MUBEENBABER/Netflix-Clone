document.addEventListener('DOMContentLoaded', () => {
    // Email validation
    const getStartedBtn = document.getElementById('get-started-btn');
    const emailInput = document.querySelector('input[type="email"]');
  
    getStartedBtn.addEventListener('click', () => {
      const email = emailInput.value;
      if (!validateEmail(email)) {
        alert('Please enter a valid email address');
      } else {
        alert('Email submitted successfully!');
      }
    });
  
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(String(email).toLowerCase());
    }
  });
  