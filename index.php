<!DOCTYPE html>
<html>

<?php include('partials/head.php'); ?>

<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
  <?php include('partials/nav.php'); ?>

  <div class="jumbotron text-center">
    <h1>FOOTBALL SCOUTING DATABASE</h1>
    <p>U23 players from England, Spain, Germany and France</p>

    <form class="form-inline">
      <div class="input-group">
        <input type="email" class="form-control" size="50" placeholder="Email Address" required>
        <div class="input-group-btn">
          <button type="button" class="btn btn-danger">Subscribe</button>
        </div>
      </div>
    </form>

  </div>

  <div class="container-fluid bg-grey">
      <div class="row">
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-eye-open gi-5x"></span>
        </div>
        <div class="col-sm-8">
          <h2>Search For Rising Stars</h2>
          <h4><strong>PLAYERS:</strong> Below is a list of players with great potential</h4>
          <p><strong>VISION:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>

<input type="text" size="30" onkeyup="showResult(this.value)" placeholder="Search...">
<div id="livesearch"></div>

<table id="list_players" class="table">

  <thead>

    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Position</th>
      <th>Foot</th>
      <th>Nationality</th>
      <th>Club</th>
      <th>Shortist Player</th>

    </tr>

  </thead>
<tbody>
</tbody>

</table>

<?php include('partials/footer.php'); ?>
</body>

</html>
