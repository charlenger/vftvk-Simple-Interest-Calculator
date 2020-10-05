function compute()
{
	principalElement = document.getElementById("principal");
    principal = principalElement.value;
	if(isNaN(principal) || principal.length == 0 || principal < 0) {
		alert("Please insert a positive number");
		principalElement.focus();
		principalElement.classList.add("redBorder");
	} else {
		principalElement.classList.remove("redBorder");
		rate = document.getElementById("rate").value;
		years = document.getElementById("years").value;
		interest = principal * years * rate / 100;
		currentDate = new Date();
		currentDate.setFullYear(currentDate.getFullYear() + parseInt(years));
		futureYear = currentDate.getFullYear();

		document.getElementById("result").innerHTML = "If you deposit " + principal
													+ "<br/> at an interest rate of " + rate + "%"
													+ "<br/> You will receive an amount of " + interest
													+ "<br/> in the year " + futureYear
	}
}

function updateRate() {
	rate = document.getElementById("rate").value;
	document.getElementById("rateValue").innerHTML = rate + "%";
}
        