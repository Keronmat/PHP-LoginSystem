$(document).on("submit", "form.js-register", function(event) {
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
      console.log(data);
    })
    .fail(function ajaxFailed(e) {
      // This failed
      console.log(e);
    })
    .always(function ajaxAlwaysDoThis(data) {
      // Always do
      console.log(data);
    });
  console.log(dataObj);
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
//Page UI functions
$(document).ready(function() {
  openMenu();
  closeMenu();
  openSideMenuBar();
  setSidenavCloseListener();
  toggleDropdown();
});

const sidenavEl = $(".sidenav");

const GRID_NO_SCROLL_CLASS = "grid--noscroll";

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

function toggleClass(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// Add and remove provided class names to open side menu
function openSideMenuBar() {
  const menuIconEl = $(".header__menu");
  const sidenavEl = $(".sidenav");
  const SIDENAV_ACTIVE_CLASS = "sidenav--active";

  menuIconEl.on("click", function(e) {
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
  });
}

// close side nav
function setSidenavCloseListener() {
  const closeICon = $(".sidenav__brand-close");
  const sidenavEl = $(".sidenav");
  const SIDENAV_ACTIVE_CLASS = "sidenav--active";

  closeICon.on("click", function(e) {
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
  });
}
// toggle Dropdown

function toggleDropdown() {
  const userAvatar = $(".header__avatar");

  userAvatar.on("click", function(e) {
    const dropdown = $(this).children(".dropdown");
    toggleClass(dropdown, "dropdown--active");
  });
}
