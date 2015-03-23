/*****************************/ // Register set up var register = []; var refresh = function() {document.getElementById("r1").innerHTML = register[0]; document.getElementById("r2").innerHTML = register[1]; document.getElementById("r3").innerHTML = register[2]; if (!register[0]) {document.getElementById("r1").innerHTML = "0"; } if (!register[1]) {document.getElementById("r2").innerHTML = "&nbsp"; } if (!register[2]) {document.getElementById("r3").innerHTML = "&nbsp"; } } var entered = false; var operator = false; var btn = []; btn[1] = document.getElementById("one"); btn[2] = document.getElementById("two"); btn[3] = document.getElementById("three");
var register = [];

var refresh = function() {
	document.getElementById("r1").innerHTML = register[0];
	document.getElementById("r2").innerHTML = register[1];
	document.getElementById("r3").innerHTML = register[2];
	if (!register[0]) {
		document.getElementById("r1").innerHTML = "0";
	}
	if (!register[1]) {
		document.getElementById("r2").innerHTML = "&nbsp";
	}
	if (!register[2]) {
		document.getElementById("r3").innerHTML = "&nbsp";
	}

}

var entered = false;
var operator = false;

var btn = [];
btn[1] = document.getElementById("one");
btn[2] = document.getElementById("two");
btn[3] = document.getElementById("three");
btn[4] = document.getElementById("four");
btn[5] = document.getElementById("five");
btn[6] = document.getElementById("six");
btn[7] = document.getElementById("seven");
btn[8] = document.getElementById("eight");
btn[9] = document.getElementById("nine");
btn[0] = document.getElementById("zero");

for (var i = 0;i < 10;i++) {
	btn[i].onclick = function() {
		if (operator) {
			register.unshift(register[0]);
			console.log(register);
			register[0] = parseFloat(this.innerHTML)
			refresh();
			operator = false;
			console.log(register);
		}
		else if (!entered) {
			document.getElementById("r1").innerHTML = this.innerHTML;
			entered = true;
		}
		else {
			document.getElementById("r1").innerHTML += this.innerHTML;
		}
	}
}

var btnD = document.getElementById("decimal");
btnD.onclick = function() {
	if (operator) {
		register.unshift(register[0]);
		refresh();
		console.log(register);
		document.getElementById("r1").innerHTML = "0."
		operator = false;
		console.log(register);
		entered = true;
	}
	else if (!entered) {
		document.getElementById("r1").innerHTML = this.innerHTML
		entered = true;
	}
	else {
		document.getElementById("r1").innerHTML += this.innerHTML;
	}
}

/*******************************/
// operator Buttons
var btnN = document.getElementById("negative");
btnN.onclick = function() {
	document.getElementById("r1").innerHTML *= -1;
}

var btnC = document.getElementById("clear");
btnC.onclick = function() {
	document.getElementById("r1").innerHTML = "0";
	entered = false;
}

var btnE = document.getElementById("enter");
btnE.onclick = function() {
	register[0] = parseFloat(document.getElementById("r1").innerHTML);
	console.log("first register is: " + register);
	register.unshift(parseFloat(document.getElementById("r1").innerHTML));
	register[0] = parseFloat(document.getElementById("r1").innerHTML);
	refresh();
	console.log("After unshift, register is now: " + register);
	entered = false;
	refresh();
}

var btnE = document.getElementById("add");
btnE.onclick = function() {
	register[0] = parseFloat(document.getElementById("r1").innerHTML);
	var result = register[0] + register[1];
	console.log("sum is: " + result);
	register.shift();
	register[0] = result;
	document.getElementById("r1").innerHTML = result;
	operator = true;
	refresh();
	console.log("r1 is: " + register[0]);

	console.log("r2 is: " + register[1]);
}

var btnE = document.getElementById("subtract");
btnE.onclick = function() {
	register[0] = parseFloat(document.getElementById("r1").innerHTML);
	var result = register[1] - register[0];
	console.log(result);
	register.shift();
	register[0] = result;
	document.getElementById("r1").innerHTML = result;
	refresh();
	operator = true;
}

var btnE = document.getElementById("multiply");
btnE.onclick = function() {
	register[0] = parseFloat(document.getElementById("r1").innerHTML);
	var result = register[0] * register[1];
	console.log(result);
	register.shift();
	register[0] = result;
	document.getElementById("r1").innerHTML = result;
	refresh();
	operator = true;
}

var btnE = document.getElementById("divide");
btnE.onclick = function() {
	register[0] = parseFloat(document.getElementById("r1").innerHTML);
	var result = register[1] / register[0];
	console.log(result);
	register.shift();
	register[0] = result;
	document.getElementById("r1").innerHTML = result;
	refresh();
	operator = true;
}

var btnCR = document.getElementById("clearReg");
btnCR.onclick = function() {
	register = [];
	refresh();
	entered = false;
}

