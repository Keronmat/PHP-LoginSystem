<?php

// Allow the config
define('__CONFIG__', true);
// Require the config
require_once "inc/config.php";

Page::ForceDashboard();
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="follow">

	<title>Login Page</title>

	<base href="/" />
	<link rel="stylesheet" href="/assets/css/stylesLogin.css" />
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
		<!-- Page Content -->
		<section class="content">
		<div class="js-error"></div>
			<div class="container">
			<h1>Log in</h1>
			<form class="js-login">
			
				<input name="email" id="form-email" type="email" required placeholder="E-mail">

				<input name="pass" id="form-password" type="password" required placeholder="Password">

				<button class="login-button" type="submit">Log in</button>
				<div id="container-inner">
					<input type="checkbox" class="checkbox" checked="checked" />
					<span id="remember">Remember me</span>
					<a id="register-button" href="/register.php">Register</a>

				</div>


			</form>
			</div>
			
		</section><!-- Page Content Ends -->
	</main>


	</div>
	<?php require_once "inc/footer.php"; ?>

</body>

</html>