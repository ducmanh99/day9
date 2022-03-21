// hw1
// function checkAge(age) {
// 	// return age > 18 ? true : confirm("Did parents allow you?");
// 	return age > 18 || confirm("Did parents allow you?");
// }
// console.log(checkAge(prompt("how old are you")));
// hw2
// function min(a, b) {
// 	// 	if (a > b) {
// 	// 		return b;
// 	// 	} else {
// 	// 		return a;
// 	// 	}
// 	return a < b ? a : b;
// }

// console.log(min(0, 10));
//  hw3
// let ask = (question, yes, no) => {
// 	if (confirm(question)) yes();
// 	else no();
// };

// ask(
// 	"Do you agree?",
// 	() => {
// 		alert("You agreed.");
// 	},
// 	() => {
// 		alert("You canceled the execution.");
// 	}
// );
// hw4
let name = prompt(" nhap tai khoan cua ban");
if (name == " admin") {
	let pass = prompt(" nhap password");
	pass == " mindx" ? alert(" chao mung") : alert(" mat khau khong dung");
} else if (name == "" || name == "esc") {
	alert("Canceled.");
} else {
	alert("toi khong biet ban");
}
