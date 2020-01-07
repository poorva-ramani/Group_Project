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

  $('#btn-signup').click(function(event){
    event.preventDefault();
      location.href = "/signup";
  });
});