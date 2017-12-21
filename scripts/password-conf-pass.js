function passwordChecker(password) {
  MIN_LENGTH = 6;
  MAX_LENGTH = 25

  this.phrases = {
    min_length: "your password mush contain more than " + MIN_LENGTH + " symbols",
    max_length: "your password must contain less than " + MAX_LENGTH + " symbols",
    space: 'your password shouldnt contains spaces',
    dots: 'your password shouldnt contains dots',
    camel_case: 'your password should contains one uppercased letter',
    number: 'your password must contains 1 number'
  }

  this.password_errors = [];
  this.password = password;
  this.checkPassword = function() {
    this.checkLength();
    this.checkForSpaces();
    this.checkForDots();
    this.checkForCamelCaseLetter();
    this.checkForNumber();
    return this.password_errors;
  }

  this.checkLength = function() {
    if (this.password.length < MIN_LENGTH) {
      this.password_errors.push(this.phrases.min_length);
    }
    if (this.password.length > MAX_LENGTH) {
      this.password_errors.push(this.phrases.max_length);
    }
  }

  this.checkForSpaces = function(){
    if (this.password.indexOf(' ') != -1){
      this.password_errors.push(this.phrases.space);
    }
  }

  this.checkForDots = function(){
    if (this.password.indexOf('.') != -1){
      this.password_errors.push(this.phrases.dots);
    }
  }

  this.checkForCamelCaseLetter = function(){
    for (var i = 0; i < this.password.length; i++) {
      if (this.password[i] == this.password[i].toUpperCase() && isNaN(+this.password[i])){
        return;
      }
    }
    this.password_errors.push(this.phrases.camel_case);
  }

  this.checkForNumber = function(){
    for (var i = 0; i < this.password.length; i++) {
      if (!isNaN(+this.password[i])){
        return;
      }
    }
    this.password_errors.push(this.phrases.number);
  }
};

function confirmPasswordChecker(conf_password, password) {
  this.conf_password = conf_password;
  this.password = password;
  this.confirm_password_errors = [];
  this.phrases = {
    empty: 'Cant be empty',
    equality: 'Must be equal to password'
  }

  this.confirmPassword = function() {
    this.checkForNotEmpty();
    this.checkForEquality();
    return this.confirm_password_errors;
  }

  this.checkForNotEmpty = function() {
    if (this.conf_password.length == 0){
      this.confirm_password_errors.push(this.phrases.empty);
    }
  }

  this.checkForEquality = function() {
    if (this.conf_password != this.password){
      this.confirm_password_errors.push(this.phrases.equality);
    }
  }
}
