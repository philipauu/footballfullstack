<?php
session_start();

if (!$_SESSION['logged_in']) {
  header("Location:shortlist.php");
}
?>

<?php include('partials/head.php'); ?>

<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
  <?php include('partials/nav.php'); ?>

  <div class="jumbotron text-center">
    <h1>SHORTLISTED PLAYERS</h1>
  </div>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nam et rem, aspernatur accusantium fugit dolorum itaque adipisci dolore vero, eos facere ullam, expedita totam fuga ad ea aperiam harum.</p>

<input type="text" size="30" onkeyup="showResult(this.value)" placeholder="Search...">
<div id="livesearch"></div>

<table id="list_shortlist" class="table">

  <thead>

    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Position</th>
      <th>Foot</th>
      <th>Nationality</th>
      <th>Club</th>
      <th>Remove Player</th>

    </tr>

  </thead>
<tbody>
</tbody>

</table>

<?php include('partials/footer.php'); ?>
</body>

</html>
