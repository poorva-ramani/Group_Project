$(function () {
  $('#btn-login').click(function (event) {
    event.preventDefault();
    var username = $('#login-username').val().trim();
    var password = $('#login-password').val().trim();

    if (username === "" || password === "") {
      return alert("Please enter valid username and password");
    }
  
    $.ajax("/api/signin", {
      type: "POST",
      data: {
        username: username,
        password: password
      }
    }).then(function (data) {
      location.href = "/homepage";
      window.location.replace(data);
    });

    $('#login-username').val("");
    $('#login-password').val("");
  });

  $('#btn-logout').click(function (event) {
    event.preventDefault();
    location.href = "/logout";
  });

  $('#btn-home').click(function (event) {
    event.preventDefault();
    console.log("btn homepage")
    location.href = "/homepage";
    window.location.replace(data);
  });

  $('#btn-profile').click(function (event) {
    event.preventDefault();
    $.get("/api/profile").then(function (data) {
      location.href = "/profile";
      window.location.replace(data);
    });
  });

  $('#link-signup').click(function (event) {
    event.preventDefault();
    location.href = "/signup";
  });

  $('#team-details').click(function (event) {
    event.preventDefault();
    location.href = "/team";
  });

  $('#btn-signup').click(function (event) {
    event.preventDefault();
    var firstname = $('#firstname').val().trim();
    var lastname = $('#lastname').val().trim();
    var mob_no = $('#mob_no').val().trim();
    var email_id = $('#email_id').val().trim();
    var username = $('#username').val().trim();
    var password = $('#password').val().trim();
    var favorite_games = $('#favorite_games').val().trim();
    var food_allergies = $('#food_allergies').val().trim();
    var drink_preferences = $('#drink_preferences').val().trim();
    var board_games_owned = $('#board_games_owned').val().trim();


    $.ajax("/api/signup", {
      type: "POST",
      data: {
        'firstname': firstname,
        'lastname': lastname,
        'mob_no': mob_no,
        'email_id': email_id,
        'username': username,
        'password': password,
        'favorite_games': favorite_games,
        'food_allergies': food_allergies,
        'drink_preferences': drink_preferences,
        'board_games_owned': board_games_owned
      }
    }).then(
      function (user) {
        if (user != null) {
          location.href = "/homepage";
        } else {
          alert("fields are empty");
        }
      });
  });

});