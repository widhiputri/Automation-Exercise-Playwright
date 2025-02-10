export const SELECTORS = {
    signup: {
      name: '[data-qa="signup-name"]',
      email: '[data-qa="signup-email"]',
      submitButton: '[data-qa="signup-button"]',
    },
    login: {
      email: '[data-qa="login-email"]',
      password: '[data-qa="login-password"]',
      submitButton: '[data-qa="login-button"]',
    },
    signupForm: {
      title: '#id_gender2',
      name: '[data-qa="name"]',
      password: '[data-qa="password"]',
      dayOfBirth: '[data-qa="days"]',
      monthOfBirth: '[data-qa="months"]',
      yearOfBirth: '[data-qa="years"]',
      firstName: '[data-qa="first_name"]',
      lastName: '[data-qa="last_name"]',
      company: '[data-qa="company"]',
      address: '[data-qa="address"]',
      addressLineTwo: '[data-qa="address2"]',
      countryDropdown: '[data-qa="country"]',
      state: '[data-qa="state"]',
      city: '[data-qa="city"]',
      zipcode: '[data-qa="zipcode"]',
      mobileNumber: '[data-qa="mobile_number"]',
      createAccountButton: '[data-qa="create-account"]',
      newsletter: '[name="newsletter"]',
      specialOffers: '[name="optin"]',
      continueButton: '[data-qa="continue-button"]',
      deleteAccount: 'a[href="/delete_account"]',
    },
  };
  