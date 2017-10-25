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

    var shortlisted = data[counter].shortlisted;
    var td = $('<td>');
    td.text(shortlisted);
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
