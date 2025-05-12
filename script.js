function grade() {
var english = document.getElementById("eng");
var math = document.getElementById("math");
var social= document.getElementById("ss");

var eng = Number(english.value);
var math = Number (math.value);
var ss = Number(social.value);

var grade = (eng+math+ss) / 3;
var rounded = grade.toFixed(2);

if (grade > 70 && grade <= 74.99) {
      window.alert("Your grade is " + rounded + ", it's okay!");
         }

else if (grade >= 75 && grade <= 79.99) {
        window.alert("Your grade is " + rounded + ", you're getting there!");
        }

else if (grade >= 80 && grade <= 86.99) {
        window.alert("Your grade is " + rounded + ", nice!");
        }

else if (grade >= 87 && grade <= 93.99) {
        window.alert("Your grade is " + rounded + ", good job!");
        }   

else if (grade >= 94 && grade <= 100) {
        window.alert("Your grade is " + rounded + ", woah!");
        }
}