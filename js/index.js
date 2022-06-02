function changeMap(argument) {
	if (argument == "head-office") {
		document.getElementById('headOffice').style.display = "block";
		document.getElementById('Dhanmondi').style.display = "none";
		document.getElementById('Ctg1').style.display = "none";
		document.getElementById('Ctg2').style.display = "none";
		document.getElementById('Nikun').style.display = "none";
	}
	if (argument == "dhanmondi") {
		document.getElementById('headOffice').style.display = "none";
		document.getElementById('Dhanmondi').style.display = "block";
		document.getElementById('Ctg1').style.display = "none";
		document.getElementById('Ctg2').style.display = "none";
		document.getElementById('Nikun').style.display = "none";
	}
	if (argument == "chitta1") {
		document.getElementById('headOffice').style.display = "none";
		document.getElementById('Dhanmondi').style.display = "none";
		document.getElementById('Ctg1').style.display = "block";
		document.getElementById('Ctg2').style.display = "none";
		document.getElementById('Nikun').style.display = "none";
	}
	if (argument == "chitta2") {
		document.getElementById('headOffice').style.display = "none";
		document.getElementById('Dhanmondi').style.display = "none";
		document.getElementById('Ctg1').style.display = "none";
		document.getElementById('Ctg2').style.display = "block";
		document.getElementById('Nikun').style.display = "none";
	}
	if (argument == "nikunja") {
		document.getElementById('headOffice').style.display = "none";
		document.getElementById('Dhanmondi').style.display = "none";
		document.getElementById('Ctg1').style.display = "none";
		document.getElementById('Ctg2').style.display = "none";
		document.getElementById('Nikun').style.display = "block";
	}
}