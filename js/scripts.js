$(document).ready(function() {

  $("form#blanks").submit(function(event) {
      // debugger; << Is this still needed? Perry told me in a code review we shouldn't leave code that is commented out :)
    var yourName = $("input#name").val();
    var favFood = $("input#favoriteFood").val();
    var favMusic = $("input#favoriteMusic").val();
    var description = $("textarea#theDescription").val();
    var favColor = $("input#color").val();

    $(".name").text(yourName);
    $(".favoriteFood").text(favFood);
    $(".favoriteMusic").text(favMusic);
    $(".theDescription").text(description);
    $(".favoriteColor").append(favColor);

    $("#user_input").show();

    event.preventDefault();
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
    });
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("#summary").click(function() {
    $("p").removeClass();
    $("p").addClass("green-background");
  });
});
