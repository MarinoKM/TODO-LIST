

var button0 = document.getElementById("enter");
var input1 = document.getElementById("userinput");
var input2 = document.getElementById("date");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var buttonList1 = document.getElementsByClassName("togglebutton1");
var buttonList2 = document.getElementsByClassName("togglebutton2");
var buttonList3 = document.getElementsByClassName("togglebutton3");
var itemname = document.getElementsByClassName("itemname");

function inputLength() {
	return input1.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button1 = document.createElement("button1");
	button1.className = "togglebutton1";
	button1.appendChild(document.createTextNode("Edit"));
	var button2 = document.createElement("button2");
	button2.className = "togglebutton2";
	button2.appendChild(document.createTextNode("X"));
	var button3 = document.createElement("button3");
	button3.className = "togglebutton3";
	button3.appendChild(document.createTextNode("OK"));
	var itemname = (" " + input1.value + " " + input2.value + " ")
	itemname.className = "itemname";
	li.appendChild(document.createTextNode(itemname));
	ul.appendChild(li);
	input1.value = "";
	input2.value = "";
	li.appendChild(button1);
	li.appendChild(button3);
	li.appendChild(button2);
	itemEvents();
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function toggleItem() {
	this.classList.toggle("done");
}

function deleteItem() {
	if (confirm('Are you sure you want to delete the task?')) {
		this.parentElement.remove();
	} else {

	}

}

function editItem() {
	this.parentElement.contentEditable = "true";
}

function OKItem() {
	this.parentElement.contentEditable = "false";
}

function itemEvents() {
	for (var i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", toggleItem);
	}
	for (var i = 0; i < buttonList1.length; i++) {
		buttonList1[i].addEventListener("click", editItem);
	}
	for (var i = 0; i < buttonList2.length; i++) {
		buttonList2[i].addEventListener("click", deleteItem);
	}
	for (var i = 0; i < buttonList3.length; i++) {
		buttonList3[i].addEventListener("click", OKItem);
	}
}

button0.addEventListener("click", addListAfterClick);
itemEvents();

