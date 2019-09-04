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

	<title>Registration Page</title>

	<base href="/" />
	<link  media="all" rel="stylesheet" type="text/css" href="/assets/css/stylesRegister.css" />
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
		<section class="register-content">
			<div class="js-error"></div>
			<div class="container">
				<form class="js-register">

					<h1>Join us</h1>
					<input name="email" id="form-email" type="email" required placeholder="E-mail">

					<input name="pass" id="form-password" type="password" required placeholder="Password">

					<button class="register-button" type="submit">Register</button>
					<div id="container-inner">
						<a id="login-button" href="/login.php">already a member ?</a>

					</div>
				</form>
			</div>
		</section><!-- Page Content Ends -->
	</main>
	<?php require_once "inc/footer.php"; ?>
</body>

</html>