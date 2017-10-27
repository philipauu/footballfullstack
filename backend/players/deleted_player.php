<?php

require_once('../common/connection.php');
require_once('../common/logger.php');

$db = new DbConnect($app_user, $app_pass);

$user = $_GET["user"];

$player_id = $_GET["player_id"];

$sql = "Insert into user_picks values (default, $user, $player_id)";

$result = $db -> conn -> query($sql);

if ($result) {

  echo json_encode("added");
// do true stuff
} else {
  logger ($db -> conn -> error);
  //do false stuff
}
