/*-- 
   Mohammed Kabir
   File: main.js
	 Mohammed_kabir@student.uml.edu
	 GUI Programming I
	 Date: 6/24/2022
   This file creates sliders based on the user input
   source: https://www.w3schools.com/jquery/default.asp 
*/
document.querySelector("#button_submit").onclick = function() 
{

  if ($("#form").valid() != true) {
    $("#multipl_Table").empty();
    return false;
  }

  $("#slider_hor_start").slider({
    min: -50,
    max: 50,
    slide: function(event, ui) {
      $("#horiz_start").val(ui.value);
      auto_submit();  
    }
  });
  $("#horiz_start").on("keyup", function() {
    $("#slider_hor_start").slider("value", this.value);
    auto_submit(); 
  });

  $("#slider_hor_end").slider({
    min: -50,
    max: 50,
    slide: function(event, ui) {
      $("#horiz_end").val(ui.value);
      auto_submit();
    }
  });
  $("#horiz_end").on("keyup", function() {
    $("#slider_hor_end").slider("value", this.value);
    auto_submit(); 
  });

  $("#slider_vert_start").slider({
    min: -50,
    max: 50,
    slide: function(event, ui) {
      $("#vert_start").val(ui.value);
      auto_submit();  
    }
  });
  $("#vert_start").on("keyup", function() {
    $("#slider_vert_start").slider("value", this.value);
    auto_submit(); 
  });

  $("#slider_vert_end").slider({
    min: -50,
    max: 50,
    slide: function(event, ui) {
      $("#vert_end").val(ui.value);
      auto_submit();  
    }
  });
  $("#vert_end").on("keyup", function() {
    $("#slider_vert_end").slider("value", this.value);
    auto_submit();  
  });
}