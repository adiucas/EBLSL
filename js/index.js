function changeMap(argument) {
	if (argument == "chitta") {
		document.getElementById('headOffice').style.display = "none";
		// document.getElementById('Dhanmondi').style.display = "none";
		document.getElementById('Ctg').style.display = "block";
	}
	if (argument == "head-office") {
		document.getElementById('headOffice').style.display = "block";
		// document.getElementById('Dhanmondi').style.display = "none";
		document.getElementById('Ctg').style.display = "none";
	}
}