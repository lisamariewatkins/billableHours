var dataRef = new Firebase("https://radiant-inferno-254.firebaseio.com/");

//Initial Values
var name;
var role;
var startDate;
var monthlyRate;

//==============================================


function addEmployee (){
	$("#addEmployee").on('click', function(){
		console.log("I work!");

		name = $("#nameinput").val().trim();
		role =  $("#roleinput").val().trim();
		startDate =  $("#dateinput").val().trim();
		monthlyRate =  $("#rateinput").val().trim();

		dataRef.push({
			name: name,
			role: role,
			startDate: startDate,
			monthlyRate: monthlyRate,
			dateAdded: Firebase.ServerValue.TIMESTAMP
		});

		$(".form-control").val("");
		//Don't refresh page
		return false;
	})
}

dataRef.on("child_added", function(childSnapshot){
	$("#employeeTable tbody:last-child").append('<tr><td>' + 
		childSnapshot.val().name +'</td><td>' + 
		childSnapshot.val().role + '</td><td>' + 
		childSnapshot.val().startDate + '</td><td>' +
		childSnapshot.val().monthlyRate + '</td></tr>');
})

//===============================================




//===============================================
$(document).ready(function(){
	addEmployee();
});