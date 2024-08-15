const User = {
  _email: "ak@gmail.com",
  _pass: "121dnscsd",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this.email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
