$(document).ready(function(){

const kilometers5 = 5;
const kilometers10 = 10;
const halfMarathon = 21.097;
const marathon = 42.195;
const hoursToSeconds = 3600;
const minutesToSeconds = 60;


function chosedOption(){
	var select = document.getElementById("distance");
	var choice = select.options[select.selectedIndex].value;
	if(choice === "kilometers5"){
		var distance = kilometers5;
	} else if (choice === "kilometers10"){
		var distance = kilometers10;
	} else if (choice === "halfMarathon"){
		var distance = halfMarathon;
	} else if (choice === "marathon"){
		var distance = marathon
	}

	return distance;
}


function convertToSeconds(hours, minutes, seconds) {
        
        if (hours > 24 || minutes > 59 || seconds > 59) {
            console.log("Wprowadzono błędne dane.");
            backToMenu = true;
        }	else {
            var hoursRecalculated = hours * hoursToSeconds;
            var minutesRecalculated = minutes * minutesToSeconds;
            var secondsRecalculated = seconds;
            return hoursRecalculated + minutesRecalculated + parseFloat(secondsRecalculated);
            
        }
    }

function countPace (timeInSeconds, distance){
            var countedPaceInSeconds = (timeInSeconds / distance).toFixed();
            if((countedPaceInSeconds % minutesToSeconds) <= 9) {
            	var countedPace = Math.floor((countedPaceInSeconds / minutesToSeconds)) + ":0" + (countedPaceInSeconds % minutesToSeconds).toFixed() + " min/km";
            } else {
            	var countedPace = Math.floor((countedPaceInSeconds / minutesToSeconds))+ ":" +(countedPaceInSeconds % minutesToSeconds).toFixed() + " min/km";
            }
            return countedPace;
        }

$(".button").click(function(event) {
		event.preventDefault();

	var message = document.getElementById("message");
    message.innerHTML = "";	

	try{
		var distance = chosedOption();
		var hours = $("#hours").val();
		var minutes = $("#minutes").val();
		var seconds = $("#seconds").val();

		if(isNaN(hours) || isNaN(minutes) || isNaN(seconds)){
			throw error
		}
		} catch (error){
			message.innerHTML = "Wprowadź dane liczbowe";
		}
		var p = document.querySelector("p");		

		var timeInSeconds = convertToSeconds(hours, minutes, seconds);
		console.log(timeInSeconds);
		var countedPace = countPace(timeInSeconds, distance);
		console.log(countedPace);

		p.innerHTML = "Twoje szacowane tempo to: " + countedPace;		

		var reset = document.getElementById("reset");
		$("p").show(400);
		$("reset").show(400);
		
		}); 

});


