var render = {
  clickRegister: function() {
    document.getElementById('banner').classList.add('hidden');
    document.getElementById('authorization').classList.add('hidden');
    document.getElementById('authorize').classList.remove('active');
    document.getElementById('registration').classList.remove('hidden');
    document.getElementById('register_link').classList.add('active');
  },
  clickLogin: function() {
    document.getElementById('banner').classList.add('hidden');
    document.getElementById('registration').classList.add('hidden');
    document.getElementById('register_link').classList.remove('active');
    document.getElementById('authorization').classList.remove('hidden');
    document.getElementById('authorize').classList.add('active');
  },
  showErorrReg: function(text) {
    document.getElementById('banner').classList.remove('hidden');
    document.getElementById('banner').classList.remove('has-success-bg');
    document.getElementById('banner').classList.add('has-error-bg');
    document.getElementById('banner_inscr').innerText = text;
  },
  showSuccessReg: function(text) {
    document.getElementById('banner').classList.remove('hidden');
    document.getElementById('banner').classList.remove('has-error-bg');
    document.getElementById('banner').classList.add('has-success-bg');
    document.getElementById('banner_inscr').innerText = text;
  },
  clearForm: function(form_id) {
    var input = document.querySelectorAll('#' + form_id + ' input');
    input.forEach(function(elem) { elem.value = '' });
  },
  showAuthorizeError: function(text) {
    document.getElementById('banner').classList.remove('hidden');
    document.getElementById('banner').classList.remove('has-success-bg');
    document.getElementById('banner').classList.add('has-error-bg');
    document.getElementById('banner_inscr').innerText = text;
  },
  openAuthorizeWindow: function(text) {
    render.clearForm('authorization');
    document.getElementById('banner').classList.remove('hidden');
    document.getElementById('banner').classList.remove('has-error-bg');
    document.getElementById('banner').classList.add('yellow');
    document.getElementById('banner_inscr').innerText = text;
    setTimeout(render.hideBanner, 5000);
  },
  showMenuAuthorized: function(){
    document.getElementById('exit').classList.remove('hidden');
    document.getElementById('my_lists').classList.remove('hidden');
    document.getElementById('authorize').classList.add('hidden');
    document.getElementById('register_link').classList.add('hidden');
  },
  showMenuNotAuthorized: function(){
    document.getElementById('exit').classList.add('hidden');
    document.getElementById('my_lists').classList.add('hidden');
    document.getElementById('authorize').classList.remove('hidden');
    document.getElementById('register_link').classList.remove('hidden');
  },

  showAuthorized: function(){
    document.getElementsByClassName('todolists')[0].classList.remove('hidden');
    document.getElementsByClassName('authentication')[0].classList.add('hidden');
    render.showMenuAuthorized();
    render.showTodoLists();
  },

  showTodoLists: function(){

  },

  createNewTodolist: function(){
    var todolist_block = document.createElement('div');
    todolist_block.classList.add('todolist');
    todolist_block.innerText = 'New ToDo';
    document.getElementsByClassName('todolists_wrapper')[0].appendChild(todolist_block);
  },

  showGuest: function(){
    document.getElementsByClassName('todolists')[0].classList.add('hidden');
    document.getElementsByClassName('authentication')[0].classList.remove('hidden');
    render.showMenuNotAuthorized();
  },

  hideBanner: function(){
    document.getElementById('banner').classList.add('hidden');
  },

  setErrors: function(errors, element) {
    var parent = element.parentNode;
    var sibling = element.nextElementSibling;
    if (errors.length > 0) {
      var str = errors.join(',\n');
      parent.classList.add('has-error');
      parent.classList.remove('has-success');
      sibling.innerText = str;
    }else{
      parent.classList.remove('has-error');
      parent.classList.add('has-success');
      sibling.innerText = '\n';
    }
  }
}
