//BE
function ToDo(what) {
  this.what = what;
}

//FE
$(document).ready(function() {

  $("form#to-do-form").submit(function(event) {
    event.preventDefault();

    var inputtedToDoItem = $("input#to-do-item").val();

    var newToDo = new ToDo(inputtedToDoItem);

    $("ul#to-do-list").append("<li><span class='item'>" + newToDo.what + "</span></li>");

    $("input#to-do-item").val("");
  });
});
