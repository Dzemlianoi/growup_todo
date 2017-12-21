function emailChecker(email) {
  this.language = 'en',
  this.phrases = {
    ru:{
      email_empty: '1',
      email_doggy: '2',
      email_dot: '3',
      email_minlength: '4',
      email_spaces: '5',
      email_doggy_first: '6',
      email_dot_after_dog: '7',
      email_dot_not_last: '8',
      email_letter_beetween: '9'
    },

    en: {
      email_empty: 'email cant be empty',
      email_doggy: 'email must contain doggy',
      email_dot: "email must contain dot",
      email_minlength: "length your email must be less 15 symbols",
      email_spaces: "email mush not contain space",
      email_doggy_first: "befor @ must contain something",
      email_dot_after_dog: ". must stay after @",
      email_dot_not_last: "after . mush stay something",
      email_letter_beetween: "between @ and . must stay something",
      win: "you win"
    }
  }

  this.errors = [];
  this.MAX_LENGTH = 20;
  this.email = email;

  this.checkEmail = function() {
    this.mainChecks();
    this.extraChecks();
    return this.errors;
  };
  this.mainChecks = function() {
    this.checkForLength();
    this.checkForDog();
    this.checkForDot();
  };

  this.showResult = function() {
    this.errors.length == 0
      ? this.saySuccess()
      : this.sayErrors();
  };

  this.extraChecks = function() {
    this.checkForMaxLength();
    this.checkForSpaces();
    this.checkForDogNotFirst();
    this.checkDotAfterDog();
    this.checkDotNotLast();
    this.checkLetterBeetweenDotAndDg();
  };

  this.checkForLength = function() {
    if (this.email.length == 0) {
      this.errors.push(this.phrases[this.language].email_empty);
    }
  };

  this.checkForDog = function() {
    if (this.email.indexOf("@") == -1) {
      this.errors.push(this.phrases[this.language].email_doggy);
    }
  };

  this.checkForDot = function() {
    if (this.email.indexOf(".") == -1) {
      this.errors.push(this.phrases[this.language].email_dot);
    }
  };

  this.checkForMaxLength = function() {
    if (this.email.length > this.MAX_LENGTH) {
      this.errors.push(this.phrases[this.language].email_minlength);
    }
  };

  this.checkForSpaces = function() {
    if (this.email.indexOf(" ") != -1) {
      this.errors.push(this.phrases[this.language].email_spaces);
    }
  };

  this.checkForDogNotFirst = function() {
    if (this.email.indexOf("@") == 0) {
      this.errors.push(this.phrases[this.language].email_doggy_first);
    }
  };

  this.checkDotAfterDog = function() {
    if (this.email.indexOf("@") > this.email.indexOf(".")) {
      this.errors.push(this.phrases[this.language].email_dot_after_dog);
    }
  };

  this.checkDotNotLast = function() {
    if (this.email[this.email.length - 1] == ".") {
      this.errors.push(this.phrases[this.language].email_dot_not_last);
    }
  };

  this.checkLetterBeetweenDotAndDg = function() {
    if ((this.email.indexOf(".") - this.email.indexOf("@")) < 2) {
      this.errors.push(this.phrases[this.language].email_letter_beetween);
    }
  };

};
