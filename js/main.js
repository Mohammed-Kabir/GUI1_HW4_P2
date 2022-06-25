/*-- 
   Mohammed Kabir
   File: main.js
	 Mohammed_kabir@student.uml.edu
	 GUI Programming I
	 Date: 6/24/2022
   This file validate the user input before genarating the table

   source: https://www.w3schools.com/jquery/default.asp 
*/

function validate() 
{
  $("#form").validate({
    // validation rule
    rules: {
      horiz_start: {
        number: true,
        required: true,
        min: -50,
        max: 50,
        
      },
      horiz_end: {
        number: true,
        required: true,
        min: -50,
        max: 50,
        
      },
      vert_start: {
        number: true,
        required: true,
        min: -50,
        max: 50,
        
      },
      vert_end: {
        number: true,
        required: true,
        min: -50,
        max: 50,
      }
    },

    messages: {
      horiz_start: {
        number: "ERROR: invalid input.<br/>Enter a number between -50 to 50.",
        min: "ERROR: input too small.<br/>Enter a number greater than or equal to -50.",
        max: "ERROR: input is too large.<br/>Enter a number less than or equal to 50.",
        required: "ERROR: no number was entered.<br/>Enter a number between -50 to 50."
      },
      horiz_end: {
        number: "ERROR: invalid input.<br/>Enter a number between -50 to 50.",
        min: "ERROR: input too small.<br/>Enter a number greater than or equal to -50.",
        max: "ERROR: input is too large.<br/>Enter a number less than or equal to 50.",
        required: "ERROR: no number was entered.<br/>Enter a number between -50 to 50."
      },
      vert_start: {
        number: "ERROR: invalid input.<br/>Enter a number between -50 to 50.",
        min: "ERROR: input too small.<br/>Enter a number greater than or equal to -50.",
        max: "ERROR: input is too large.<br/>Enter a number less than or equal to 50.",
        required: "ERROR: no number was entered.<br/>Enter a number between -50 to 50."
      },
      vert_end: {
        number: "ERROR: invalid input.<br/>Enter a number between -50 to 50.",
        min: "ERROR: input too small.<br/>Enter a number greater than or equal to -50.",
        max: "ERROR: input is too large.<br/>Enter a number less than or equal to 50.",
        required: "ERROR: no number was entered.<br/>Enter a number between -50 to 50."
      }
    },
  });
}
