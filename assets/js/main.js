$(document).on("submit", "form.js-register", function(event) {
  event.preventDefault();

  var _form = $(this);
  var _error = $(".js-error");

  var dataObj = {
    full_name: $("input[type='text']", _form).val(),
    email: $("input[type='email']", _form).val(),
    password: $("input[type='password']", _form).val()
  };

  if (dataObj.email.length < 6) {
    _error.text("Please enter a valid email address").show();
    return false;
  } else if (dataObj.password.length < 8) {
    _error
      .text("Please enter a passphrase that is at least 8 characters long.")
      .show();
    return false;
  }

  // Assuming the code gets this far, we can start the ajax process
  _error.hide();

  $.ajax({
    type: "POST",
    url: "/ajax/register.php",
    data: dataObj,
    dataType: "json",
    async: true
  })
    .done(function ajaxDone(data) {
      // Whatever data is
      if (data.redirect !== undefined) {
        window.location = data.redirect;
      } else if (data.error !== undefined) {
        _error.text(data.error).show();
      }
    })
    .fail(function ajaxFailed(e) {
      // This failed
      console.log(e);
    })
    .always(function ajaxAlwaysDoThis(data) {
      // Always do
      console.log(data);
    });

  return false;
});
// login page
$(document).on("submit", "form.js-login", function(event) {
  event.preventDefault();

  var _form = $(this);
  var _error = $(".js-error");

  var dataObj = {
    email: $("input[type='email']", _form).val(),
    password: $("input[type='password']", _form).val()
  };

  if (dataObj.email.length < 6) {
    _error.text("Please enter a valid email address").show();
    return false;
  } else if (dataObj.password.length < 8) {
    _error
      .text("Please enter a passphrase that is at least 8 characters long.")
      .show();
    return false;
  }

  // Assuming the code gets this far, we can start the ajax process
  _error.hide();

  $.ajax({
    type: "POST",
    url: "/ajax/login.php",
    data: dataObj,
    dataType: "json",
    async: true
  })
    .done(function ajaxDone(data) {
      // Whatever data is
      if (data.redirect !== undefined) {
        window.location = data.redirect;
      } else if (data.error !== undefined) {
        _error.html(data.error).show();
      }
    })
    .fail(function ajaxFailed(e) {
      // This failed
      console.log(e);
    })
    .always(function ajaxAlwaysDoThis(data) {
      // Always do
      console.log(data);
    });

  return false;
});
//Page button
$(document).ready(function() {
  function openMenu() {
    const menuButton = $(".menu");
    const navbar = $("#nav-bar");

    menuButton.on("click", function() {
      navbar.show();
    });
  }

  function closeMenu() {
    const navbar = $("#nav-bar");
    const closeButton = $(".close-menu");

    closeButton.on("click", function() {
      navbar.hide();
    });
  }

  openMenu();
  closeMenu();
});
