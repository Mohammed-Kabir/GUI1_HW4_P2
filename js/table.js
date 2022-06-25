/*-- 
   Mohammed Kabir
   File: table.js
	 Mohammed_kabir@student.uml.edu
	 GUI Programming I
	 Date: 6/24/2022
   This file validate the user input before genarating the table and then 
   calculate the table and load table in html.
    source: https://www.w3schools.com/jquery/default.asp 
*/


function auto_submit() {
  if( $("form#mult_form").valid() == true ) {
    $("form#mult_form").submit();
  }
}
document.querySelector("#button_submit").onclick = function() 
{

    if ($("#form").valid() != true) {
        /* generate the table if the its a valid form
         clear table if there already a table */
        $("#multipl_Table").empty();
        return false;
    }

    var hor_start = Number(document.getElementById('horiz_start').value);
    var vert_start = Number(document.getElementById('vert_start').value);
    var hor_end = Number(document.getElementById('horiz_end').value);
    var vert_end = Number(document.getElementById('vert_end').value);
  
    // Check for the correct readness of the number
    console.log("Horizontal start: ", hor_start);
    console.log("Horizontal end: ", hor_end);
    console.log("Vertical start: ", vert_start);
    console.log("Vertical end: ", vert_end);
  
    //Empty the div.
    $("#warning_msg").empty();
  
    //swap vertical beginning / ending if vertical start input bigger than vertical end input.
    if (vert_start > vert_end) 
    {
      // Alert the user about swap
      $("#warning_msg").append("<p class='warning_class'>swap between Vertical min and Vertical max.</p>");
      var temp_nm = vert_start;
      vert_start = vert_end;
      vert_end = temp_nm;
    }

    // Swap beginning / ending if horizontal start input bigger than horizontal end input.
    if (hor_start > hor_end) 
    {
      // Alert the user about swap
      $("#warning_msg").append("<p class='warning_class'>swap between Horizontal min and Horizontal max.</p>");
      var temp_nm = hor_start;
      hor_start = hor_end;
      hor_end = temp_nm;
    }

    var matrix_table = {}; 
    //calculate table_row and table_column we currently have.
    var table_row = Math.abs(hor_end - hor_start);
    var table_column = Math.abs(vert_end - vert_start);

    var horztl_strt = hor_start;
    var vertcl_strt = vert_start;

    for (var x = 0; x <= table_column; x++) {
      var temp_array = [];
  
      for (var y = 0; y <= table_row; y++) {
        var calculate_spot = horztl_strt * vertcl_strt;
        temp_array[y] = calculate_spot;
        horztl_strt++;
      }
      matrix_table["row" + x] = temp_array;
      horztl_strt = hor_start;     
      vertcl_strt++;
    }

    /*This part fill out the table and add the table in html*/  
    var table = "";
    table += "<table>";
    table += "<tr><td></td>";  
    //fill out the first row.
    for (var a = hor_start; a <= hor_end; a++) {
      table += "<td>" + a + "</td>";
    }
    table += "</tr>";
    var vertcl_strt = vert_start;
    for (var x = 0; x <= table_column; x++) 
    {
      table += "<tr><td>" + vertcl_strt + "</td>";
      for (var y = 0; y <= table_row; y++) {
        table += "<td>" + matrix_table["row" + x][y] + "</td>";
      }
      vertcl_strt++;
      table += "</tr>";
    }
    table += "</table>";
  
    //load the table in html.
    $("#multipl_Table").html(table);
    return false;
}



  