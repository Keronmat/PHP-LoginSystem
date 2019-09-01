<?php 

	// Allow the config
	define('__CONFIG__', true);
	// Require the config
	require_once "inc/config.php"; 

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="follow">

    <title>Login | Registration</title>

    <base href="/" />
    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>

  <body>
  <nav id="nav-bar">
    <ul>
      <li><a class="nav-link" href="/login.php">login</a></li>
      <li><a class="nav-link" href="/register.php">Register</a></li>
    </ul>
    <a href="#" class="close-menu">
      <span></span>
</a>

  </nav>
  <main id="main-content">
   
      <header class="header">
        <div class="menu">
        <div class="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>menu</span>
</div>
      </header>
      <div class="blurred-bg"></div>

    <section class="content">
    <h1>lets begin the journey</h1>
    <a class="join-us-button" href="/register.php"><span class="gradient"></span>Join the Community</a>
    </section>
  </main>
  

</div>
  		
  

  	<?php require_once "inc/footer.php"; ?> 
  </body>
</html>
