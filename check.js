var enterId = prompt('Please enter your ID number located on your badge.');

function checkIDNumber() {
  // a condition to see if user exsists by id numbers provided
  if (employeeIds.indexOf(enterId) > -1) {
    $(".result-alert").addClass("alert-success").removeClass("alert-warning");
    $(".result-alert").html("<p>Your photo is in the system no worries!</p>"); // if user exists ouput this
  } else if (employeeIds.indexOf(enterId) < 0){
    $(".result-alert").removeClass("alert-success").addClass("alert-warning");
    $(".result-alert").html("<p>Your photo is not in the system. Please contact <a href='mailto:chadwick.spence@pathways-ky.org'>Chadwick Spence</a> or <a href = 'mailto:cameron.james@pathways-ky.org'> Cameron James</a> Leave your ID number, Name and a contact number in the email.</p>");
  } else {
    $(".result-alert").removeClass("alert-success").addClass("alert-warning");
    $(".result-alert").html("<p>FATAL ERROR PLEASE CONTACT YOUR ADMIN </p>");
  }

}




$(function(){
  checkIDNumber();
})
