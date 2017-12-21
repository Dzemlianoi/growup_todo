var auth = {
  db: localStorage.users,

  register: function(email, password){
    var new_user = this.createUser(email, password);

    if (!this.db) {
      this.saveToDB({ 1: new_user });
    }else{
      if (this.isUniqueUser(email)) {
        var db = this.parseJSON(this.db);
        var db_last_key_number = Object.keys(db).length;
        db[db_last_key_number + 1] = new_user;
        this.saveToDB(db);
      }else{
        return false;
      }
    }
    return true;
  },

  clickRegisterButton: function(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var conf_password = document.getElementById('confirm_password');

    var email_errors = new emailChecker(email.value).checkEmail();
    var password_errors = new passwordChecker(password.value).checkPassword();
    var confirm_password_errors = new confirmPasswordChecker(conf_password.value, password.value).confirmPassword();

    if (email_errors.length == 0 && password_errors.length == 0 && confirm_password_errors.length == 0){
      if (auth.register(email.value, password.value)) {
        render.clickLogin();
        render.showSuccessReg('Спасибо за регистрацию!');
        render.clearForm('registration');
      } else {
        render.showErorrReg('Такой пользователь уже зарегистрирован!');
      }
    }else{
      render.setErrors(email_errors, email);
      render.setErrors(password_errors, password);
      render.setErrors(confirm_password_errors, conf_password);
    }
  },

  authorize: function(email, password){
    var db = this.parseJSON(this.db);
    for (key in db) {
      if (db[key].email == email && db[key].password == password){
        localStorage.current_user_id = key;
        return true;
      }
    }
  },

  clickSigninButton: function(){
    var auth_email = document.getElementById('login_email');
    var auth_password = document.getElementById('login_password');
    if (!auth.authorize(auth_email.value, auth_password.value)) {
      render.showAuthorizeError('Неправильный логин или пароль.');
    } else {
      render.openAuthorizeWindow('Добро пожаловать, ' + auth_email.value);
      render.showAuthorized();
    }
  },

  unLogin: function(){
    render.showGuest();
    localStorage.removeItem('current_user_id');
  },

  createUser: function(email, password) {
    return {
      email: email,
      password: password
    };
  },

  saveToDB: function(db) {
    localStorage.users = this.toJSON(db);
    this.db = this.toJSON(db);
  },

  isUniqueUser: function(email){
    var db = this.parseJSON(this.db)
    for (key in db) {
      if (db[key].email == email){
        return false;
      }
    }
    return true;
  },

  toJSON: function(obj){
    return JSON.stringify(obj);
  },

  parseJSON: function(obj){
    return JSON.parse(obj);
  }
}
