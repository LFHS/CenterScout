var teacher = function(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname; 
	this.name = firstname + " " + lastname;
	this.email = firstname.charAt(0) + lastname + "@lfschools.net";
}

function assignment = function(name, date, grade) {
	this.name = name;
	this.date = date;
	this.grade = grade;
}

var class = function(name, teacher, grade, assignments) {
	this.name = name;
	this.teacher = teacher;
	this.grade = grade;
	this.assignments = assignments;
}

// Example class
// var smith = new teacher("Bob", "Smith");
// var assignments = [new assignment("Homework 7.3", '2014-03-01', 100.00)]
// var math = new class("AAA 1st period blah", smith, 98.76, assignments);
