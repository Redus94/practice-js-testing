export default class User {
  constructor(object) {
    const { email, password } = object;

    if (!email.includes("@")) {
      this.throwError('email must have @"');
    }

    if (password.length < 8) {
      this.throwError("password must be longer than 8 characters");
    }

    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  login() {
    return this.email.includes("devmentor.pl");
  }

  throwError = (error) => {
    throw new Error(error);
  };
}
