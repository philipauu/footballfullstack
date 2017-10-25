function shortlist() {
  console.log('inside shortlist');
  $.get('backend/players/shorlist.php').done(display_shortlist).fail(blow_up);
}

function display_shortlist(data) {
  console.log('inside display_shorlist');
  data = JSON.parse(data);
  console.log(data);
  // hopefully shows a list of players
  $('#list_shortlist').append(data);

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
    button.addClass('btn btn-grey delete');
    button.text('Delete');
    td.append(button);
    tr.append(td);



    //delete button

    // var td = $('<td>');
    // var button = $('<button>');
    // button.addClass('btn btn-danger delete');
    // button.text('delete');
    // td.append(button);
    // tr.append(td);

    $('#list_shortlist tbody').append(tr);
  }

  // $('.edit').click(do_edit);
  $('.delete').click(do_delete);
}

// function do_edit() {
//   console.log($(this));
// }

function do_delete() {
console.log($(this));
}
