//Conditional Logic - Relational Expressions
//Conditional Logic - With an Expression
//Conditional Logic - Else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
//code performed if condition is true
	console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
	//you can ride with a parent present
	console.log("Sorry kid, you've got some growing to do first!");
}else{
