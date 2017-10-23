function show_clubs() {
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

    var first_name = data[counter].first_name_id;
    var td = $('<td>');
    td.text(first_name);
    tr.append(td);

    var last_name = data[counter].last_name_id;
    var td = $('<td>');
    td.text(last_name);
    tr.append(td);



    //add data here...

    //edit button

    // var td = $('<td>');
    // var button = $('<button>');
    // button.addClass('btn btn-success edit');
    // button.text('edit');
    // td.append(button);
    // tr.append(td);


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
  // $('.delete').click(do_delete);
}

// function do_edit() {
//   console.log($(this));
// }
//
// function do_delete() {
//   console.log($(this));
// }
