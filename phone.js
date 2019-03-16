

$(document).ready(function() {
	$("#dialerContent").show(); 
	$("#contactContent").hide();
	$("#addContent").hide();
	$("#helpContent").hide();
});

$("#dialerName").click(function() { // when "button_id" is clicked
	$("#dialerContent").show(); // show element
	$("#contactContent").hide();
	$("#addContent").hide();
	$("#helpContent").hide();
});

$("#contactName").click(function() { // when "button_id" is clicked
	$("#contactContent").show(); // show element
	$("#dialerContent").hide();
	$("#addContent").hide();
	$("#helpContent").hide();
});

$("#addName").click(function() { // when "button_id" is clicked
	$("#addContent").show(); // show element
	$("#dialerContent").hide();
	$("#contactContent").hide();
	$("#helpContent").hide();
});

$("#helpTab").click(function() { // when "button_id" is clicked
	$("#helpContent").show();
	$("#addContent").hide(); // show element
	$("#dialerContent").hide();
	$("#contactContent").hide();
});

$('#large').click(function (){
   $('link[href="phone.css"]').attr('href','phonecolor.css');
});
$('#original').click(function (){
   $('link[href="phonelarge.css"]').attr('href','phone.css');
});

$('#color').click(function (){
   $('link[href="phonecolor.css"]').attr('href','phonelarge.css');
});