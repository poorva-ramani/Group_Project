$(function () {

  $('#btn-login').click(function(event){
      event.preventDefault();
      var username = $('#login-username').val().trim();
      var password = $('#login-password').val().trim();
      $.ajax("/api/signin", {
          type: "POST",
          data: { 'username': username,
          'password': password
        }
      }).then(
          function (user) {
            if(user!=null){
              location.href = "/dashboard";
            }else{
              alert("User and password are invalid");
            }
          }
      );
  });

  $('#btn-logout').click(function(event){
    event.preventDefault();
      location.href = "/";
  });
      
  $('#btn-home').click(function(event){
    event.preventDefault();
      location.href = "/dashboard";
  });

  $('#btn-profile').click(function(event){
    event.preventDefault();
      location.href = "/profile";
  });

  $('#link-signup').click(function(event){
    event.preventDefault();
      location.href = "/signup";
  });

  $('#btn-signup').click(function(event){
    event.preventDefault();
      var firstname = $('#firstname').val().trim();
      var lastname = $('#lastname').val().trim();
      var mob_no = $('#mob_no').val().trim();
      var email_id = $('#email_id').val().trim();
      var username = $('#username').val().trim();
      var password = $('#password').val().trim();

      $.ajax("/api/signup", {
          type: "POST",
          data: { 
            'firstname': firstname,
            'lastname': lastname,
            'mob_no': mob_no,
            'email_id': email_id,
            'username': username,
            'password': password,         
        }
      }).then(
          function (user) {
            console.log(user)
            if(user!=null){
              location.href = "/dashboard";
            }else{
              alert("fields are empty");
            }
          }
      );
  });
});