var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul.Shopping");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.className = "box zone shoppingitems";
	var button = document.createElement("button");
	button.className = "delete";
	button.innerHTML = "&nbsp;&#10007;&nbsp;";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeyPress)

ul.addEventListener("click", function(event) {
	console.log(event.target.className);
	if (event.target.className === "box zone shoppingitems") {
		event.target.classList.toggle("done");
	} else {
		ul.removeChild(event.target.parentElement)
	}
})
