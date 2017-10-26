<?php

require_once('../common/connection.php');
require_once('../common/logger.php');

$db = new DbConnect($app_user, $app_pass);

$user = $_GET["user"];

$sql = "SELECT first_name, last_name, age, position, foot, nationality, club, user from players2 inner join user_picks on players2.player_id=user_picks.player_id inner join users on user_picks.user_id=users.user_id WHERE user_picks.user_id='$user'";

$result = $db -> conn -> query($sql);

if ($result) {
  $output = $result -> fetchALL();
  //logger ($output);
  echo json_encode($output);
// do true stuff
} else {
  logger ($db -> conn -> error);
  //do false stuff
}
