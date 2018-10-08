$(document).ready(function() {

  $("#draggable").draggable({
    revert: true
  });

  $("#draggablenew").draggable({
    revert: true
  });
  
  $("#droppable").droppable({
        // activeClass: "active",
        drop: function (event, ui) {                                                // here we specify the function to be run when the drop event
        $(this).html(ui.draggable.text());                                          // is triggered.
    }
  });
});
