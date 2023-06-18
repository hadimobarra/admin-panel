export function validateName(name) {
    // Regex pattern for validating alphanumeric characters and spaces
    const regex = /^[a-zA-Z\s]*$/;
    
    // Test the name against the regex pattern and check if it's not empty
    return regex.test(String(name)) && name.trim().length > 0;
  }

export function validateEmail(email) {
    // Regex pattern for validating email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email against the regex pattern
    return regex.test(String(email).toLowerCase());
  }

  