<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/reset.css">
	<link rel="icon" type="image/x-icon" href="assets/images/keyboard_3x-removebg-preview.png">
	<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
	<script src="js/navScript.js" defer></script>
	<title>Home</title>
</head>

<?php

$servername = "db";
$username = "root";
$password = "root";
$dbname = "opdracht_cloud";

$mysqli = new mysqli($servername, $username, $password, $dbname);

if ($mysqli->connect_error) {
    die("connection error: " . $mysqli->connect_error);
}

$createTable = "
CREATE TABLE IF NOT EXISTS contacts (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	age INT(3) NOT NULL,
	email VARCHAR(100) NOT NULL,
	visit_time DATETIME not null
)";

if ($mysqli->query($createTable) === false) {
	die("error creating table: " . $mysqli->error);
}

date_default_timezone_set('Europe/Brussels');
$current_time = date("Y-m-d H:i:s");
$name = "Jordy";
$age = 28;
$email = "vandevkieboom@gmail.com";

$stmt = $mysqli->prepare("INSERT INTO contacts (name, age, email, visit_time) VALUES (?, ?, ?, ?)");
$stmt->bind_param("siss", $name, $age, $email, $current_time);

if ($stmt->execute() === false) {
    die("error logging the visitor: " . $stmt->error);
}

$stmt->close();
$mysqli->close();

echo "new visitor added: $name";

?>

<body>
  <header>
    <button class="hamburger">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>
    <a href="index.html"><img class="logo" src="assets/images/Logowebshop-removebg-preview.png" alt="logo"></a>
    <nav class="main-nav" id="nav-menu">
      <a href="index.html">Home</a>
      <a href="shop.html">Toetsenborden</a>
			<a href="klanten.html">Klanten</a>
      <a href="contact.html">Contact</a>
    </nav>
    <figure class="icons">
			<form id="search-bar" class="show-search-bar" action="#">
				<button id="submit-button" type="submit"><img src="assets/images/search-square.512x512.png"></button>
				<input type="search">
			</form>
      <img src="assets/images/search-interface-symbol.png" alt="search icon" id="search-icon">
      <!-- <img src="assets/images/user(2).png" alt="user icon"> -->
      <img id="cart-icon" src="assets/images/shopping-bag-removebg-preview.png" alt="shopping cart icon">
    </figure>
  </header>

  <section class="banner">
    <img src="assets/images/katharina-gloth-dbgbyzFR8uI-unsplash.webp" alt="banner image">
  </section>

	<main>
			<h1 id="product-title">Populairste Producten</h1>
			<section class="featured-products">
				<figure>
					<a href="productkeychron.html">
						<img src="assets/images/keychron-removebg-preview.png" alt="foto keychron">
					</a>
						<figcaption>Keychron Q1<br>€210,00</figcaption>
				</figure>

				<figure>
					<a href="productapexpro.html">
						<img src="assets/images/apexpro-removebg-preview.png" alt="foto apex pro">
					</a>
						<figcaption>SteelSeries Apex Pro<br>€210,99</figcaption><br>
				</figure>

				<figure>
					<a href="producthuntsman.html">
							<img src="assets/images/huntsman-removebg-preview.png" alt="foto huntsman">
					</a>
						<figcaption>Razer Huntsman V2<br>€150,19</figcaption><br>
				</figure>

				<figure>
					<a href="productiqunixzx.html">
							<img src="assets/images/iqunix-removebg-preview.png" alt="foto iqunix">
					</a>
						<figcaption>iQunix ZX75<br>€185.07</figcaption><br>
				</figure>
			</section>

		<section class="about-me">
			<a href="https://www.linkedin.com/in/vanDevkieboom/">
					<img src="assets/images/jordy.png" alt="photo of developer" class="about-me-image">
			</a>
			<article class="about-me-text">
					<h2>Over Mezelf</h2>
					<p>
						Als enthousiaste deelnemer aan typewedstrijden en liefhebber van mechanische toetsenborden, heb ik een
						diepgaande kennis voor hun technologie.<br>
						Mijn webshop voor mechanische toetsenborden streeft ernaar klanten uitstekende productinformatie en
						klantenservice te bieden.<br> Mijn doel is om anderen te helpen bij het vinden van het perfecte
						mechanische toetsenbord dat aan hun behoeften voldoet en deel te nemen aan mijn passie voor deze
						technologie.
					</p>
			</article>
		</section>
	</main>

	<footer class="footer">
		<p>
			<span>
				&copy; Jordy Van Den Kieboom
			</span>
			<span>
				alle rechten voorbehouden
			</span>
		</p>

		<a href="https://twitter.com/vanDevKieboom">
			<figure>
				<img src="assets/images/twitter.png" alt="icon twitter">
				<figcaption>
					vanDevkieboom
				</figcaption>
			</figure>
		</a>
	</footer>
</body>
</html>
