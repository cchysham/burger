
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");

      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("changed eaten to true");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim()
      };
 
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
});