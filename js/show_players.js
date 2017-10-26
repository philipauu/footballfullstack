var shortlist_button;

function show_players() {
  console.log('inside show_players');
  $.get('backend/players/show_players.php').done(display_players).fail(blow_up);
}

function display_players(data) {
  console.log('inside display_players');
  data = JSON.parse(data);
  console.log(data);
  // hopefully shows a list of players
  $('#list_players').append(data);

  for (var counter = 0; counter < data.length; counter++) {

    var tr = $('<tr>');

    var first_name = data[counter].first_name;
    var td = $('<td>');
    td.text(first_name);
    tr.append(td);

    var last_name = data[counter].last_name;
    var td = $('<td>');
    td.text(last_name);
    tr.append(td);

    var age = data[counter].age;
    var td = $('<td>');
    td.text(age);
    tr.append(td);

    var position = data[counter].position;
    var td = $('<td>');
    td.text(position);
    tr.append(td);

    var foot = data[counter].foot;
    var td = $('<td>');
    td.text(foot);
    tr.append(td);

    var nationality = data[counter].nationality;
    var td = $('<td>');
    td.text(nationality);
    tr.append(td);

    var club = data[counter].club;
    var td = $('<td>');
    td.text(club);
    tr.append(td);

    //add data here...

    var td = $('<td>');
    var button = $('<button>');
    button.addClass('btn btn-grey shortlist');
    button.attr("id", data[counter].player_id);
    button.text('Shortlist');
    td.append(button);
    tr.append(td);



    //delete button

    // var td = $('<td>');
    // var button = $('<button>');
    // button.addClass('btn btn-danger delete');
    // button.text('delete');
    // td.append(button);
    // tr.append(td);

    $('#list_players tbody').append(tr);
  }

  // $('.edit').click(do_edit);
  $('.shortlist').click(do_shortlist);
}

// function do_edit() {
//   console.log($(this));
// }

function do_shortlist() {
player_id=$(this).attr("id");
shortlist_button = $(this);
var data = {user:1, player_id:player_id};
$.get("backend/players/backend_add_to_shortlist.php", data).done(added_to_shortlist).fail(blow_up);
}

function added_to_shortlist(data){
  console.log('added to shortlist');
  console.log(data);
  shortlist_button.text("Added!").off().removeClass("btn-grey").addClass("btn-danger");
  }
