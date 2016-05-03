/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Ian Warner")

//var firstname = "Ian";
//var age = 35;

//var awesomeThoughts = "I am Ian and I am AWESOME!"
//console.log(awesomeThoughts);

//var email = "warnerian@gmail.com";

//var newEmail = email.replace("gmail", "selexy");

//console.log(email);
//console.log(newEmail);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
//$("#main").append(funThoughts);
var name = "Ian Warner";
var role = "Full Stack Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
